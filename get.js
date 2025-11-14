(async () => {
  const url = 'https://routinehub.co/shortcuts/?sort=updated';
  const res = await fetch(url, { headers: { 'User-Agent': navigator.userAgent } });
  const html = await res.text();

  const regex = /<a\s+href="(\/shortcut\/\d{5}\/)"/g;
  const matches = [];
  let m;
  while ((m = regex.exec(html)) !== null) {
    if (!matches.includes(m[1])) matches.push(m[1]);
  }

  console.log(matches);
})();
