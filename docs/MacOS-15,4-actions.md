# Apple Shortcuts Action Reference

This document was auto-generated from `actions/MacOS-15.4/compiled.json` (source: `actions\MacOS-15.4\compiled.json`).

Use these action identifiers inside `action("<identifier>", { ...parameters })` when building shortcuts with js-to-shortcut. Each action lists the known parameters and any descriptions exported by Shortcuts on macOS 15.4.

## Add 2Do Task (`com.guidedways.2Do.add`)

Adds a new task to 2Do.

| Key | Display Name | Description |
| --- | --- | --- |
| `twodoTask` | Title |  |
| `twodoDueDate` | Due Date |  |
| `twodoDueTime` | Due Time |  |
| `twodoStart` | Start Date |  |
| `twodoList` | List |  |
| `twodoParentName` | Project Name |  |
| `twodoTags` | Tags |  |
| `twodoLocations` | Locations |  |
| `twodoStarred` | Starred |  |
| `twodoType` | Type |  |
| `twodoActionType` | Action |  |
| `twodoActionValue` | Action Value |  |
| `twodoPriority` | Priority |  |
| `twodoRepeat` | Repeat |  |
| `twodoNotes` | Notes |  |

## Add Clear List (`com.realmacsoftware.clear.createlist`)

Adds a new list to Clear.

| Key | Display Name | Description |
| --- | --- | --- |
| `ClearListName` | Name |  |
| `ClearListPosition` | List Position |  |

## Add Clear Task (`com.realmacsoftware.clear.createtask`)

Adds a new task to a given list in Clear.

| Key | Display Name | Description |
| --- | --- | --- |
| `ClearTaskName` | Task Name |  |
| `ClearListName` | List |  |
| `ClearTaskPosition` | Position |  |

## Add Due Reminder (`com.phocusllp.due.add`)

Adds a new reminder to Due.

| Key | Display Name | Description |
| --- | --- | --- |
| `dueTitle` | Item |  |
| `dueDueDate` | Date |  |
| `DueRepeatEnabled` | Repeat |  |
| `dueRecurFreq` | Every |  |
| `dueRecurUnit` | Period |  |

## Add Event via Fantastical (`com.flexibits.fantastical2.addevent`)

Adds the input text to your calendar using Fantastical, optionally including notes as well.

| Key | Display Name | Description |
| --- | --- | --- |
| `FantasticalEventSentence` | Event |  |
| `FantasticalEventNotes` | Notes |  |
| `FantasticalEdit` | Edit in Fantastical |  |

## Add Frame to GIF (`is.workflow.actions.addframetogif`)

Adds an image to the existing animated GIF passed as input. If no GIF is passed as input, a new animated GIF is created.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFImage` | Image |  |
| `WFInputGIF` | GIF |  |
| `WFGIFDelayTime` | Delay Time |  |
| `WFGIFAutoSize` | Auto Size |  |
| `WFGIFManualSizeWidth` | Width |  |
| `WFGIFManualSizeHeight` | Height |  |

## Add New Calendar (`is.workflow.actions.addnewcalendar`)

Creates a new calendar.

| Key | Display Name | Description |
| --- | --- | --- |
| `CalendarName` | Calendar Name |  |

## Add New Contact (`is.workflow.actions.addnewcontact`)

Creates a new contact.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFContactFirstName` | First name | The first name of the contact. |
| `WFContactLastName` | Last name | The last name of the contact. |
| `WFContactCompany` | Company | The company of the contact. |
| `WFContactPhoto` | Photo |  |
| `WFContactPhoneNumbers` | Phone Number |  |
| `WFContactEmails` | Email Address |  |
| `WFContactNotes` | Notes | Optionally, notes for this contact. |
| `ShowWhenRun` | Show Compose Sheet |  |

## Add New Event (`is.workflow.actions.addnewevent`)

Creates a new event and adds it to the selected calendar.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFCalendarItemTitle` | Title | The title of this event. |
| `WFCalendarItemLocation` | Location |  |
| `WFCalendarDescriptor` | Calendar | The calendar to add this event to. |
| `WFCalendarItemStartDate` | Start Date | Text representing the date this event begins. Examples: “tomorrow at 2”, “January 3”, “8:00pm” |
| `WFCalendarItemEndDate` | End Date | Text representing the date this event finishes. |
| `WFCalendarItemAllDay` | All Day | When enabled, the event takes place over an entire day and time is ignored. |
| `WFAlertTime` | Alert | Optionally, when to show an alert to notify me of this event. |
| `WFAlertCustomTime` | Alert Time | Text representing the date when the alert should occur. Examples: “tonight at 7”, “March 7” |
| `WFCalendarItemNotes` | Notes | Optionally, a description for this event. |
| `ShowWhenRun` | Show Compose Sheet |  |

## Add New Reminder (`is.workflow.actions.addnewreminder`)

Creates a new reminder and adds it to the selected list of reminders.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFCalendarItemTitle` | Reminder | The title of this reminder. |
| `WFCalendarDescriptor` | List | The list of reminders to add this reminder to. |
| `WFAlertEnabled` | Alert |  |
| `WFAlertCondition` | Trigger |  |
| `WFAlertLocation` | Location | The location that triggers the alert. |
| `WFAlertPerson` | Person | The reminder notification will be shown when chatting with this person in Messages. |
| `WFAlertLocationRadius` | Radius | The distance from the provided location to consider "arriving" or "leaving" the location |
| `WFAlertCustomTime` | Time | Text representing the date or date and time when the alert should occur. Examples: “tonight at 7”, “March 7” |
| `WFPriority` | Priority |  |
| `WFFlag` | Flag |  |
| `WFURL` | URL | Optionally, a URL to attach to this reminder. |
| `WFImages` | Images | An optional set of images to attach to this reminder. Use a variable to get the images. |
| `WFParentTask` | Parent Reminder | Optionally, a parent reminder to add this reminder to. |
| `WFCalendarItemNotes` | Notes | Optionally, a description for this reminder. |

## Add OmniFocus Item (`com.omnigroup.OmniFocus2.iPhone.newitem`)

Adds a new item to OmniFocus with the specified details.

| Key | Display Name | Description |
| --- | --- | --- |
| `OmniFocusName` | Item |  |
| `OmniFocusDefer` | Defer Until |  |
| `OmniFocusDue` | Due |  |
| `OmniFocusProject` | Project |  |
| `OmniFocusContext` | Context |  |
| `OmniFocusFlag` | Flag |  |
| `OmniFocusParallel` | Parallel |  |
| `OmniFocusAutosave` | Edit in OmniFocus |  |
| `OmniFocusAttachments` | Attachments | A list of items to be attached to the new OmniFocus item as files. |
| `OmniFocusNote` | Note |  |

## Add PDF to Books (`com.apple.iBooksX.openin`)

Opens the input as a PDF in Books.

| Key | Display Name | Description |
| --- | --- | --- |
| `BooksInput` | File |  |

## Add Reminder via Fantastical (`com.flexibits.fantastical2.addreminder`)

Adds the input text as a reminder using Fantastical, optionally including notes as well.

| Key | Display Name | Description |
| --- | --- | --- |
| `FantasticalInput` | Reminder |  |
| `FantasticalEventNotes` | Notes |  |
| `FantasticalEdit` | Edit in Fantastical |  |

## Add Task to The Hit List (`com.potionfactory.TheHitListMobile.tasks`)

Adds a new task to The Hit List.

| Key | Display Name | Description |
| --- | --- | --- |
| `thlTitle` | Task |  |
| `thlListName` | List | Specify the list for your new task. If empty, the task will be added to your Inbox. |
| `thlFolderName` | List Folder |  |
| `thlURL` | URL |  |
| `thlNotes` | Notes |  |
| `thlStartDate` | Start Date |  |
| `thlDueDate` | Due Date |  |
| `thlPriority` | Priority |  |

## Add TaskPaper to OmniFocus (`com.omnigroup.OmniFocus2.iPhone.pastetaskpaper`)

Adds the TaskPaper passed as input into OmniFocus.

| Key | Display Name | Description |
| --- | --- | --- |
| `OmniFocusProject` | Add to |  |
| `OmniFocusFolderName` | Folder |  |
| `OmniFocusProjectName` | Project |  |
| `OmniFocusTaskIdentifier` | Task Identifier |  |
| `OmniFocusTaskPaperInput` | TaskPaper |  |

## Add Things To-Do (`com.culturedcode.ThingsTouch.addtask`)

Adds a new to-do item to Things.

| Key | Display Name | Description |
| --- | --- | --- |
| `thingsTask` | Task |  |
| `thingsList` | List |  |
| `thingsProjectHeading` | Project Heading |  |
| `thingsWhen` | When |  |
| `thingsWhenCustomDate` | Date |  |
| `thingsWhenReminderTime` | Reminder Time |  |
| `thingsDueDate` | Deadline |  |
| `thingsTags` | Tags | A comma-separated list of tags to add to the new to-do. |
| `thingsShowQuickEntry` | Edit in Things | Whether to show the to-do editor in Things, or return to Shortcuts immediately. |
| `thingsNote` | Notes |  |

## Add to Bear Note (`net.shinyfrog.bear-IOS.add`)

Adds text or a file to a note in Bear. You can specify either the note title or the note identifier.

| Key | Display Name | Description |
| --- | --- | --- |
| `BearAttachmentType` | Attach |  |
| `BearMode` | Mode |  |
| `BearTitle` | Title | The title of the note to add to in Bear. |
| `BearIdentifier` | Note Identifier | The identifier of the note to add to in Bear. You can find a note’s identifier by swiping left on the note in the list, choosing “More”, and choosing “Copy note identifier.” |
| `BearReturn` | Return to Shortcuts | If enabled, Bear will re-open Shortcuts after creating the new note. |

## Add to Draft (`com.agiletortoise.Drafts4.addto`)

This action will add the input to the specified draft in Drafts and allows you to run a Drafts action on it.

| Key | Display Name | Description |
| --- | --- | --- |
| `DraftsInput` | Text |  |
| `DraftsAddMode` | Mode |  |
| `DraftsUUID` | Draft UUID | The UUID of the draft (can be found inside of the Drafts app) |
| `DraftsReturn` | Edit in Drafts | Whether to stay editing in Drafts or to immediately return to Shortcuts |
| `DraftsActionEnabled` | Run Action |  |
| `DraftsAction` | Action | The Drafts action to run automatically |
| `DraftsActionKey` | Key | The URL security key specified in Drafts settings, if it's required |
| `DraftsAfterSuccess` | After Success | What to do with the draft if the action succeeds |

## Add to Instapaper (`is.workflow.actions.instapaper.add`)

Adds the input to Instapaper.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFInstapaperFolder` | Folder | This action will save your input to the specified folder. Leaving this empty will save the input to Instapaper's Home folder. |
| `WFInputURL` | URL |  |

## Add to Overcast (`fm.overcast.overcast.add`)

Adds the input URL as a podcast in Overcast.

_This action does not expose any parameters._

## Add to Pinboard (`is.workflow.actions.pinboard.add`)

Adds the URL passed into the action to your Pinboard.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFPinTitle` | Title |  |
| `WFPinTags` | Tags |  |
| `WFPinPublic` | Public |  |
| `WFPinUnread` | Unread |  |
| `WFPinDescription` | Description |  |
| `WFPinboardURL` | URL |  |

## Add to Playing Next (`is.workflow.actions.addmusictoupnext`)

Adds the music passed as input to your Playing Next queue.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFWhenToPlay` | Play |  |
| `WFMusic` | Music |  |

## Add to Playlist (`is.workflow.actions.addtoplaylist`)

Adds the items passed as input to the specified playlist.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFPlaylistName` | Playlist |  |
| `WFInput` | Music |  |

## Add to Pocket (`is.workflow.actions.pocket.add`)

Adds the input to Pocket.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFPocketTags` | Tags | A comma-separated list of tags to apply to the items added to Pocket. |
| `WFInputURL` | URL |  |

## Add to Quotebook (`net.lickability.Quotebook.addquote`)

| Key | Display Name | Description |
| --- | --- | --- |
| `QuotebookQuote` | Quote |  |
| `QuotebookAuthor` | Author |  |
| `QuotebookSource` | Source |  |

## Add to Reading List (`is.workflow.actions.readinglist`)

Adds URLs passed into the action to your reading list.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFURL` | URL |  |

## Add to Ulysses Sheet (`com.soulmen.ulysses.pad.insert`)

Adds text to an existing sheet in Ulysses.

| Key | Display Name | Description |
| --- | --- | --- |
| `UlyssesContent` | Text |  |
| `UlyssesInsertLocation` | Add to |  |
| `UlyssesSheetIdentifier` | Identifier | The identifier of the sheet the text should be inserted into. You can find the identifier of a sheet in Ulysses by swiping left on the sheet in the list, choosing “More”, tapping “Share...”, and choosing “Copy Callback Identifier”. |
| `UlyssesTextFormat` | Format | Specifies the format of the text to add: Markdown, Text, or HTML. |
| `UlyssesAppendNewline` | Make New Line |  |
| `UlyssesPrependNewline` | Make New Line |  |
| `UlyssesReturn` | Return to Shortcuts | If enabled, Ulysses will re-open Shortcuts after adding the text to the sheet. |

## Add to Variable (`is.workflow.actions.appendvariable`)

Appends this action's input to the specified variable, creating the variable if it does not exist.

This allows you to make a variable hold multiple items.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFInput` | Input |  |

## Add Todoist Item (`is.workflow.actions.todoist.add`)

Adds a new item to Todoist.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFTodoistContent` | Item |  |
| `WFTodoistProject` | Project |  |
| `WFTodoistDueDate` | Due Date |  |
| `WFTodoistReminder` | Remind Me On |  |
| `WFTodoistReminderType` | Reminder Type |  |
| `WFTodoistPriority` | Priority |  |
| `WFTodoistNotes` | Notes |  |
| `WFTodoistFile` | Files |  |

## Add Trello Card (`is.workflow.actions.trello.add.card`)

Creates a new card on the specified list and board in your Trello account.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFTrelloName` | Item |  |
| `WFTrelloBoard` | Board |  |
| `WFTrelloList` | List |  |
| `WFTrelloDueDate` | Due |  |
| `WFTrelloCardPosition` | Position |  |
| `WFTrelloAttachments` | Attachments | A list of items to be attached to the new card as files. |
| `WFTrelloDescription` | Description |  |

## Adjust Date (`is.workflow.actions.adjustdate`)

Adds or subtracts an amount of time from the date passed into the action.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFDate` | Date |  |
| `WFAdjustOperation` | Operation |  |
| `WFDuration` | Duration |  |

## AirDrop (`is.workflow.actions.airdropdocument`)

Prompts to share the input via AirDrop.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFInput` | Content |  |

## Append to Captio Note (`com.boonbits.captio.appendtonote`)

Opens Captio and appends the specified note text to the current note.

| Key | Display Name | Description |
| --- | --- | --- |
| `captioNote` | Text |  |

## Append to Dropbox Text File (`is.workflow.actions.dropbox.appendfile`)

Adds the text passed as input to the end of the specified file.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFFilePath` | File Path | The name or path of the file to retrieve. For example, if you are appending a file called “notes.txt” in a folder called “Public”, use “/Public/notes.txt”. |
| `WFAppendFileWriteMode` | Mode |  |
| `WFAppendOnNewLine` | Make New Line |  |
| `WFInput` | Text |  |

## Append to Evernote (`is.workflow.actions.evernote.append`)

Finds a note using the specified criteria and appends the input to the note.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFInput` | Content |  |
| `WFEvernoteNotesTitleSearch` | Note Title | The title (or part of the title) of the note to append to |
| `WFEvernoteWriteMode` | Mode |  |

## Append to Text File (`is.workflow.actions.file.append`)

Adds the text passed as input to the end of the specified text file.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFFile` | Folder |  |
| `WFFilePath` | File Path | The name or path of the file to retrieve. For example, if you are appending a file called “notes.txt” in a folder called “Public”, use “/Public/notes.txt”. |
| `WFAppendFileWriteMode` | Mode |  |
| `WFAppendOnNewLine` | Make New Line |  |
| `WFInput` | Text |  |

## Attach to Ulysses Sheet (`com.soulmen.ulysses.pad.attach`)

Attaches a note, an image, or keywords to a sheet in Ulysses.

| Key | Display Name | Description |
| --- | --- | --- |
| `UlyssesAttachmentType` | Attach |  |
| `UlyssesSheetIdentifier` | Sheet Identifier | The identifier of the sheet to which the note will be added. You can find the identifier of a sheet in Ulysses by swiping left on the sheet in the list, choosing “More”, tapping “Share...”, and choosing “Copy Callback Identifier”. |
| `UlyssesAttachmentKeywords` | Keywords | A comma-separated list of keywords to attach to the sheet. |
| `UlyssesTextFormat` | Format | Specifies the format of the text to add: Markdown, Text, or HTML. |
| `UlyssesReturn` | Return to Shortcuts | If enabled, Ulysses will re-open Shortcuts after attaching. |

## Base64 Encode (`is.workflow.actions.base64encode`)

Encodes or decodes text or files using Base64 encoding.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFEncodeMode` | Mode |  |
| `WFBase64LineBreakMode` | Line Breaks |  |
| `WFInput` | Input |  |

## Calculate (`is.workflow.actions.math`)

Performs a number operation on the input and returns the result.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFInput` | Number |  |
| `WFMathOperation` | Operation |  |
| `WFScientificMathOperation` | Scientific Operation |  |
| `WFMathOperand` | Operand |  |
| `WFScientificMathOperand` | Operand |  |

## Calculate Expression (`is.workflow.actions.calculateexpression`)

Evaluates the mathematical expression in the given input string and outputs the result as a number.

| Key | Display Name | Description |
| --- | --- | --- |
| `Input` | Input |  |

## Calculate Statistics (`is.workflow.actions.statistics`)

Calculates statistics on the numbers that are provided as input.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFStatisticsOperation` | Operation |  |
| `Input` | Input |  |

## Call via Skype (`com.skype.skype.call`)

Calls the phone number or Skype name passed as input.

| Key | Display Name | Description |
| --- | --- | --- |
| `SkypePerson` | Person |  |

## Change Playback Destination (`is.workflow.actions.setplaybackdestination`)

Changes the current playback destination. Use this action to route audio to AirPods, Bluetooth speakers, HomePod, or other AirPlay devices. Optionally, this action can add or remove devices from a group, so you can route audio to multiple devices at once.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFMediaRouteOperation` | Operation |  |
| `WFMediaRoute` | Device | The device that is set, added, or removed as playback destination. |

## Clear Playing Next (`is.workflow.actions.clearupnext`)

Clears all the music in your Playing Next queue.

_This action does not expose any parameters._

## Combine Images (`is.workflow.actions.image.combine`)

Combines the images passed into the action horizontally, vertically, or in a grid.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFImageCombineMode` | Mode |  |
| `WFImageCombineSpacing` | Spacing | The number of pixels of transparent space to place between consecutive images. |
| `WFInput` | Images |  |

## Comment (`is.workflow.actions.comment`)

This action lets you explain how part of a shortcut works. When run, this action does nothing.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFCommentActionText` | Comment |  |

## Connect to Servers (`is.workflow.actions.connecttoservers`)

Connects your computer to the specified file servers on the network. For example, you can connect to SMB/CIFS, NFS, FTP (read-only), or WebDAV servers.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFInput` | smb://computer.local |  |

## Contacts (`is.workflow.actions.contacts`)

Passes the specified contacts to the next action.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFContact` | Contact |  |

## Continue in Shortcuts App (`is.workflow.actions.handoff`)

Switches into the Shortcuts app and continues to the next action.

_This action does not expose any parameters._

## Control Home (`is.workflow.actions.homeaccessory`)

Set the state of your home.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFHome` | Home |  |

## Convert Image (`is.workflow.actions.image.convert.finder`)

| Key | Display Name | Description |
| --- | --- | --- |
| `WFPreserveMetadata` | Preserve Metadata |  |
| `WFImage` | Image |  |
| `WFFileFormat` | File Format |  |
| `WFSize` | Image Size |  |

## Convert Image (`is.workflow.actions.image.convert`)

Converts the images passed into the action to the specified image format.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFImageFormat` | Format |  |
| `WFImageCompressionQuality` | Quality | Allows you to choose the image quality used when compressing the image file. Higher quality images will look better, but result in larger files. |
| `WFImagePreserveMetadata` | Preserve Metadata | When Preserve Metadata is turned off, all metadata, such as the GPS coordinates where the photo was taken, will be stripped from the image file. |
| `WFInput` | Image |  |

## Convert Measurement (`is.workflow.actions.measurement.convert`)

Converts the measurements passed into the action to the specified unit.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFMeasurementUnitType` | Type |  |
| `WFMeasurementUnit` | Unit |  |
| `WFInput` | Measurement |  |

## Convert Time Zone (`is.workflow.actions.converttimezone`)

Converts the specified date and time from one time zone to another.

| Key | Display Name | Description |
| --- | --- | --- |
| `Date` | Date |  |
| `SourceTimeZone` | Time Zone |  |
| `DestinationTimeZone` | Destination Time Zone |  |

## Convert URL with Associate (`squibner.AmazonLinker.convert`)

Converts the Amazon URL passed as input to an affiliate link using Associate.

| Key | Display Name | Description |
| --- | --- | --- |
| `AssociateURL` | URL |  |

## Convert URL with Blink (`com.squibner.Blink.convert`)

Converts the iTunes Store or App Store URL passed as input to an affiliate link using Blink.

_This action does not expose any parameters._

## Copy to Clipboard (`is.workflow.actions.setclipboard`)

Copies the result of the last action to the clipboard.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFLocalOnly` | Local Only | When enabled, the input will only be copied locally, and will not be shared to other devices via Handoff. |
| `WFExpirationDate` | Expire At | When set, the clipboard contents will expire and be automatically deleted at the specified time. Optional. |
| `WFInput` | Content |  |

## Count (`is.workflow.actions.count`)

Counts the number of items, characters, words, sentences, or lines passed as input.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFCountType` | Type |  |
| `Input` | Input |  |

## Create Bear Note (`net.shinyfrog.bear-IOS.create`)

Creates a new note in Bear.

| Key | Display Name | Description |
| --- | --- | --- |
| `BearNoteInput` | Content |  |
| `BearTitle` | Note Title | The title of the created note |
| `BearTags` | Tags | The tags to attach to the created note |
| `BearReturn` | Return to Shortcuts | If enabled, Bear will re-open Shortcuts after creating the new note. |

## Create Bear Note from URL (`net.shinyfrog.bear-IOS.grab`)

Creates a new Bear note with the contents of a web page.

| Key | Display Name | Description |
| --- | --- | --- |
| `BearTags` | Tags | The tags to attach to the created note |
| `BearImages` | Include Images | If enabled, Bear will grab the images from the page. |
| `BearReturn` | Return to Shortcuts | If enabled, Bear will re-open Shortcuts after creating the new note. |
| `BearURL` | URL |  |

## Create Day One Entry (`com.dayonelog.dayoneiphone.post`)

Creates a new entry in Day One.

| Key | Display Name | Description |
| --- | --- | --- |
| `EntryText` | Text |  |
| `EntryTags` | Tags |  |
| `EntryJournal` | Journal |  |
| `imageClipboard` | Image |  |

## Create Folder (`is.workflow.actions.file.createfolder`)

Makes a new folder.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFFilePath` | Path | The path of the new folder. For example, if you want to create “Adventure” in an existing folder titled “Photos”, put “/Photos/Adventure/” |
| `WFFolder` | Folder |  |

## Create New Note (`is.workflow.actions.evernote.new`)

Saves the input as a note in Evernote.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFEvernoteNoteTitle` | Note Title |  |
| `WFInput` | Content |  |

## Create Photo Album (`is.workflow.actions.photos.createalbum`)

Creates a new album in the Photos app, including the specified photos and videos.

| Key | Display Name | Description |
| --- | --- | --- |
| `AlbumName` | Album Name | If there is already a photo album by this name, photos will be added to the existing album instead of creating a new one. |
| `WFInput` | Photos |  |

## Create Playlist (`is.workflow.actions.createplaylist`)

Creates a new playlist in the Music app, adding any items passed as input to the new playlist.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFPlaylistName` | Playlist Name |  |
| `WFPlaylistAuthor` | Author |  |
| `WFPlaylistDescription` | Description |  |
| `WFPlaylistItems` | Music |  |

## Create Trello Board (`is.workflow.actions.trello.add.board`)

Creates a new board in your Trello account.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFTrelloName` | Name |  |
| `WFTrelloDescription` | Description |  |

## Create Trello List (`is.workflow.actions.trello.add.list`)

Creates a new list on the specified board in your Trello account.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFTrelloName` | Name |  |
| `WFTrelloBoard` | Board |  |
| `WFTrelloPosition` | Position |  |

## Create Ulysses Group (`com.soulmen.ulysses.pad.new-group`)

Creates a new group in Ulysses.

| Key | Display Name | Description |
| --- | --- | --- |
| `UlyssesGroupName` | Group | The name of the group to be created. |
| `UlyssesGroup` | Parent Group | The parent group, which the new group will be inserted into. You can specify a group's name (e.g. My Group), path (e.g. /My Group/My Subgroup), or identifier (e.g. H8zLAmc1I0njH-0Ql-3YGQ). |
| `UlyssesReturn` | Return to Shortcuts | If enabled, Ulysses will re-open Shortcuts after creating the new sheet. |

## Create Ulysses Sheet (`com.soulmen.ulysses.pad.new-sheet`)

Creates a new sheet in Ulysses.

| Key | Display Name | Description |
| --- | --- | --- |
| `UlyssesContent` | Content |  |
| `UlyssesGroup` | Group | The group the sheet should be inserted into (defaults to Inbox). You can specify a group's name (e.g. My Group), path (e.g. /My Group/My Subgroup), or identifier (e.g. DCj45UWKr_g15y2vBPwJdQ). |
| `UlyssesTextFormat` | Format | Specifies the format of the text to add: Markdown, Text, or HTML. |
| `UlyssesReturn` | Return to Shortcuts | If enabled, Ulysses will re-open Shortcuts after creating the new sheet. |

## Crop Image (`is.workflow.actions.image.crop`)

Crops images to a smaller rectangle.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFInput` | Image |  |
| `WFImageCropPosition` | Position | Where on the original image the crop should occur. |
| `WFImageCropX` | X Coordinate |  |
| `WFImageCropY` | Y Coordinate |  |
| `WFImageCropWidth` | Width |  |
| `WFImageCropHeight` | Height |  |

## Date (`is.workflow.actions.date`)

Passes the specified date and time to the next action.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFDateActionMode` | Use |  |
| `WFDateActionDate` | Date |  |

## Delete Files (`is.workflow.actions.file.delete`)

Deletes the files passed in as input.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFInput` | Files |  |
| `WFDeleteImmediatelyDelete` | Delete Immediately | When enabled, this action will delete files immediately, instead of moving to the Trash or Recently Deleted folder. |

## Delete Notes (`is.workflow.actions.evernote.delete`)

Deletes the notes passed as input from Evernote.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFInput` | Notes |  |

## Detect Language (`is.workflow.actions.detectlanguage`)

Detects the language of the text provided as input.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFInput` | Text |  |

## Dictate Text (`is.workflow.actions.dictatetext`)

Transcribes what you say aloud into text and passes the result to the next action.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFSpeechLanguage` | Language |  |
| `WFDictateTextStopListening` | Stop Listening |  |

## Dictionary (`is.workflow.actions.dictionary`)

Passes the specified list of key-value pairs to the next action as a dictionary.

> Provide dictionary data via the `WFItems` parameter. When building shortcuts with `js-to-shortcut`, call `serialization.dictionary({ key: value })` and assign the result to `WFItems` (for example: `action('is.workflow.actions.dictionary', { WFItems: serialization.dictionary({ name: 'Value' }) })`).
> Each entry is stored as a `WFDictionaryFieldValueItem` with an inferred `WFItemType` — strings map to type 0, objects to 1, arrays to 2, numbers to 3, and booleans to 4. The serialization helper handles these conversions automatically.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFItems` | Items |  |

## Dismiss Siri and Continue (`is.workflow.actions.dismisssiri`)

Switches into the Shortcuts app and continues to the next action.

_This action does not expose any parameters._

## Edit Calendar Event (`is.workflow.actions.setters.calendarevents`)

Sets a specific field of the calendar event passed into the action.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFContentItemPropertyName` | Detail | The property of the calendar event to edit. |
| `Mode` | Edit | The operation to perform on the selected property of the calendar event. |
| `WFInput` | Calendar Event |  |
| `RemoveSpecifiedValue` | Specified | The value to remove from the selected property of the calendar event. If no value is provided, one will be requested when run. |
| `WFCalendarEventContentItemAttachments` | Value |  |
| `WFCalendarEventContentItemIsAllDay` | Value |  |
| `WFCalendarEventContentItemNotes` | Value |  |
| `WFCalendarEventContentItemTitle` | Value |  |
| `WFCalendarEventContentItemLocation` | Value |  |
| `WFCalendarEventContentItemEndDate` | Value |  |
| `WFCalendarEventContentItemDuration` | Value |  |
| `WFCalendarEventContentItemStartDate` | Value |  |
| `WFCalendarEventContentItemMyStatus` | Value |  |
| `WFCalendarEventContentItemAttendees` | Value |  |
| `WFCalendarEventContentItemURL` | Value |  |
| `ValueLabel` | Role |  |

## Edit Contact (`is.workflow.actions.setters.contacts`)

Sets a specific field of the contact passed into the action.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFContentItemPropertyName` | Detail | The property of the contact to edit. |
| `Mode` | Edit | The operation to perform on the selected property of the contact. |
| `WFInput` | Contact |  |
| `RemoveSpecifiedValue` | Specified | The value to remove from the selected property of the contact. If no value is provided, one will be requested when run. |
| `WFContactContentItemPrefix` | Value |  |
| `WFContactContentItemPhoneticLastName` | Value |  |
| `WFContactContentItemJobTitle` | Value |  |
| `WFContactContentItemURLs` | Value |  |
| `WFContactContentItemCompany` | Value |  |
| `WFContactContentItemDepartment` | Value |  |
| `WFContactContentItemLastName` | Value |  |
| `WFContactContentItemEmailAddresses` | Value |  |
| `WFContactContentItemGroup` | Value |  |
| `WFContactContentItemPhoneticFirstName` | Value |  |
| `WFContactContentItemMiddleName` | Value |  |
| `WFContactContentItemPhoneNumbers` | Value |  |
| `WFContactContentItemSuffix` | Value |  |
| `WFContactContentItemStreetAddresses` | Value |  |
| `WFContactContentItemFirstName` | Value |  |
| `WFContactContentItemBirthday` | Value |  |
| `WFContactContentItemContactPhoto` | Value |  |
| `WFContactContentItemNickname` | Value |  |
| `WFContactContentItemPhoneticMiddleName` | Value |  |
| `WFContactContentItemNotes` | Value |  |
| `ValueLabel` | Label |  |

## Edit Reminder (`is.workflow.actions.setters.reminders`)

Sets a specific field of the reminder passed into the action.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFContentItemPropertyName` | Detail | The property of the reminder to edit. |
| `Mode` | Edit | The operation to perform on the selected property of the reminder. |
| `WFInput` | Reminder |  |
| `RemoveSpecifiedValue` | Specified | The value to remove from the selected property of the reminder. If no value is provided, one will be requested when run. |
| `WFReminderContentItemPriority` | Value |  |
| `WFReminderContentItemWhenMessagingPerson` | Value |  |
| `WFReminderContentItemIsCompleted` | Value |  |
| `WFReminderContentItemImages` | Value |  |
| `WFReminderContentItemParentReminder` | Value |  |
| `WFReminderContentItemDueDate` | Value |  |
| `WFReminderContentItemList` | Value |  |
| `WFReminderContentItemTags` | Value |  |
| `WFReminderContentItemTitle` | Value |  |
| `WFReminderContentItemSubtasks` | Value |  |
| `WFReminderContentItemURL` | Value |  |
| `WFReminderContentItemIsFlagged` | Value |  |
| `WFReminderContentItemNotes` | Value |  |

## Edit Script (`com.omz-software.Pythonista.editscript`)

Opens the specified script in Pythonista for editing.

| Key | Display Name | Description |
| --- | --- | --- |
| `PythonistaScript` | Script Name | The name of the script to edit. Should match the name of a script in your Pythonista library. |

## Eject Disk (`is.workflow.actions.ejectdisk`)

This action ejects a mounted disk or volume.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFInput` | Disk |  |

## Email Address (`is.workflow.actions.email`)

Passes the specified email addresses to the next action.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFEmailAddress` | Email Address |  |

## Encode Media (`is.workflow.actions.encodemedia`)

Re-encodes the media passed as input at the specified size, optionally converting to audio.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFMedia` | Media |  |
| `WFMediaAudioOnly` | Audio Only |  |
| `WFMediaAudioFormat` | Format |  |
| `WFMediaSize` | Size |  |
| `WFMediaSpeed` | Speed |  |
| `WFMediaPreserveTransparency` | Preserve Transparency |  |
| `WFMediaCustomSpeed` | Custom Speed | A number greater than zero that indicates how fast or slow to encode the media. Values between 0.0 and 1.0 slow down the media. |
| `WFMetadataTitle` | Title |  |
| `WFMetadataArtist` | Artist |  |
| `WFMetadataAlbum` | Album |  |
| `WFMetadataGenre` | Genre |  |
| `WFMetadataYear` | Year |  |
| `WFMetadataArtwork` | Artwork |  |

## Expand URL (`is.workflow.actions.url.expand`)

This action expands and cleans up URLs which have been shortened using a URL shortening service like TinyURL or Bit.ly.

| Key | Display Name | Description |
| --- | --- | --- |
| `URL` | URL |  |

## Extract Archive (`is.workflow.actions.unzip`)

Extracts files from the archive passed as input. Many archive formats are supported, including zip, rar, tar.gz, tar.bz2, tar, gzip, cpio, cab, and iso archives.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFArchive` | Archive |  |

## Extract Text from Image (`is.workflow.actions.extracttextfromimage`)

Uses OCR to extract text from an image.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFImage` | Image |  |

## File (`is.workflow.actions.file`)

Passes the specified files or folders as output.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFFile` | File |  |

## Filter Articles (`is.workflow.actions.filter.articles`)

Given a list of articles, this action returns the articles that match the given criteria.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFContentItemFilter` | WFContentItemFilter |  |
| `WFContentItemSortProperty` | Sort by | Optionally, what to sort the articles by. |
| `WFContentItemSortOrder` | Order | The order to sort the articles in. |
| `WFContentItemLimitEnabled` | Limit | Whether or not to limit the number of articles that are passed as output. |
| `WFContentItemLimitNumber` | Get | The maximum number of articles. |
| `WFCompoundType` | WFCompoundType |  |
| `WFContentItemInputParameter` | articles |  |

## Filter Event Attendees (`is.workflow.actions.filter.eventattendees`)

Given a list of event attendees, this action returns the event attendees that match the given criteria.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFContentItemFilter` | WFContentItemFilter |  |
| `WFContentItemSortProperty` | Sort by | Optionally, what to sort the event attendees by. |
| `WFContentItemSortOrder` | Order | The order to sort the event attendees in. |
| `WFContentItemLimitEnabled` | Limit | Whether or not to limit the number of event attendees that are passed as output. |
| `WFContentItemLimitNumber` | Get | The maximum number of event attendees. |
| `WFCompoundType` | WFCompoundType |  |
| `WFContentItemInputParameter` | event attendees |  |

## Filter Files (`is.workflow.actions.filter.files`)

Given a list of files, this action returns the files that match the given criteria.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFContentItemFilter` | WFContentItemFilter |  |
| `WFContentItemSortProperty` | Sort by | Optionally, what to sort the files by. |
| `WFContentItemSortOrder` | Order | The order to sort the files in. |
| `WFContentItemLimitEnabled` | Limit | Whether or not to limit the number of files that are passed as output. |
| `WFContentItemLimitNumber` | Get | The maximum number of files. |
| `WFCompoundType` | WFCompoundType |  |
| `WFContentItemInputParameter` | files |  |

## Filter Images (`is.workflow.actions.filter.images`)

Given a list of images, this action returns the images that match the given criteria.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFContentItemFilter` | WFContentItemFilter |  |
| `WFContentItemSortProperty` | Sort by | Optionally, what to sort the images by. |
| `WFContentItemSortOrder` | Order | The order to sort the images in. |
| `WFContentItemLimitEnabled` | Limit | Whether or not to limit the number of images that are passed as output. |
| `WFContentItemLimitNumber` | Get | The maximum number of images. |
| `WFCompoundType` | WFCompoundType |  |
| `WFContentItemInputParameter` | images |  |

## Filter Locations (`is.workflow.actions.filter.locations`)

Given a list of locations, this action returns the locations that match the given criteria.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFContentItemFilter` | WFContentItemFilter |  |
| `WFContentItemSortProperty` | Sort by | Optionally, what to sort the locations by. |
| `WFContentItemSortOrder` | Order | The order to sort the locations in. |
| `WFContentItemLimitEnabled` | Limit | Whether or not to limit the number of locations that are passed as output. |
| `WFContentItemLimitNumber` | Get | The maximum number of locations. |
| `WFCompoundType` | WFCompoundType |  |
| `WFContentItemInputParameter` | locations |  |

## Find App Store Apps (`is.workflow.actions.searchappstore`)

Searches the App Store, returning the apps that match the specified search terms. You can get more details about the results using the Get Details of App Store App action.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFSearchTerm` | Search |  |
| `WFAttribute` | Search By |  |
| `WFEntity` | Results |  |
| `WFCountry` | Region |  |
| `WFItemLimit` | WFItemLimit |  |

## Find Apps (`is.workflow.actions.filter.apps`)

Searches for the apps in your library that match the given criteria.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFContentItemFilter` | WFContentItemFilter |  |
| `WFContentItemSortProperty` | Sort by | Optionally, what to sort the apps by. |
| `WFContentItemSortOrder` | Order | The order to sort the apps in. |
| `WFContentItemLimitEnabled` | Limit | Whether or not to limit the number of apps retrieved. |
| `WFContentItemLimitNumber` | Get | The maximum number of apps. |
| `WFCompoundType` | WFCompoundType |  |
| `WFContentItemInputParameter` | apps |  |

## Find Calendar Events (`is.workflow.actions.filter.calendarevents`)

Searches for the calendar events in your library that match the given criteria.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFContentItemFilter` | WFContentItemFilter |  |
| `WFContentItemSortProperty` | Sort by | Optionally, what to sort the calendar events by. |
| `WFContentItemSortOrder` | Order | The order to sort the calendar events in. |
| `WFContentItemLimitEnabled` | Limit | Whether or not to limit the number of calendar events retrieved. |
| `WFContentItemLimitNumber` | Get | The maximum number of calendar events. |
| `WFCompoundType` | WFCompoundType |  |
| `WFContentItemInputParameter` | calendar events |  |

## Find Contacts (`is.workflow.actions.filter.contacts`)

Searches for the contacts in your library that match the given criteria.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFContentItemFilter` | WFContentItemFilter |  |
| `WFContentItemSortProperty` | Sort by | Optionally, what to sort the contacts by. |
| `WFContentItemSortOrder` | Order | The order to sort the contacts in. |
| `WFContentItemLimitEnabled` | Limit | Whether or not to limit the number of contacts retrieved. |
| `WFContentItemLimitNumber` | Get | The maximum number of contacts. |
| `WFCompoundType` | WFCompoundType |  |
| `WFContentItemInputParameter` | contacts |  |

## Find Displays (`is.workflow.actions.filter.displays`)

Searches for the displays in your library that match the given criteria.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFContentItemFilter` | WFContentItemFilter |  |
| `WFContentItemSortProperty` | Sort by | Optionally, what to sort the displays by. |
| `WFContentItemSortOrder` | Order | The order to sort the displays in. |
| `WFContentItemLimitEnabled` | Limit | Whether or not to limit the number of displays retrieved. |
| `WFContentItemLimitNumber` | Get | The maximum number of displays. |
| `WFCompoundType` | WFCompoundType |  |
| `WFContentItemInputParameter` | displays |  |

## Find Giphy GIFs (`is.workflow.actions.giphy`)

Finds GIFs representing the provided text, using Giphy.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFGiphyQuery` | Search |  |
| `WFGiphyShowPicker` | Show GIF Picker |  |
| `WFGiphyLimit` | WFGiphyLimit |  |
| `WFGiphySelectMultiple` | Select Multiple |  |

## Find iTunes Store Items (`is.workflow.actions.searchitunes`)

Searches the iTunes Store, returning the items that match the specified search terms. You can get more details about the results using the Get Details of iTunes Product action.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFSearchTerm` | Search |  |
| `WFMediaType` | Category |  |
| `WFAttribute` | Search By |  |
| `WFEntity` | Results |  |
| `WFCountry` | Region |  |
| `WFItemLimit` | WFItemLimit |  |

## Find Music (`is.workflow.actions.filter.music`)

Searches for the music in your library that match the given criteria.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFContentItemFilter` | WFContentItemFilter |  |
| `WFContentItemSortProperty` | Sort by | Optionally, what to sort the music by. |
| `WFContentItemSortOrder` | Order | The order to sort the music in. |
| `WFContentItemLimitEnabled` | Limit | Whether or not to limit the number of music retrieved. |
| `WFContentItemLimitNumber` | Get | The maximum number of music. |
| `WFCompoundType` | WFCompoundType |  |
| `WFContentItemInputParameter` | music |  |

## Find Photos (`is.workflow.actions.filter.photos`)

Searches for the photos in your library that match the given criteria.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFContentItemFilter` | WFContentItemFilter |  |
| `WFContentItemSortProperty` | Sort by | Optionally, what to sort the photos by. |
| `WFContentItemSortOrder` | Order | The order to sort the photos in. |
| `WFContentItemLimitEnabled` | Limit | Whether or not to limit the number of photos retrieved. |
| `WFContentItemLimitNumber` | Get | The maximum number of photos. |
| `WFCompoundType` | WFCompoundType |  |
| `WFContentItemInputParameter` | photos |  |

## Find Places (`is.workflow.actions.searchlocalbusinesses`)

Finds nearby places using Maps, and returns the results.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFInput` | Location |  |
| `WFSearchQuery` | Search | Keywords used to search for places. |
| `WFSearchRadius` | Radius |  |

## Find Podcasts (`is.workflow.actions.searchpodcasts`)

Finds podcasts in the Apple Podcasts catalog, returning the items that match the specified search terms.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFSearchTerm` | Search |  |
| `WFAttribute` | Search By |  |
| `WFEntity` | Results |  |
| `WFCountry` | Country |  |
| `WFItemLimit` | WFItemLimit |  |

## Find Reminders (`is.workflow.actions.filter.reminders`)

Searches for the reminders in your library that match the given criteria.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFContentItemFilter` | WFContentItemFilter |  |
| `WFContentItemSortProperty` | Sort by | Optionally, what to sort the reminders by. |
| `WFContentItemSortOrder` | Order | The order to sort the reminders in. |
| `WFContentItemLimitEnabled` | Limit | Whether or not to limit the number of reminders retrieved. |
| `WFContentItemLimitNumber` | Get | The maximum number of reminders. |
| `WFCompoundType` | WFCompoundType |  |
| `WFContentItemInputParameter` | reminders |  |

## Find Windows (`is.workflow.actions.filter.windows`)

Searches for the windows in your library that match the given criteria.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFContentItemFilter` | WFContentItemFilter |  |
| `WFContentItemSortProperty` | Sort by | Optionally, what to sort the windows by. |
| `WFContentItemSortOrder` | Order | The order to sort the windows in. |
| `WFContentItemLimitEnabled` | Limit | Whether or not to limit the number of windows retrieved. |
| `WFContentItemLimitNumber` | Get | The maximum number of windows. |
| `WFCompoundType` | WFCompoundType |  |
| `WFContentItemInputParameter` | windows |  |

## Flip Image (`is.workflow.actions.image.flip`)

Reverses the direction of images either horizontally or vertically.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFImageFlipDirection` | Direction |  |
| `WFInput` | Image |  |

## Follow Podcast (`is.workflow.actions.podcasts.subscribe`)

Follows podcasts or podcast feed URLs passed into the action.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFInput` | Podcast URL |  |

## Format Date (`is.workflow.actions.format.date`)

Formats a date and time into text.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFDateFormatStyle` | Date Format |  |
| `WFRelativeDateFormatStyle` | Alternate Format |  |
| `WFTimeFormatStyle` | Time Format |  |
| `WFISO8601IncludeTime` | Include ISO 8601 Time |  |
| `WFDateFormat` | Format String |  |
| `WFDate` | Date |  |
| `WFLocale` | Locale |  |

## Format File Size (`is.workflow.actions.format.filesize`)

Formats a file size into text.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFFileSizeFormat` | Format |  |
| `WFFileSizeIncludeUnits` | Include Units |  |
| `WFFileSize` | File Size |  |

## Format Number (`is.workflow.actions.format.number`)

Formats a number into text.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFNumber` | Number |  |
| `WFNumberFormatDecimalPlaces` | WFNumberFormatDecimalPlaces |  |

## Generate Hash (`is.workflow.actions.hash`)

Generates a MD5/SHA1 hash from the input.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFHashType` | Type |  |
| `WFInput` | Input |  |

## Generate QR Code (`is.workflow.actions.generatebarcode`)

Generates a QR code from the input text.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFQRErrorCorrectionLevel` | Error Correction |  |
| `WFText` | Text |  |

## Get Addresses from Input (`is.workflow.actions.detect.address`)

Returns any street addresses found in the output from the previous action.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFInput` | Input |  |

## Get All Wallpapers (`is.workflow.actions.posters.get`)

Gets all of your Lock Screen wallpapers, and returns them as output so you can use them with other actions.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFPosterType` | Type |  |

## Get Article using Safari Reader (`is.workflow.actions.getarticle`)

Gets article details, including body text, author, publish date, and more, from every URL passed into the action.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFWebPage` | URL |  |

## Get Battery Status (`is.workflow.actions.getbatterylevel`)

Returns information about the battery and any charger connected to the device.

| Key | Display Name | Description |
| --- | --- | --- |
| `Subject` | Get |  |

## Get Clipboard (`is.workflow.actions.getclipboard`)

Passes the contents of the clipboard to the next action.

_This action does not expose any parameters._

## Get Component of URL (`is.workflow.actions.geturlcomponent`)

Gets the specified part of the URL passed into the action.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFURL` | URL |  |
| `WFURLComponent` | Component |  |

## Get Contacts from Input (`is.workflow.actions.detect.contacts`)

Gets contacts from the result of the previous action.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFInput` | Input |  |

## Get Contents of Bear Note (`net.shinyfrog.bear-IOS.contents`)

Gets the contents of a note from Bear. You can specify either the note title or the note identifier.

| Key | Display Name | Description |
| --- | --- | --- |
| `BearTitle` | Note Title | The title of the note to add to in Bear. |
| `BearIdentifier` | Note Identifier | The identifier of the note to add to in Bear. You can find a note’s identifier by swiping left on the note in the list, choosing “More”, and choosing “Copy note identifier.” |

## Get Contents of Draft (`com.agiletortoise.Drafts4.get`)

This action will get the contents of the specified draft in Drafts.

| Key | Display Name | Description |
| --- | --- | --- |
| `DraftsUUID` | Draft UUID | The UUID of the draft (can be found inside of the Drafts app) |

## Get Contents of Folder (`is.workflow.actions.file.getfoldercontents`)

This action gets the files inside of the specified folder.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFFolder` | Folder |  |
| `Recursive` | Recursive | If this option is enabled, this action will get all the files inside of a folder, including its subfolders. |

## Get Contents of URL (`is.workflow.actions.downloadurl`)

Gets the contents of URLs passed into the action. Useful for downloading files and web content, or for making API requests.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFURL` | URL |  |
| `WFHTTPMethod` | Method | The HTTP method to use. |
| `WFHTTPHeaders` | Headers |  |
| `WFHTTPBodyType` | Request Body |  |
| `WFFormValues` | Form Values |  |
| `WFJSONValues` | JSON Values |  |
| `WFRequestVariable` | File |  |

## Get Contents of Web Page (`is.workflow.actions.getwebpagecontents`)

Extracts the contents of the web pages passed into the action.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFInput` | URL |  |

## Get Current App (`is.workflow.actions.getcurrentapp`)

Gets the current visible app.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFVisibleAppScope` | Scope |  |

## Get Current Focus (`is.workflow.actions.dnd.getfocus`)

Returns the currently active Focus.

_This action does not expose any parameters._

## Get Current IP Address (`is.workflow.actions.getipaddress`)

Returns the local or external IP address of the device.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFIPAddressSourceOption` | Address |  |
| `WFIPAddressTypeOption` | Type |  |

## Get Current Location (`is.workflow.actions.getcurrentlocation`)

Gets the current location of the device.

| Key | Display Name | Description |
| --- | --- | --- |
| `Accuracy` | Precision |  |

## Get Current Song (`is.workflow.actions.getcurrentsong`)

Returns the song that is currently playing in the Music app, if any.

| Key | Display Name | Description |
| --- | --- | --- |
| `Subject` | Get |  |

## Get Current Weather (`is.workflow.actions.weather.currentconditions`)

Gets the current weather conditions at the specified location.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFWeatherCustomLocation` | Location |  |

## Get Current Web Page from Safari (`is.workflow.actions.safari.geturl`)

Gets the web page of the frontmost Safari window.

_This action does not expose any parameters._

## Get Dates from Input (`is.workflow.actions.detect.date`)

Returns any dates found in the output from the previous action.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFInput` | Input |  |

## Get Details of App Store App (`is.workflow.actions.properties.appstore`)

Gets a specific piece of information from the App Store apps passed into the action.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFContentItemPropertyName` | Detail |  |
| `WFInput` | App Store app |  |

## Get Details of Appearance (`is.workflow.actions.properties.appearance`)

Gets a specific piece of information from the appearances passed into the action.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFContentItemPropertyName` | Detail |  |
| `WFInput` | Appearance |  |

## Get Details of Article (`is.workflow.actions.properties.articles`)

Gets a specific piece of information from the articles passed into the action.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFContentItemPropertyName` | Detail |  |
| `WFInput` | Article |  |

## Get Details of Calendar Events (`is.workflow.actions.properties.calendarevents`)

Gets a specific piece of information from the calendar events passed into the action.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFContentItemPropertyName` | Detail |  |
| `WFInput` | Calendar Event |  |

## Get Details of Contacts (`is.workflow.actions.properties.contacts`)

Gets a specific piece of information from the contacts passed into the action.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFContentItemPropertyName` | Detail |  |
| `WFInput` | Contact |  |

## Get Details of Event Attendees (`is.workflow.actions.properties.eventattendees`)

Gets a specific piece of information from the event attendees passed into the action.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFContentItemPropertyName` | Detail |  |
| `WFInput` | Event Attendee |  |

## Get Details of Files (`is.workflow.actions.properties.files`)

Gets a specific piece of information from the files passed into the action.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFContentItemPropertyName` | Detail |  |
| `WFInput` | File |  |

## Get Details of Images (`is.workflow.actions.properties.images`)

Gets a specific piece of information from the images passed into the action.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFContentItemPropertyName` | Detail |  |
| `WFInput` | Image |  |

## Get Details of iTunes Artist (`is.workflow.actions.properties.itunesartist`)

Gets a specific piece of information from the iTunes artists passed into the action.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFContentItemPropertyName` | Detail |  |
| `WFInput` | iTunes artist |  |

## Get Details of iTunes Product (`is.workflow.actions.properties.itunesstore`)

Gets a specific piece of information from the iTunes products passed into the action.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFContentItemPropertyName` | Detail |  |
| `WFInput` | iTunes product |  |

## Get Details of Locations (`is.workflow.actions.properties.locations`)

Gets a specific piece of information from the locations passed into the action.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFContentItemPropertyName` | Detail |  |
| `WFInput` | Location |  |

## Get Details of Music (`is.workflow.actions.properties.music`)

Gets a specific piece of information from the music passed into the action.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFContentItemPropertyName` | Detail |  |
| `WFInput` | Music |  |

## Get Details of Parked Car (`is.workflow.actions.properties.parkedcar`)

Gets a specific piece of information from the parked cars passed into the action.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFContentItemPropertyName` | Detail |  |
| `WFInput` | Parked Car |  |

## Get Details of Podcast (`is.workflow.actions.properties.podcastshow`)

Gets a specific piece of information from the podcasts passed into the action.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFContentItemPropertyName` | Detail |  |
| `WFInput` | Podcast |  |

## Get Details of Podcast Episode (`is.workflow.actions.properties.podcast`)

Gets a specific piece of information from the podcast episodes passed into the action.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFContentItemPropertyName` | Detail |  |
| `WFInput` | Podcast episode |  |

## Get Details of Reminders (`is.workflow.actions.properties.reminders`)

Gets a specific piece of information from the reminders passed into the action.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFContentItemPropertyName` | Detail |  |
| `WFInput` | Reminder |  |

## Get Details of Ride Status (`is.workflow.actions.properties.ridestatus`)

Gets a specific piece of information from the ride statuses passed into the action.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFContentItemPropertyName` | Detail |  |
| `WFInput` | Ride Status |  |

## Get Details of Safari Web Page (`is.workflow.actions.properties.safariwebpage`)

Gets a specific piece of information from the Safari web pages passed into the action.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFContentItemPropertyName` | Detail |  |
| `WFInput` | Safari web page |  |

## Get Details of Shazam (`is.workflow.actions.properties.shazam`)

Gets a specific piece of information from the Shazam media passed into the action.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFContentItemPropertyName` | Detail |  |
| `WFInput` | Shazam media |  |

## Get Details of Shortcut (`is.workflow.actions.properties.workflow`)

Gets a specific piece of information from the shortcuts passed into the action.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFContentItemPropertyName` | Detail |  |
| `WFInput` | Shortcut |  |

## Get Details of Trello Item (`is.workflow.actions.properties.trello`)

Gets a specific piece of information from the Trello items passed into the action.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFContentItemPropertyName` | Detail |  |
| `WFInput` | Trello item |  |

## Get Details of Ulysses Sheets (`is.workflow.actions.properties.ulysses.sheet`)

Gets a specific piece of information from the Ulysses sheets passed into the action.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFContentItemPropertyName` | Detail |  |
| `WFInput` | Ulysses sheet |  |

## Get Details of Weather Conditions (`is.workflow.actions.properties.weather.conditions`)

Gets a specific piece of information from the weather conditions passed into the action.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFContentItemPropertyName` | Detail |  |
| `WFInput` | Weather Conditions |  |

## Get Device Details (`is.workflow.actions.getdevicedetails`)

Gets information about the current device.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFDeviceDetail` | Get |  |

## Get Dictionary from Input (`is.workflow.actions.detect.dictionary`)

Makes a dictionary from the text passed as input. JSON (like {"foo": "bar"}), key-value pairs (like foo=bar&baz=biz), and XML-based plist are supported.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFInput` | Input |  |

## Get Dictionary Value (`is.workflow.actions.getvalueforkey`)

Gets the value for the specified key in the dictionary passed into the action.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFGetDictionaryValueType` | Get |  |
| `WFDictionaryKey` | Key |  |
| `WFInput` | Dictionary |  |

## Get Distance (`is.workflow.actions.getdistance`)

Calculates the distance to the location passed into this action.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFGetDirectionsCustomLocation` | Start Location |  |
| `WFGetDistanceDestination` | End Location |  |
| `WFGetDirectionsActionMode` | Route Type |  |
| `WFDistanceUnit` | Unit |  |
| `Accuracy` | Precision |  |

## Get Dropbox File (`is.workflow.actions.dropbox.open`)

Gets files from Dropbox. Turn off “Show Document Picker” to specify a path to retrieve.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFShowFilePicker` | Show Document Picker |  |
| `SelectMultiple` | Select Multiple |  |
| `WFGetFilePath` | File Path | The path to retrieve, such as “/folder/file.txt” |
| `WFGetFileInitialDirectoryPath` | Initial Path |  |
| `WFFileErrorIfNotFound` | Error If Not Found |  |

## Get Email Addresses from Input (`is.workflow.actions.detect.emailaddress`)

Returns any email addresses found in the output from the previous action.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFInput` | Input |  |

## Get Episodes of Podcast (`is.workflow.actions.getepisodesforpodcast`)

Returns a list of episodes from a podcast show.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFInput` | Podcast |  |

## Get File from Folder (`is.workflow.actions.documentpicker.open`)

Gets a file or folder by a relative path, starting at a folder you choose.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFFileErrorIfNotFound` | Error If Not Found |  |
| `WFGetFolderContents` | If Folder, Fetch Contents |  |
| `WFFile` | Folder |  |
| `WFGetFilePath` | Path | The relative path to retrieve, such as “folder/file.txt” |

## Get File of Type (`is.workflow.actions.gettypeaction`)

Returns a particular file type from the input.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFFileType` | Type |  |
| `WFInput` | Input |  |

## Get Frames from Image (`is.workflow.actions.getframesfromimage`)

Splits an animated GIF or a photo burst into individual frames.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFImage` | Image |  |

## Get Halfway Point (`is.workflow.actions.gethalfwaypoint`)

Gets the halfway point between two locations.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFGetHalfwayPointFirstLocation` | First Location |  |
| `WFGetHalfwayPointSecondLocation` | Second Location |  |

## Get Headers of URL (`is.workflow.actions.url.getheaders`)

Retrieves the HTTP headers of the URL passed as input using a HEAD request.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFInput` | URL |  |

## Get Hotspot Password (`is.workflow.actions.personalhotspot.password.get`)

Returns the password of your Personal Hotspot.

_This action does not expose any parameters._

## Get Images from Input (`is.workflow.actions.detect.images`)

Gets images from the result of the previous action.

For example, this action can get the album art of a song, or all the images on a web page.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFInput` | Input |  |

## Get Instapaper Bookmarks (`is.workflow.actions.instapaper.get`)

Gets the contents of a folder in Instapaper. Requires Instapaper Premium.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFInstapaperFolder` | Folder | The folder to get bookmarks from. Leaving this empty will get items from Instapaper's Home folder. |
| `WFBookmarkCount` | WFBookmarkCount |  |

## Get Item from List (`is.workflow.actions.getitemfromlist`)

Returns one or more items from the list passed as input. You can get the first item, the last item, a random item, the item at a particular index, or items in a range of indexes.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFItemSpecifier` | Get |  |
| `WFItemIndex` | Index |  |
| `WFItemRangeStart` | Start Index |  |
| `WFItemRangeEnd` | End Index |  |
| `WFInput` | List |  |

## Get Items from Pocket (`is.workflow.actions.pocket.get`)

Returns items in your Pocket account.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFPocketItemCount` | WFPocketItemCount |  |
| `WFPocketItemState` | Type |  |
| `WFPocketItemSearchTerm` | Search | If specified, only items with titles or URLs matching this search will be returned. |
| `WFPocketItemSearchTags` | Tag | If specified, only items matching this tag will be returned. |

## Get Items from RSS Feed (`is.workflow.actions.rss`)

Downloads the latest items from an RSS feed.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFRSSFeedURL` | URL |  |
| `WFRSSItemQuantity` | WFRSSItemQuantity |  |

## Get Last Import (`is.workflow.actions.getlatestphotoimport`)

Gets the most recent photo import from the Photos app.

_This action does not expose any parameters._

## Get Latest Bursts (`is.workflow.actions.getlatestbursts`)

Gets the most recent burst photos from the photo library.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFGetLatestPhotoCount` | WFGetLatestPhotoCount |  |

## Get Latest Live Photos (`is.workflow.actions.getlatestlivephotos`)

Gets the most recent Live Photos from the photo library.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFGetLatestPhotoCount` | WFGetLatestPhotoCount |  |

## Get Latest Photos (`is.workflow.actions.getlastphoto`)

Gets the most recent photos from the photo library.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFGetLatestPhotoCount` | WFGetLatestPhotoCount |  |
| `WFGetLatestPhotosActionIncludeScreenshots` | Include Screenshots |  |

## Get Latest Screenshots (`is.workflow.actions.getlastscreenshot`)

Gets the most recent screenshots from the photo library.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFGetLatestPhotoCount` | WFGetLatestPhotoCount |  |

## Get Latest Videos (`is.workflow.actions.getlastvideo`)

Gets the most recent videos from the photo library.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFGetLatestPhotoCount` | WFGetLatestPhotoCount |  |

## Get Link to File (`is.workflow.actions.file.getlink`)

Gets a public link to the file passed into the action.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFFile` | File |  |

## Get Maps URL (`is.workflow.actions.getmapslink`)

Creates a URL to search for the location, place, or text that was passed into the action in a separate maps app.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFInput` | Location |  |

## Get My Shortcuts (`is.workflow.actions.getmyworkflows`)

Gets the shortcuts stored on this device.

| Key | Display Name | Description |
| --- | --- | --- |
| `Folder` | Folder |  |

## Get Name (`is.workflow.actions.getitemname`)

Returns the name of every item passed as input. Depending on the input, this could be a file name, the title of a website, the title of a calendar event, etc.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFInput` | Item |  |
| `GetWebPageTitle` | Get Web Page Title | If this option is enabled, and a URL is passed in, this action will fetch the title of the corresponding web page. |

## Get Name of Emoji (`is.workflow.actions.getnameofemoji`)

Gets the names of emoji passed into the action.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFInput` | Text |  |

## Get Network Details (`is.workflow.actions.getwifi`)

Gets information about the currently connected networks.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFNetworkDetailsNetwork` | Network |  |
| `WFWiFiDetail` | Get |  |
| `WFCellularDetail` | Get |  |

## Get Note Link (`is.workflow.actions.evernote.getlink`)

Gets a link to the Evernote note passed into the action, which can be shared.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFEvernoteShareInAppLink` | In-App Link | When enabled, an evernote:// URL will be generated, suitable for opening the note in the Evernote app. |
| `WFInput` | Note |  |

## Get Notes (`is.workflow.actions.evernote.get`)

Gets recent notes from Evernote, optionally filtering based on criteria.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFEvernoteNotesTitleSearch` | Title Search | Text to look for in the title of notes. |
| `WFEvernoteNotesCount` | WFEvernoteNotesCount |  |

## Get Numbers from Input (`is.workflow.actions.detect.number`)

Returns numbers from the previous action's output.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFInput` | Input |  |

## Get Object of Class (`is.workflow.actions.getclassaction`)

Returns a particular object class from the input.

| Key | Display Name | Description |
| --- | --- | --- |
| `Class` | Class |  |
| `Input` | Input |  |

## Get Parent Directory (`is.workflow.actions.getparentdirectory`)

Gets the common parent directory of the files passed in.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFInput` | Files |  |

## Get Parked Car Location (`is.workflow.actions.getparkedcarlocation`)

Fetches the details of your Parked Car, as stored in the Maps app.

_This action does not expose any parameters._

## Get Phone Numbers from Input (`is.workflow.actions.detect.phonenumber`)

Returns any phone numbers found in the output from the previous action.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFInput` | Input |  |

## Get Pinboard Bookmarks (`is.workflow.actions.pinboard.get`)

Gets bookmarks in your Pinboard account.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFPinTags` | Tags | If specified, only items matching all of these tags will be returned. Supports a maximum of three tags. |
| `WFBookmarkCount` | WFBookmarkCount |  |

## Get Playlist (`is.workflow.actions.get.playlist`)

Gets every song in the specified playlist.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFPlaylistName` | Playlist |  |

## Get Podcasts from Library (`is.workflow.actions.getpodcastsfromlibrary`)

Gets a list of all shows in your Podcast library.

_This action does not expose any parameters._

## Get RSS Feeds from Page (`is.workflow.actions.rss.extract`)

Extracts any RSS feed URLs from the given web URLs or web page.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFURLs` | Page |  |

## Get Selected Files in Finder (`is.workflow.actions.finder.getselectedfiles`)

Gets the files that are currently selected in Finder.

_This action does not expose any parameters._

## Get state (`is.workflow.actions.gethomeaccessorystate`)

Gets the state of a Home accessory.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFHome` | Home |  |
| `WFHMCharacteristic` | Characteristic |  |

## Get Tally (`com.agiletortoise.Tally2.get`)

Gets the value of the specified tally in Tally.

| Key | Display Name | Description |
| --- | --- | --- |
| `TallyTitle` | Tally Title | The name of the tally. |

## Get Text from Input (`is.workflow.actions.detect.text`)

Returns text from the previous action's output.

For example, this action can get the name of a photo or song, or the text of a web page.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFInput` | Input |  |

## Get Text from PDF (`is.workflow.actions.gettextfrompdf`)

Gets text from the provided PDF file.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFInput` | PDF |  |
| `WFGetTextFromPDFTextType` | Type |  |
| `WFGetTextFromPDFPageHeader` | Page Header Text |  |
| `WFGetTextFromPDFPageFooter` | Page Footer Text |  |
| `WFCombinePages` | Combine Pages |  |

## Get Time Between Dates (`is.workflow.actions.gettimebetweendates`)

Subtracts the specified date from the date passed into the action. For example, this action could get the number of minutes from now until a calendar event passed in as input.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFTimeUntilFromDate` | First Date |  |
| `WFInput` | Second Date |  |
| `WFTimeUntilUnit` | In |  |

## Get Travel Time (`is.workflow.actions.gettraveltime`)

Estimates the amount of time it will take to travel to the location passed into this action.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFGetDirectionsCustomLocation` | Start Location |  |
| `WFDestination` | End Location |  |
| `WFGetDirectionsActionMode` | Mode |  |

## Get Trello Items (`is.workflow.actions.trello.get`)

Gets cards, lists, or boards in your Trello account.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFTrelloItemType` | Get |  |
| `WFTrelloBoard` | Board |  |
| `WFTrelloList` | List |  |

## Get Type (`is.workflow.actions.getitemtype`)

Returns the type of every item passed as input. For example, if a URL is passed, this action will return “URL”.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFInput` | Item |  |

## Get Ulysses Sheet (`com.soulmen.ulysses.pad.read-sheet`)

Gets a sheet from Ulysses.

| Key | Display Name | Description |
| --- | --- | --- |
| `UlyssesSheetIdentifier` | Identifier | The identifier of the sheet to get. You can find the identifier of a sheet in Ulysses by swiping left on the sheet in the list, choosing “More”, tapping “Share...”, and choosing “Copy Callback Identifier”. |

## Get Upcoming Events (`is.workflow.actions.getupcomingevents`)

Gets upcoming calendar events, ordered from nearest to farthest away in time.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFGetUpcomingItemCalendar` | Calendar |  |
| `WFGetUpcomingItemCount` | WFGetUpcomingItemCount |  |
| `WFDateSpecifier` | Day |  |
| `WFSpecifiedDate` | Specified Day |  |

## Get Upcoming Reminders (`is.workflow.actions.getupcomingreminders`)

Gets upcoming reminders, ordered from nearest to farthest away due date.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFGetUpcomingItemCalendar` | List |  |
| `WFGetUpcomingItemCount` | WFGetUpcomingItemCount |  |

## Get URLs from Input (`is.workflow.actions.detect.link`)

Returns any links found in the output from the previous action.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFInput` | Input |  |

## Get Variable (`is.workflow.actions.getvariable`)

Gets the value of the specified variable and passes it to the next action.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFVariable` | Variable |  |

## Get Weather Forecast (`is.workflow.actions.weather.forecast`)

Gets an hourly or daily weather forecast at the specified location.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFWeatherCustomLocation` | Location |  |
| `WFWeatherForecastType` | Type |  |

## Get What’s On Screen (`is.workflow.actions.getonscreencontent`)

Gets the current content on screen, if available.

_This action does not expose any parameters._

## Go to Home Screen (`is.workflow.actions.returntohomescreen`)

Navigates to the Home Screen.

_This action does not expose any parameters._

## Hand Off Playback (`is.workflow.actions.handoffplayback`)

Hands off Music or Podcasts playback between two devices.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFSourceMediaRoute` | Source | The device to hand off playback from. |
| `WFDestinationMediaRoute` | Destination | The device to hand off playback to. |

## Hide App (`is.workflow.actions.hide.app`)

Hides one or all open applications. You can choose a list of apps to keep open.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFHideAppMode` | Mode |  |
| `WFApp` | App |  |

## If (`is.workflow.actions.conditional`)

Branch your shortcut based on whether the supplied input matches a condition. Use WFControlFlowMode = 0 for If, 1 for Otherwise, and 2 for End If blocks.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFConditionalActionString` | Label | Optional name for this If block as it appears inside the action editor. |
| `WFCondition` | Comparison | Integer enum describing how to compare WFInput to WFConditionalActionString (equals, contains, greater than, etc.). |
| `WFInput` | Input | Serialized token describing the value that will be compared. |
| `WFControlFlowMode` | Branch Type | 0 = If, 1 = Otherwise, 2 = End If. js-to-shortcut automatically maintains these values when building grouped actions. |

## Import Audio Files into Music (`is.workflow.actions.importaudiofiles`)

Imports audio files into Music and compresses them with the chosen encoder.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFInput` | Audio Files |  |
| `WFImportAudioFilesReencode` | Re-encode |  |
| `WFImportAudioFilesEncoder` | Encoder |  |

## Input (`is.workflow.actions.input`)

Stops execution of the current shortcut and dismisses the shortcut on screen. No more actions will be run after this action.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFNoInputBehavior` | If there’s no input |  |
| `WFStopAndRespondResponse` | Response |  |
| `WFAskForType` | Type |  |
| `WFPickingMode` | Type |  |
| `SelectMultiple` | Select Multiple |  |
| `WFDateActionMode` | Use |  |
| `WFDateActionDate` | Date |  |
| `WFPhotoPickerTypes` | Include |  |
| `WFSelectMultiplePhotos` | Select Multiple |  |
| `WFSelectMultiple` | Select Multiple |  |
| `WFExportSongActionSelectMultiple` | Select Multiple Songs |  |

## Intercom (`is.workflow.actions.intercom`)

Announces a message passed as input using Intercom.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFHome` | Home |  |
| `WFInput` | Message | The message to announce using Intercom. Any input exceeding 60 seconds in duration will be trimmed. |

## Label Files (`is.workflow.actions.file.label`)

Applies a label to the specified files.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFInput` | Files |  |
| `WFLabelColorNumber` | Label Color |  |

## List (`is.workflow.actions.list`)

Allows you to specify a list of items to be passed to the next action.

_This action does not expose any parameters._

## Location (`is.workflow.actions.location`)

Passes the specified location to the next action.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFLocation` | Location |  |

## Lock App (`is.workflow.actions.lock.app`)

Changes whether the selected application is locked. Locked apps require authentication to access.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFLockAppOperation` | Operation |  |
| `WFApp` | App |  |

## Lock Screen (`is.workflow.actions.lockscreen`)

Locks the screen of this device.

_This action does not expose any parameters._

## Log Health Sample (`is.workflow.actions.health.quantity.log`)

Adds a data point into the Health app. You can log anything that the Health app supports, including your weight, steps taken, running distance, caloric intake and more.

_This action does not expose any parameters._

## Log Out User (`is.workflow.actions.logout`)

Logs out the current user.

_This action does not expose any parameters._

## Log Workout (`is.workflow.actions.health.workout.log`)

Adds a workout into the Health app. You can log all kinds of activities, from running and cycling to playing a sport.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFWorkoutDate` | Date | The date and time of the start of the workout |
| `WFWorkoutDuration` | Duration | The duration of the workout (optional) |

## Make Archive (`is.workflow.actions.makezip`)

Makes an archive out of the files passed as input. Supports creating zip, tar.gz, tar.bz2, tar.xz, tar, gzip, cpio, or iso archives.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFZIPName` | Archive Name |  |
| `WFArchiveFormat` | Format |  |
| `WFInput` | Input |  |

## Make Disk Image (`is.workflow.actions.makediskimage`)

Creates a new disk image (.dmg) file. The disk image will contain any files passed as input.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFInput` | Files |  |
| `VolumeName` | Volume Name |  |
| `EncryptImage` | Encrypt |  |
| `SizeToFit` | Size to Fit Contents |  |
| `ImageSize` | Image Size |  |

## Make GIF (`is.workflow.actions.makegif`)

Creates an animated GIF from the images or video passed into the action.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFMakeGIFActionDelayTime` | Seconds Per Photo |  |
| `WFMakeGIFActionLoopEnabled` | Loop Forever |  |
| `WFMakeGIFActionLoopCount` | WFMakeGIFActionLoopCount |  |
| `WFMakeGIFActionAutoSize` | Auto Size |  |
| `WFMakeGIFActionManualSizeWidth` | Width |  |
| `WFMakeGIFActionManualSizeHeight` | Height |  |
| `WFInput` | Content |  |

## Make HTML from Rich Text (`is.workflow.actions.gethtmlfromrichtext`)

Converts the rich text passed as input to HTML text.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFMakeFullDocument` | Make Full Document | This indicates whether or not this action writes out an entire HTML document. If this is turned off, partial HTML will be returned if possible. |
| `WFInput` | Rich Text |  |

## Make Image from PDF Page (`is.workflow.actions.makeimagefrompdfpage`)

Creates images from the pages in the PDF passed into the action.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFInput` | PDF |  |
| `WFMakeImageFromPDFPageImageFormat` | Image Format |  |
| `WFMakeImageFromPDFPageColorspace` | Color |  |
| `WFMakeImageFromPDFPageResolution` | Resolution (dots per inch) |  |

## Make Image from Rich Text (`is.workflow.actions.makeimagefromrichtext`)

Creates an image from the rich text, web content, or URL passed in as input.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFInput` | Rich Text |  |
| `WFWidth` | Width |  |
| `WFHeight` | Height |  |

## Make Markdown from Rich Text (`is.workflow.actions.getmarkdownfromrichtext`)

Converts the rich text passed as input to Markdown text (comparable to Aaron Swartz's html2text script).

| Key | Display Name | Description |
| --- | --- | --- |
| `WFInput` | Rich Text |  |

## Make PDF (`is.workflow.actions.makepdf`)

Makes a PDF out of the input. The resulting PDF can optionally include a quarter-inch margin for better printing.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFPDFIncludeMargin` | Include Margin |  |
| `WFPDFIncludedPages` | Include |  |
| `WFPDFSinglePage` | Page # |  |
| `WFPDFPageRangeStart` | Start Page # |  |
| `WFPDFPageRangeEnd` | End Page # |  |
| `WFInput` | Input |  |
| `WFPDFDocumentMergeBehavior` | Merge Behavior | Merge documents by appending or shuffling pages. Shuffling will add one page from each of the passed documents to the new document, then proceed to take the next page from each passed document, until all pages in the passed documents have been added to the new document. |

## Make Rich Text from HTML (`is.workflow.actions.getrichtextfromhtml`)

Takes the inputted HTML and turns it into rich text, which can then be converted to other formats.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFHTML` | HTML |  |

## Make Rich Text from Markdown (`is.workflow.actions.getrichtextfrommarkdown`)

Takes the inputted Markdown and turns it into rich text, which can then be converted to other formats.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFInput` | Markdown Text |  |

## Make Spoken Audio from Text (`is.workflow.actions.makespokenaudiofromtext`)

Creates an audio file from text, using text-to-speech.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFInput` | Text |  |
| `WFSpeakTextRate` | Rate |  |
| `WFSpeakTextPitch` | Pitch |  |
| `WFSpeakTextLanguage` | Language |  |
| `WFSpeakTextVoice` | Voice |  |

## Make Video from GIF (`is.workflow.actions.makevideofromgif`)

Converts an animated GIF into a video.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFMakeVideoFromGIFActionLoopCount` | WFMakeVideoFromGIFActionLoopCount |  |
| `WFInputGIF` | Image |  |

## Markup (`is.workflow.actions.avairyeditphoto`)

Edits an image or PDF with Markup.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFDocument` | Document |  |

## Mask Image (`is.workflow.actions.image.mask`)

Applies a mask to each image passed into the action. For example, you can cut images into a rounded rectangle, ellipse or icon shape, or provide a custom alpha mask.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFInput` | Image |  |
| `WFMaskType` | Type |  |
| `WFMaskCornerRadius` | Corner Radius | A radius to apply to each corner of the source image in pixels. |
| `WFCustomMaskImage` | Custom Image | An alpha mask to apply to the source image, where darker colors become transparent and lighter colors remain opaque. If the mask is sized differently than the source image, the mask is resized to match the dimensions of the source image. |

## Measurement (`is.workflow.actions.measurement.create`)

Passes the specified measurement (including number and unit) to the next action.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFMeasurementUnitType` | Type |  |
| `WFMeasurementUnit` | Value |  |

## Mount Disk Image (`is.workflow.actions.mountdiskimage`)

Mounts a disk image (.dmg) file on your desktop.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFInput` | File |  |

## Move File (`is.workflow.actions.file.move`)

Moves the specified file to a new location.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFFile` | File |  |
| `WFFolder` | Folder |  |
| `WFReplaceExisting` | Replace Existing Files |  |

## Move Window (`is.workflow.actions.movewindow`)

Moves one or more windows to the specified location.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFPosition` | Position |  |
| `WFXCoordinate` | X |  |
| `WFYCoordinate` | Y |  |
| `WFWindow` | Window |  |
| `WFBringToFront` | Bring to Front |  |

## Nothing (`is.workflow.actions.nothing`)

This action does nothing and produces no output. It is useful to separate blocks of actions, or to explicitly pass an empty input to an action.

_This action does not expose any parameters._

## Number (`is.workflow.actions.number`)

Passes a number to the next action.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFNumberActionNumber` | Number |  |

## Open App (`is.workflow.actions.openapp`)

Opens the specified app.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFSelectedApp` | App |  |
| `WFAppName` | App Name |  |
| `WFOpenInSlideOver` | Slide Over |  |

## Open Bear Note (`net.shinyfrog.bear-IOS.open`)

Opens a note in Bear. You can specify either the note title or the note identifier.

| Key | Display Name | Description |
| --- | --- | --- |
| `BearTitle` | Note Title | The title of the note to get the contents of from Bear. |
| `BearIdentifier` | Note Identifier | The identifier of the note to get the contents of from Bear. You can find a note’s identifier by swiping left on the note in the list, choosing “More”, and choosing “Copy note identifier.” |

## Open Directions (`is.workflow.actions.getdirections`)

Opens directions to the location passed into this action in your choice of Maps, Google Maps, Citymapper, Transit, or Waze. For example, you can use this action to get directions to an upcoming event on your calendar.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFLocation` | Location |  |
| `WFDestination` | Destination |  |
| `WFGetDirectionsActionApp` | App |  |
| `WFGetDirectionsActionMode` | Mode |  |

## Open Draft (`com.agiletortoise.Drafts4.open`)

This action will open the specified draft in Drafts and allows you to run a Drafts action on it.

| Key | Display Name | Description |
| --- | --- | --- |
| `DraftsUUID` | UUID | The UUID of the draft (can be found inside of the Drafts app) |
| `DraftsReturn` | Edit in Drafts | Whether to stay editing in Drafts or to immediately return to Shortcuts |
| `DraftsActionEnabled` | Run Action |  |
| `DraftsAction` | Action | The Drafts action to run automatically |
| `DraftsActionKey` | Key | The URL security key specified in Drafts settings, if it's required |
| `DraftsAfterSuccess` | After Success | What to do with the draft if the action succeeds |

## Open File (`is.workflow.actions.openin`)

Opens the input as a file in the specified app.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFOpenInAskWhenRun` | Show Open In Menu |  |
| `WFSelectedApp` | App |  |
| `WFAppName` | App Name |  |
| `WFInput` | File |  |

## Open in BlindSquare (`is.workflow.actions.showinblindsquare`)

Opens BlindSquare showing information about the place passed as input, so you can save it as a favorite, start tracking it, or start simulation mode.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFBlindSquareSimulation` | Start Simulation |  |
| `WFInput` | Location |  |

## Open in Calendar (`is.workflow.actions.showincalendar`)

Shows the date or calendar event passed as input in the Calendar app.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFEvent` | Event |  |

## Open in GoodReader (`is.workflow.actions.goodreader.open`)

Opens a file in GoodReader.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFInput` | File |  |

## Open in Maps (`is.workflow.actions.searchmaps`)

Opens your choice of Maps, Google Maps, or Waze and searches for the location, place, or text that was passed into the action.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFInput` | Location |  |
| `WFSearchMapsActionApp` | App |  |

## Open Reminders List (`is.workflow.actions.reminders.showlist`)

Shows the specified list in the Reminders app.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFList` | List | The list to show |

## Open Tweetbot (`com.tapbots.Tweetbot.opentweetbot`)

Opens the specified page in the Tweetbot app.

| Key | Display Name | Description |
| --- | --- | --- |
| `TweetbotPage` | TweetbotPage |  |
| `TwitterAccount` | Account | The account to open, if you have multiple set up. |

## Open Ulysses (`com.soulmen.ulysses.pad.open`)

Opens a group or sheet in Ulysses.

| Key | Display Name | Description |
| --- | --- | --- |
| `UlyssesOpenOperation` | Open |  |
| `UlyssesSheetIdentifier` | Sheet Identifier | The identifier of the sheet to open. You can find the identifier of a sheet in Ulysses by swiping left on the sheet in the list, choosing “More”, tapping “Share...”, and choosing “Copy Callback Identifier”. |
| `UlyssesGroupName` | Group | The group to open. You can specify a group's name (e.g. My Group), path (e.g. /My Group/My Subgroup), or identifier (e.g. H8zLAmc1I0njH-0Ql-3YGQ). |

## Open URL in Opener (`com.tijo.opener.Opener.show-options`)

Shows the URL passed as input in Opener, which lets you choose an app to open it in.

| Key | Display Name | Description |
| --- | --- | --- |
| `OpenerURL` | URL |  |

## Open URLs in Chrome (`com.google.chrome.ios.openurl`)

Opens the inputted URLs in Google Chrome.

| Key | Display Name | Description |
| --- | --- | --- |
| `ChromeURLs` | URL |  |

## Open X-Callback URL (`is.workflow.actions.openxcallbackurl`)

Performs the specified x-callback-url action. The x-success, x-cancel, and x-error parameters will be added automatically.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFXCallbackCustomCallbackEnabled` | Custom Callback | Turn this on if you want to open a callback URL that is not x-callback-url compliant and uses keys other than “x-success”, “x-error”, and “x-cancel”. |
| `WFXCallbackCustomSuccessKey` | Success Key |  |
| `WFXCallbackCustomCancelKey` | Cancel Key |  |
| `WFXCallbackCustomErrorKey` | Error Key |  |
| `WFXCallbackCustomSuccessURLEnabled` | Custom X-Success URL | If enabled, Shortcuts will use a custom success callback URL. This is useful if the app you are calling uses placeholders in the x-success URL to pass output. |
| `WFXCallbackCustomSuccessURL` | X-Success URL | For example, you might use shortcuts://callback?result=[[output]] |
| `WFXCallbackURL` | X-Callback URL |  |

## Optimize File Size of PDF (`is.workflow.actions.compresspdf`)

Optimizes the file size of the provided PDF file by compressing its images.

If the images contained in the PDF are already compressed, this action might not have a measurable effect on file size.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFInput` | PDF |  |

## Overlay Image (`is.workflow.actions.overlayimageonimage`)

Overlays an image on top of another image.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFImage` | Image |  |
| `WFInput` | Image |  |
| `WFShouldShowImageEditor` | Show Image Editor |  |
| `WFImagePosition` | Position |  |
| `WFImageWidth` | Width |  |
| `WFImageHeight` | Height |  |
| `WFImageX` | X Coordinate |  |
| `WFImageY` | Y Coordinate |  |
| `WFRotation` | Rotation (Degrees) |  |
| `WFOverlayImageOpacity` | Opacity |  |

## Overlay Text (`is.workflow.actions.overlaytext`)

Overlays text onto the image passed as input.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFText` | Text |  |
| `WFImage` | Image |  |
| `WFTextPosition` | Position |  |
| `WFTextX` | X Coordinate | The X Coordinate to start the text at, in points. 0 starts at the left of the image. |
| `WFPercentageTextX` | X Coordinate | The X Coordinate to start the text at, as a decimal proportion of the image size between 0 and 1. 0 starts at the left of the image. |
| `WFTextY` | Y Coordinate | The Y Coordinate to start the text at, in points. 0 starts at the top of the image. |
| `WFPercentageTextY` | Y Coordinate | The Y Coordinate to start the text at, as a decimal proportion of the image size between 0 and 1. 0 starts at the top of the image. |
| `WFTextOffset` | Offset | The amount of additional space between the text box and the nearest edges of the image, in points. For example, the nearest edges are the Left for Middle Left alignment, the Bottom and Right for Bottom Right alignment, and the Top for Top alignment. |
| `WFPercentageTextOffset` | Offset | The amount of additional space between the text box and the nearest edges of the image, as a decimal proportion of the image size between 0 and 1. For example, the nearest edges are the Left for Middle Left alignment, the Bottom and Right for Bottom Right alignment, and the Top for Top alignment. |
| `WFFontSize` | Font Size | The size of the font, in points, to apply to the text. |
| `WFPercentageFontSize` | Font Size | The size of the font, as a decimal proportion of the image size between 0 and 1, to apply to the text. |
| `WFTextAlignment` | Text Alignment | The alignment to apply to the text. This will align to the edge of the bounding box created by the Maximum Width, if any. |
| `WFTextColor` | Font Color |  |
| `WFTextRotation` | Rotation | The amount of rotation, in degrees, to apply to the text. Starts from the center of the text bounds. Optional. |
| `WFTextOutlineEnabled` | Outline Text |  |
| `WFTextStrokeWidth` | Stroke Width | The stroke width, in points, to apply to the text. Optional. |
| `WFPercentageTextStrokeWidth` | Stroke Width | The stroke width, as a decimal proportion of the font size between 0 and 1, to apply to the text. Optional. |
| `WFTextStrokeColor` | Stroke Color |  |
| `WFTextBoxWidth` | Maximum Width | The maximum width of the text, in points. If 0, the text will have a bounding box that is as wide as necessary, and may run off the edge of the image. Otherwise, the text will wrap within the bounds of the width. Optional. |
| `WFPercentageTextBoxWidth` | Maximum Width | The maximum width of the text, as a decimal proportion of the image size between 0 and 1. If 0, the text will have a bounding box that is as wide as necessary, and may run off the edge of the image. Otherwise, the text will wrap within the bounds of the width. Optional. |
| `WFSizingMethod` | Sizing | The sizing method to use. Proportional sizing will cause all parameters to use a decimal proportion between 0 and 1. Absolute sizing will cause all parameters to use points. |

## Phone Number (`is.workflow.actions.phonenumber`)

Passes the specified phone numbers to the next action.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFPhoneNumber` | Phone Number |  |

## Play Music (`is.workflow.actions.playmusic`)

Plays music using the Music app.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFPlayMusicActionShuffle` | Shuffle |  |
| `WFPlayMusicActionRepeat` | Repeat |  |

## Play Podcast (`is.workflow.actions.playpodcast`)

Plays a podcast using the Podcasts app. If no podcast is selected, resumes playback.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFPodcastShow` | Podcast |  |
| `WFPodcastPlaybackOrder` | Playback Order | The order within a show of the episodes to play. By default, the order will match the order used in the Podcasts app. |

## Play Sound (`is.workflow.actions.playsound`)

Plays the audio file passed as input, or a default notification sound if no audio file was passed.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFInput` | Sound File |  |

## Play/Pause (`is.workflow.actions.pausemusic`)

Plays or pauses the currently playing media.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFPlayPauseBehavior` | Play/Pause |  |
| `WFMediaRoute` | Device |  |

## Post on Facebook (`is.workflow.actions.postonfacebook`)

Shares the input on Facebook.

| Key | Display Name | Description |
| --- | --- | --- |
| `FacebookContent` | Content |  |

## Post to Shared Album (`com.apple.mobileslideshow.StreamShareService`)

Shares the input with (null).

| Key | Display Name | Description |
| --- | --- | --- |
| `ImageInput` | Images |  |

## Post to Tumblr (`is.workflow.actions.tumblr.post`)

Posts the content passed into the action to Tumblr.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFInput` | Content |  |
| `WFComposeInApp` | Compose In Tumblr |  |
| `WFBlogName` | Blog | The name of the blog to post to. |
| `WFPostType` | Type |  |
| `WFPostState` | Post Status |  |
| `WFPostTitle` | Title |  |
| `WFPostSource` | Source |  |
| `WFPostCaption` | Caption |  |
| `WFPostTags` | Tags |  |
| `WFPostDescription` | Description |  |

## Post to WordPress (`is.workflow.actions.wordpress.post`)

Posts the input to a WordPress blog as a new post or page.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFAccount` | Account |  |
| `Blog` | Blog |  |
| `Title` | Title |  |
| `Type` | Type |  |
| `Format` | Format |  |
| `Status` | Status |  |
| `AllowComments` | Allow Comments |  |
| `Slug` | Slug |  |
| `Excerpt` | Excerpt |  |
| `Date` | Publish Date |  |
| `Template` | Template |  |
| `ThumbnailImage` | Featured Image |  |
| `CustomFields` | Custom Fields |  |
| `WFInput` | Content |  |

## Print (`is.workflow.actions.print`)

Prints the input using AirPrint.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFInput` | Input |  |

## Put Display to Sleep (`is.workflow.actions.displaysleep`)

Puts the display(s) of this Mac to sleep.

_This action does not expose any parameters._

## Quick Look (`is.workflow.actions.previewdocument`)

Displays a preview of the input using the system Quick Look.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFInput` | Input |  |
| `WFQuickLookActionFullScreen` | Full Screen |  |

## Quit App (`is.workflow.actions.quit.app`)

Quits one or all open applications. You can choose a list of apps to keep open.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFQuitAppMode` | Mode |  |
| `WFApp` | App |  |
| `WFAskToSaveChanges` | Ask to Save Changes |  |

## Random Number (`is.workflow.actions.number.random`)

Passes a random number between the given minimum and maximum to the next action. The minimum and maximum numbers are included as possible results.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFRandomNumberMinimum` | Minimum |  |
| `WFRandomNumberMaximum` | Maximum |  |

## Recognize Music (`com.apple.musicrecognition.RecognizeMusicIntent`)

Uses the microphone to listen to and identify nearby media.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFShazamMediaActionShowWhenRun` | Show When Run |  |
| `WFShazamMediaActionErrorIfNotRecognized` | Error If Not Recognized |  |

## Record Audio (`is.workflow.actions.recordaudio`)

Uses the microphone to record audio.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFRecordingCompression` | Audio Quality | High-quality audio takes up a lot more space than normal audio, so stick with normal unless you really need it. Normal audio is returned as an M4A file (with AAC audio), while high-quality audio is returned in uncompressed WAV format. |
| `WFRecordingStart` | Start Recording |  |
| `WFRecordingEnd` | Finish Recording |  |
| `WFRecordingTimeInterval` | Duration |  |

## Remove Events (`is.workflow.actions.removeevents`)

Removes all events passed into the action from the calendars they are contained in.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFCalendarIncludeFutureEvents` | Include Future Events | When enabled, any repeats of an event in the future are also removed. |
| `WFInputEvents` | Events |  |

## Remove from Photo Album (`is.workflow.actions.removefromalbum`)

Removes the photos or videos passed as input from the specified photo album.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFRemoveAlbumSelectedGroup` | Album |  |
| `WFInput` | Input |  |

## Remove Image Background (`is.workflow.actions.image.removebackground`)

Removes the background from an image, keeping the subjects.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFCropToBounds` | Crop | If turned on, the resulting image will be cropped to its bounds. If turned off, the original bounds will be kept. |
| `WFInput` | Image |  |

## Remove Reminders (`is.workflow.actions.removereminders`)

Removes all reminders passed into the action from the lists they are contained in.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFInputReminders` | Reminders |  |

## Rename File (`is.workflow.actions.file.rename`)

Renames the specified file.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFFile` | File |  |
| `WFNewFilename` | Name |  |

## Replace Text (`is.workflow.actions.text.replace`)

Replaces all occurrences of the given text with other text.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFReplaceTextFind` | Find Text | The text to be replaced. |
| `WFReplaceTextReplace` | Replace With | The text to replace all occurrences of Find Text. |
| `WFReplaceTextCaseSensitive` | Case Sensitive | When disabled, the capitalization of letters is ignored. |
| `WFReplaceTextRegularExpression` | Regular Expression | When enabled, Find Text is treated as a regular expression. |
| `WFInput` | Text |  |

## Resize Image (`is.workflow.actions.image.resize`)

Scales images to a particular width and height.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFImageResizeKey` | By |  |
| `WFImageResizeWidth` | Width |  |
| `WFImageResizeHeight` | Height |  |
| `WFImageResizePercentage` | Percentage |  |
| `WFImageResizeLength` | Longest Edge Size |  |
| `WFImage` | Image |  |

## Resize Window (`is.workflow.actions.resizewindow`)

Resizes one or more windows to the specified width and height.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFConfiguration` | Configuration |  |
| `WFWidth` | Width |  |
| `WFHeight` | Height |  |
| `WFWindow` | Window |  |
| `WFBringToFront` | Bring to Front |  |

## Reveal Files in Finder (`is.workflow.actions.file.reveal`)

Opens windows in the Finder with the specified files selected.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFFile` | Files |  |

## Rotate Image/Video (`is.workflow.actions.image.rotate`)

Turns an image or video clockwise by a particular number of degrees.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFImageRotateAmount` | Degrees |  |
| `WFImage` | Image |  |

## Round Number (`is.workflow.actions.round`)

Rounds the number(s) passed into the action.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFInput` | Number |  |
| `WFRoundTo` | Value |  |
| `WFRoundMode` | Mode |  |
| `TenToThePowerOf` | Ten to the Power of |  |

## Run AppleScript (`is.workflow.actions.runapplescript`)

This action executes an AppleScript.

| Key | Display Name | Description |
| --- | --- | --- |
| `Input` | Input |  |

## Run Drafts Action (`com.agiletortoise.Drafts4.runAction`)

This action will run a Drafts action on the input

| Key | Display Name | Description |
| --- | --- | --- |
| `DraftsInput` | Text |  |
| `DraftsAction` | Action | The Drafts action to run automatically |
| `DraftsActionKey` | Key | The URL security key specified in Drafts settings, if it's required |

## Run Editorial Workflow (`com.omz-software.Editorial.runworkflow`)

Runs the specified Editorial workflow.

| Key | Display Name | Description |
| --- | --- | --- |
| `EditorialInput` | Input |  |
| `EditorialWorkflowName` | Workflow | The name of the Editorial workflow to run. |
| `EditorialReturn` | Return When Finished |  |

## Run JavaScript for Mac Automation (`is.workflow.actions.runjavascriptforautomation`)

This action executes a JavaScript for Automation (JXA) script.

| Key | Display Name | Description |
| --- | --- | --- |
| `Input` | Input |  |

## Run JavaScript on Active Safari Tab (`is.workflow.actions.runjavascriptonwebpage`)

Runs JavaScript on a Safari web page passed in as input

| Key | Display Name | Description |
| --- | --- | --- |
| `WFJavaScript` | JavaScript |  |
| `WFInput` | Web Page |  |

## Run Schemes Workflow (`com.blackfoggames.Schemes.schemes`)

Runs the specified workflow in Schemes, a drag-and-drop URL workflow builder.

| Key | Display Name | Description |
| --- | --- | --- |
| `WorkflowName` | Name |  |
| `SchemesReturn` | Return When Finished |  |

## Run Script (`com.omz-software.Pythonista.runscript`)

Runs the specified script in Pythonista and waits to continue the shortcut until you return to the Shortcuts app.

| Key | Display Name | Description |
| --- | --- | --- |
| `PythonistaArgs` | Arguments |  |
| `PythonistaScript` | Script Name | The name of the script to run. Must match the name of a script in your Pythonista library. |

## Run Script Over SSH (`is.workflow.actions.runsshscript`)

Runs a script on a remote computer over SSH.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFSSHScript` | Script |  |
| `WFSSHHost` | Host |  |
| `WFSSHPort` | Port |  |
| `WFSSHUser` | User |  |
| `WFSSHAuthenticationType` | Authentication |  |
| `WFSSHPassword` | Password |  |
| `WFInput` | Input |  |

## Run Shell Script (`is.workflow.actions.runshellscript`)

This action executes a UNIX shell script. The script will execute starting in your user’s home directory.

| Key | Display Name | Description |
| --- | --- | --- |
| `Script` | Script |  |
| `Shell` | Shell | The shell to use for interpreting and running the script. |
| `Input` | Input |  |
| `InputMode` | Pass Input | to stdin: The input will be converted to a file and directed to the stdin pipe of the script.<br/>as arguments: The input will be converted to a list of strings and passed as arguments to the script. |
| `RunAsRoot` | Run as Administrator | When enabled, Shortcuts will ask for an administrator’s password and run the script as the root user. This is similar to using sudo on the command line. |

## Run Shortcut (`is.workflow.actions.runworkflow`)

Runs a shortcut from your shortcut.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFInput` | Input |  |

## Save Dropbox File (`is.workflow.actions.dropbox.savefile`)

Save files to Dropbox. Turn off “Ask Where to Save” in order to specify a destination path.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFAskWhereToSave` | Ask Where to Save |  |
| `WFFileDestinationPath` | Destination Path | The path to save to, such as "/folder/file.txt" |
| `WFSaveFileOverwrite` | Replace Existing Files |  |
| `WFInput` | File |  |

## Save File (`is.workflow.actions.documentpicker.save`)

Saves files to a specified folder. You can also use this action to copy a file.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFInput` | File |  |
| `WFFolder` | Folder |  |
| `WFAskWhereToSave` | Ask Where To Save |  |
| `WFFileDestinationPath` | Subpath | The path to save to, such as "/folder/file.txt" |
| `WFSaveFileOverwrite` | Overwrite If File Exists |  |

## Save to Photos (`is.workflow.actions.savetocameraroll`)

Adds the photos and videos passed as input to the specified photo album.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFCameraRollSelectedGroup` | Album |  |
| `WFInput` | Input |  |

## Save with Transmit (`com.panic.iOS.Transmit.Share`)

Shares the input with (null).

| Key | Display Name | Description |
| --- | --- | --- |
| `TransmitSaveTo` | Save To |  |
| `TransmitFavoriteName` | Favorite Name |  |
| `TransmitPath` | Path |  |

## Scan QR or Barcode (`is.workflow.actions.scanbarcode`)

Scans a QR code or barcode using the camera, and returns the text/URL that is found.

_This action does not expose any parameters._

## Search in Associate (`squibner.AmazonLinker.search`)

Uses Associate to quickly look up products on Amazon and create affiliate links.

| Key | Display Name | Description |
| --- | --- | --- |
| `AssociateQuery` | Item |  |

## Search in Bear (`net.shinyfrog.bear-IOS.search`)

Opens the Bear app and searches for the specified text.

| Key | Display Name | Description |
| --- | --- | --- |
| `BearTerm` | Search | The string to search inside of Bear |
| `BearTag` | Tag | The tag to filter the results by |

## Search in Blink (`com.squibner.Blink.search`)

Uses Blink to quickly look up media on the App Store and iTunes Store and create affiliate links.

| Key | Display Name | Description |
| --- | --- | --- |
| `BlinkQuery` | Search |  |

## Search in Passwords (`is.workflow.actions.openpasswords`)

Opens Passwords and searches for the given text.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFShowPasswordsSearchTerm` | Text |  |

## Search Text (`com.tapbots.Tweetbot.searchtext`)

Searches Twitter for the specified text in the Tweetbot app and returns to Shortcuts when you're done.

| Key | Display Name | Description |
| --- | --- | --- |
| `tweetbotSearch` | Term |  |
| `TwitterAccount` | Account | The account to search from, if you have multiple set up. |

## Search Web (`is.workflow.actions.searchweb`)

Searches the web for the text provided as input.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFSearchWebDestination` | Service |  |
| `WFInputText` | Text |  |

## Seek (`is.workflow.actions.seek`)

Seek to a specific time, or forward and backward by some duration, in the currently playing media.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFSeekBehavior` | Seek Type |  |
| `WFTimeInterval` | Time Interval |  |
| `WFMediaRoute` | Device |  |

## Select Contact (`is.workflow.actions.selectcontacts`)

Prompts to pick a person from your contacts and passes the selection to the next action.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFSelectMultiple` | Select Multiple |  |

## Select Email Address (`is.workflow.actions.selectemail`)

Prompts to pick an email address from your contacts and passes the selection to the next action.

_This action does not expose any parameters._

## Select File (`is.workflow.actions.file.select`)

Prompts to select files or folders.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFPickingMode` | Type |  |
| `SelectMultiple` | Select Multiple |  |

## Select Music (`is.workflow.actions.exportsong`)

Prompts to select music from your local music library.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFExportSongActionSelectMultiple` | Select Multiple Songs |  |

## Select Phone Number (`is.workflow.actions.selectphone`)

Prompts to pick a phone number from your contacts and passes the selection to the next action.

_This action does not expose any parameters._

## Select Photos (`is.workflow.actions.selectphoto`)

Prompts to choose photos and videos from your photo library.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFPhotoPickerTypes` | Include |  |
| `WFSelectMultiplePhotos` | Select Multiple |  |

## Send Message via LINE (`jp.naver.line.message`)

Posts a message to LINE.

_This action does not expose any parameters._

## Send Message via Telegram (`ph.telegra.Telegraph.msg`)

Sends the input via Telegram.

| Key | Display Name | Description |
| --- | --- | --- |
| `TelegramContact` | Recipient |  |

## Send Message via WhatsApp (`net.whatsapp.WhatsApp.send`)

Sends the input via WhatsApp.

| Key | Display Name | Description |
| --- | --- | --- |
| `WhatsAppContact` | Recipient |  |

## Send Note (`com.boonbits.captio.sendnote`)

Sends the specified note using Captio and returns to the shortcut.

| Key | Display Name | Description |
| --- | --- | --- |
| `captioNote` | Note |  |

## Send Photo via WhatsApp (`desktop.WhatsApp.openin`)

Opens the photo, video, or audio passed as input in WhatsApp.

| Key | Display Name | Description |
| --- | --- | --- |
| `WhatsAppInput` | Content |  |

## Send via DeskConnect (`is.workflow.actions.deskconnect.send`)

Sends the input to another device via DeskConnect. DeskConnect makes it easy to send web pages, documents, pictures, and anything else between your devices.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFInput` | Content |  |

## Set AirDrop Receiving (`is.workflow.actions.setairdropreceiving`)

Sets AirDrop receiving to No One, Contacts Only, or Everyone. This allows you to choose who can see your device and send you content through AirDrop.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFAirDropState` | State |  |

## Set Dictionary Value (`is.workflow.actions.setvalueforkey`)

Sets a value in the dictionary passed into the action.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFDictionaryKey` | Key |  |
| `WFDictionaryValue` | Value |  |
| `WFDictionary` | Dictionary |  |

## Set Hotspot Password (`is.workflow.actions.personalhotspot.password.set`)

Sets the Personal Hotspot password.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFInput` | Password |  |

## Set Name (`is.workflow.actions.setitemname`)

Sets the name of the item passed as input.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFName` | Name |  |
| `WFDontIncludeFileExtension` | Don't Include File Extension | By default, Shortcuts will automatically include a file extension if one isn't specified. Turn this on if you want to create a file with no extension. |
| `WFInput` | Input |  |

## Set Noise Control Mode (`is.workflow.actions.listeningmode.set`)

Sets a Noise Control mode on your selected device

| Key | Display Name | Description |
| --- | --- | --- |
| `WFRoute` | Route |  |
| `WFListeningMode` | Noise Control mode |  |

## Set Parked Car (`is.workflow.actions.setparkedcar`)

Saves details of your Parked Car in the Maps app.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFLocation` | Location | The location of the car. |
| `WFSetParkedCarNotes` | Notes | Optional text that will be stored along with your parked car. |
| `WFImage` | Image | An optional image of the location where you parked the car. |

## Set Variable (`is.workflow.actions.setvariable`)

Sets the value of the specified variable to the input of this action.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFInput` | Input |  |

## Set Volume (`is.workflow.actions.setvolume`)

Sets the volume of the device.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFVolumeSetting` | Volume Setting | The volume setting to change, either Media or Ringtone. |
| `WFVolume` | Volume | If you set the volume using a variable, use a number between 0 and 1 (for example, pass 0.5 for half volume). |

## Set VPN (`is.workflow.actions.vpn.set`)

Connects, disconnects or changes the On Demand setting for a VPN Configuration on this device.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFVPNOperation` | Operation |  |
| `WFOnDemandValue` | Set On Demand To |  |
| `WFVPN` | VPN | The VPN that will be configured by running this action. |

## Set Wallpaper Photo (`is.workflow.actions.wallpaper.set`)

Sets the wallpaper to the specified image.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFInput` | Image |  |
| `WFWallpaperLocation` | Wallpaper Location |  |
| `WFWallpaperShowPreview` | Show Preview |  |
| `WFWallpaperPerspectiveZoom` | Perspective Zoom |  |
| `WFWallpaperSmartCrop` | Crop to Subject |  |
| `WFWallpaperLegibilityBlur` | Legibility Blur |  |

## Share (`is.workflow.actions.share`)

Prompts to share the input.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFInput` | Input |  |

## Share with Apps (`is.workflow.actions.runextension`)

Prompts to share the input using action extensions and sharing extensions provided by other apps.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFInput` | Input |  |
| `WFApp` | App |  |

## Shazam It (`is.workflow.actions.shazamMedia`)

Uses the microphone to listen to and identify nearby media.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFShazamMediaActionShowWhenRun` | Show When Run |  |
| `WFShazamMediaActionErrorIfNotRecognized` | Error If Not Recognized |  |

## Show Alert (`is.workflow.actions.alert`)

Displays an alert with a title, a message, and two buttons. If the user selects the OK button, the shortcut continues. The cancel button stops the shortcut.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFAlertActionTitle` | Title |  |
| `WFAlertActionMessage` | Message |  |
| `WFAlertActionCancelButtonShown` | Show Cancel Button |  |

## Show Definition (`is.workflow.actions.showdefinition`)

Shows the definition of the word passed into the action.

| Key | Display Name | Description |
| --- | --- | --- |
| `Word` | Word |  |

## Show in Fantastical (`com.flexibits.fantastical2.showinfantastical`)

Shows the date passed as input in Fantastical.

| Key | Display Name | Description |
| --- | --- | --- |
| `FantasticalDate` | Date |  |

## Show in iTranslate (`com.outerspaceapps.itranslate.translate`)

Shows a translation of the text passed as input in the iTranslate app.

| Key | Display Name | Description |
| --- | --- | --- |
| `Input` | Text |  |
| `FromLanguage` | From |  |
| `ToLanguage` | To |  |

## Show in iTunes Store (`is.workflow.actions.showinstore`)

Shows the iTunes products or App Store apps passed as input in a store sheet. This is useful with the Find iTunes Store Items and Find App Store Apps actions.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFProduct` | Product |  |

## Show Notification (`is.workflow.actions.notification`)

Displays a local notification.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFNotificationActionTitle` | Title |  |
| `WFNotificationActionBody` | Body |  |
| `WFNotificationActionSound` | Play Sound |  |
| `WFInput` | Attachment |  |

## Show Profile in Tweetbot (`com.tapbots.Tweetbot.viewprofile`)

Opens the specified user's profile in the Tweetbot app and returns to Shortcuts when you're done.

| Key | Display Name | Description |
| --- | --- | --- |
| `TwitterUser` | Profile |  |

## Show Result (`is.workflow.actions.showresult`)

Shows a preview of the provided content. If run from Siri, speaks the provided text.

| Key | Display Name | Description |
| --- | --- | --- |
| `Text` | Result |  |

## Show Web View (`is.workflow.actions.showwebpage`)

Shows the web URL passed into the action in a Safari View Controller, allowing you to view the web page without switching apps.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFEnterSafariReader` | Enter Safari Reader | Enter Safari Reader mode if it’s available for the given web page. |
| `WFURL` | URL |  |

## Shut Down (`is.workflow.actions.reboot`)

Shuts down or restarts your device.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFShutdownMode` | Mode |  |

## Skip Back (`is.workflow.actions.skipback`)

Skips to the previous song in the current music queue.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFSkipBackBehavior` | Skip To |  |
| `WFMediaRoute` | Device |  |

## Skip Forward (`is.workflow.actions.skipforward`)

Skips to the next song in the current music queue.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFMediaRoute` | Device |  |

## Sleep (`is.workflow.actions.sleep`)

Put this Mac to sleep.

_This action does not expose any parameters._

## Speak Text (`is.workflow.actions.speaktext`)

Speaks the inputted text aloud.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFSpeakTextWait` | Wait Until Finished |  |
| `WFSpeakTextRate` | Rate |  |
| `WFSpeakTextPitch` | Pitch |  |
| `WFSpeakTextLanguage` | Language |  |
| `WFSpeakTextVoice` | Voice |  |
| `WFText` | Text |  |

## Split PDF Into Pages (`is.workflow.actions.splitpdf`)

Splits the input document by creating a PDF for each page.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFInput` | PDF |  |

## Split Screen Apps (`is.workflow.actions.splitscreen`)

Open the specified apps in split screen mode.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFPrimaryAppIdentifier` | App |  |
| `WFSecondaryAppIdentifier` | App |  |
| `WFAppRatio` | Ratio |  |

## Start Screen Saver (`is.workflow.actions.startscreensaver`)

Starts the screen saver selected in the Desktop & Screen Saver preference pane.

_This action does not expose any parameters._

## Stop and Output (`is.workflow.actions.output`)

Stops execution of the current shortcut, and outputs content. This action is useful when:
• Running a shortcut from another shortcut (using the Run Shortcut action). The output will be used as the output of the Run Shortcut action.
• Running a shortcut from Quick Actions in Finder on macOS. The output will be saved as a file alongside the files selected in Finder.
• Running a shortcut from Services on macOS. The output will replace the selected text, if applicable.
• Or, when running a shortcut from another location that supports output, like the command-line or the Shortcuts URL scheme.

No more actions will be run after this action.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFOutput` | Result |  |
| `WFNoOutputSurfaceBehavior` | If there’s nowhere to output |  |
| `WFResponse` | Result |  |

## Stop This Shortcut (`is.workflow.actions.exit`)

Stops execution of the current shortcut and dismisses the shortcut on screen. No more actions will be run after this action.

_This action does not expose any parameters._

## Street Address (`is.workflow.actions.address`)

Passes the specified address to the next action.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFAddressLine1` | Line 1 |  |
| `WFAddressLine2` | Line 2 |  |
| `WFCity` | City |  |
| `WFState` | State |  |
| `WFPostalCode` | Postal Code |  |
| `WFCountry` | Region |  |

## Switch Between Wallpapers (`is.workflow.actions.posters.switch`)

Switches the current Lock Screen wallpaper.

_This action does not expose any parameters._

## Take Photo (`is.workflow.actions.takephoto`)

Uses the camera to take photos.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFCameraCaptureShowPreview` | Show Camera Preview |  |
| `WFPhotoCount` | WFPhotoCount |  |
| `WFCameraCaptureDevice` | Camera |  |

## Take Screenshot (`is.workflow.actions.takescreenshot`)

Take a screenshot of the device's screen.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFTakeScreenshotScreenshotType` | Type |  |
| `WFTakeScreenshotActionInteractiveSelectionType` | Selection |  |
| `WFTakeScreenshotMainMonitorOnly` | Capture Main Display Only |  |
| `WFTakeScreenshotIgnoreContextualAssistanceLayers` | Ignore Contextual Assistance Layers |  |

## Take Video (`is.workflow.actions.takevideo`)

Uses the camera to take a video clip.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFCameraCaptureDevice` | Camera |  |
| `WFCameraCaptureQuality` | Quality |  |
| `WFRecordingStart` | Start Recording |  |

## Text (`is.workflow.actions.gettext`)

Passes the specified text to the next action.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFTextActionText` | Text |  |

## Transform Text (`com.blackfoggames.TextTool.transform`)

TextTool makes it easy to manipulate text through multiple, built-in, powerful transformation options. 28 different text transforms are supported.

| Key | Display Name | Description |
| --- | --- | --- |
| `TransformMethod` | Transform |  |
| `AffixPrefix` | Prefix |  |
| `AffixSuffix` | Suffix |  |
| `AffixScope` | Apply To |  |
| `CaseCase` | Case |  |
| `CommentStyle` | Style |  |
| `ListStyle` | Style |  |
| `EntabSpaces` | Spaces |  |
| `IndentStyle` | Indent With |  |
| `IndentAmount` | Amount |  |
| `JoinDelimiter` | Delimiter |  |
| `RegexSearch` | Search for |  |
| `ReplaceFind` | Find Text |  |
| `ReplacementString` | Replace With |  |
| `RegexCaseSensitivity` | Case Sensitive |  |
| `ReplaceScope` | Replace |  |
| `SortDirection` | Sort |  |

## Translate Text (`is.workflow.actions.text.translate`)

Translates the text passed into the action into another language.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFSelectedFromLanguage` | Language |  |
| `WFSelectedLanguage` | To |  |
| `WFInputText` | Text |  |

## Trim Media (`is.workflow.actions.trimvideo`)

Presents a view allowing you to trim the media passed into the action.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFInputMedia` | Media |  |

## Trim Whitespace (`is.workflow.actions.text.trimwhitespace`)

Removes whitespace and newlines from both ends of the text passed into the action.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFInput` | Text |  |

## Tweet (`com.tapbots.Tweetbot.tweet`)

Tweets using the Tweetbot app and returns to Shortcuts afterwards.

| Key | Display Name | Description |
| --- | --- | --- |
| `TwitterAccount` | Twitter Account | The account to tweet from, if you have multiple set up. |

## Tweet (`is.workflow.actions.tweet`)

Tweets the input.

| Key | Display Name | Description |
| --- | --- | --- |
| `TweetInput` | Tweet |  |

## Update Tally (`com.agiletortoise.Tally2.updatetally`)

Increments or decrements the specified tally in Tally.

| Key | Display Name | Description |
| --- | --- | --- |
| `TallyAction` | Action |  |
| `TallyTitle` | Title | The name of the tally. |

## Upload to Imgur (`is.workflow.actions.imgur.upload`)

Uploads the input to Imgur.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFInput` | Images |  |
| `WFImgurAnonymous` | Upload Anonymously |  |
| `WFImgurDirectLink` | Direct Link | If enabled, the action will return a link to the image, and not its Imgur page. |
| `WFImgurAlbum` | Create Album | If enabled, the input images will be grouped into an album. Otherwise, the individual links will be returned. |
| `WFImgurAlbumLayout` | Album Layout |  |
| `WFImgurAlbumPrivacy` | Album Privacy |  |
| `WFImgurTitle` | Title |  |
| `WFImgurDescription` | Description |  |

## URL (`is.workflow.actions.url`)

Passes the specified URL to the next action.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFURLActionURL` | URL |  |

## URL Encode (`is.workflow.actions.urlencode`)

Encodes or decodes text passed into the action to be suitable for inclusion in a URL by adding or removing percent escapes when appropriate.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFEncodeMode` | Mode |  |
| `WFInput` | Text |  |

## Vibrate Device (`is.workflow.actions.vibrate`)

Vibrates the device for a short amount of time.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFVibrateHapticType` | Haptic Pattern | When run on Apple Watch, the selected pattern will be tapped on to your wrist. |

## View Content Graph (`is.workflow.actions.viewresult`)

Shows the results of the previous action in the Content Graph.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFInput` | Input |  |

## Wait (`is.workflow.actions.delay`)

Waits for the specified number of seconds before continuing with the next action.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFDelayTime` | WFDelayTime |  |

## Wait to Return (`is.workflow.actions.waittoreturn`)

Pauses execution until you leave the Shortcuts app and return to it.

This action might be useful after an action that switches apps, to pause execution until you return to the Shortcuts app.

This action will only take effect when running shortcuts in the Shortcuts app.

_This action does not expose any parameters._

## Watch Me Do (`is.workflow.actions.watchmedo`)

Records and plays back mouse and keyboard events.

| Key | Display Name | Description |
| --- | --- | --- |
| `WFPlaybackSpeed` | Playback Speed | Allows you to choose the playback speed of the action. |
