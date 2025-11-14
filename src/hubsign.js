const fs = require('fs');
const path = require('path');
const FormData = require('form-data');

const HUBSIGN_ENDPOINT = 'https://hubsign.routinehub.services/sign';

async function signShortcut({
  shortcutPath,
  name,
  endpoint = HUBSIGN_ENDPOINT,
  apiKey,
}) {
  if (!shortcutPath) {
    throw new Error('A shortcut path is required for HubSign.');
  }

  const resolvedPath = path.resolve(shortcutPath);
  await fs.promises.access(resolvedPath, fs.constants.R_OK);
  const fileBuffer = await fs.promises.readFile(resolvedPath);

  const shortcutName =
    name ||
    path.basename(resolvedPath, path.extname(resolvedPath)) ||
    'Shortcut';

  const form = new FormData();
  form.append('shortcut_name', shortcutName);
  if (apiKey || process.env.HUBSIGN_API_KEY) {
    form.append('api_key', apiKey || process.env.HUBSIGN_API_KEY);
  }
  const fileAttachment = {
    filename: path.basename(resolvedPath) || `${shortcutName}.shortcut`,
    contentType: 'application/octet-stream',
  };
  form.append('shortcut', fileBuffer, fileAttachment);
  form.append('shortcut_file', fileBuffer, fileAttachment);

  const { status, statusMessage, body } = await new Promise(
    (resolve, reject) => {
      form.submit(endpoint, (error, res) => {
        if (error) {
          reject(error);
          return;
        }

        const chunks = [];
        res.on('data', (chunk) => chunks.push(chunk));
        res.on('error', reject);
        res.on('end', () => {
          resolve({
            status: res.statusCode,
            statusMessage: res.statusMessage,
            body: Buffer.concat(chunks),
          });
        });
      });
    },
  );

  if (status < 200 || status >= 300) {
    const bodyText = body.toString('utf8');
    throw new Error(
      `HubSign failed (${status}): ${bodyText || statusMessage}`,
    );
  }

  const trimmed = body.slice(0, 1).toString('utf8');
  if (trimmed === '{' || trimmed === '[') {
    try {
      const parsed = JSON.parse(body.toString('utf8'));
      if (parsed.result && parsed.result !== 'success') {
        throw new Error(parsed.message || 'HubSign returned an error.');
      }
      if (!parsed.result && !parsed.WFWorkflowActions) {
        throw new Error('Unexpected HubSign response.');
      }
    } catch (error) {
      throw new Error(
        `HubSign error: ${
          error.message || body.toString('utf8').slice(0, 200)
        }`,
      );
    }
  }

  await fs.promises.writeFile(resolvedPath, body);
  return {
    path: resolvedPath,
    size: body.length,
  };
}

module.exports = {
  signShortcut,
};
