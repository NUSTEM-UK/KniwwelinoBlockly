var Ardublockly = Ardublockly || {};
Ardublockly.LOCALISED_TEXT = {
  translationLanguage: "English",
  title: "Kniwwelino",
  blocks: "Blocks",
  /* Menu */
  open: "Open",
  save: "Save",
  deleteAll: "Delete All",
  settings: "Settings",
  documentation: "Documentation",
  reportBug: "Report Bug",
  examples: "Examples",
  simple: " simple",
  advanced: " advanced",
  /* Settings */
  compilerLocation: "Compiler Location",
  compilerLocationDefault: "Compiler Location unknown",
  sketchFolder: "Sketch Folder",
  sketchFolderDefault: "Sketch Folder unknown",
  arduinoBoard: "Arduino Board",
  arduinoBoardDefault: "Arduino Board unknown",
  comPort: "COM Port",
  comPortDefault: "COM Port unknown",
  defaultIdeButton: "Default IDE Button",
  defaultIdeButtonDefault: "IDE options unknown",
  language: "Language",
  languageDefault: "Language unknown",
  sketchName: "Sketch Name",
  /* Arduino console output */
  arduinoOpMainTitle: "Arduino IDE output",
  arduinoOpWaiting: "Waiting for the IDE output...",
  arduinoOpUploadedTitle: "Successfully sent upload message to Kniwwelino",
  arduinoOpVerifiedTitle: "Successfully Verified Sketch",
  arduinoOpOpenedTitle: "Sketch opened in IDE",
  arduinoOpOpenedBody: "The sketch should be loaded in the Arduino IDE.",
  arduinoOpErrorTitle: "There has been an error",
  arduinoOpErrorIdContext_0: "No error.",
  arduinoOpErrorIdContext_1: "Build or Upload failed.",
  arduinoOpErrorIdContext_2: "Sketch not found.",
  arduinoOpErrorIdContext_3: "Invalid command line argument.",
  arduinoOpErrorIdContext_4: "Preference passed to 'get-pref' flag does not exist.",
  arduinoOpErrorIdContext_5: "Not Clear, but Arduino IDE sometimes errors with this.",
  arduinoOpErrorIdContext_50: "Unexpected error code from Arduino IDE",
  arduinoOpErrorIdContext_51: "Could not create sketch file",
  arduinoOpErrorIdContext_52: "Invalid path to internally created sketch file",
  arduinoOpErrorIdContext_53: "Unable to find Arduino IDE<br>" +
                              "The compiler directory has not been set correctly.<br>" +
                              "Please ensure the path is correct in the Settings.",
  arduinoOpErrorIdContext_54: "What should we do with the Sketch?<br>" +
                              "The launch IDE option has not been set.<br>" +
                              "Please select an IDE option in the Settings.",
  arduinoOpErrorIdContext_55: "Serial Port unavailable<br>" +
                              "The Serial Port is not accessible.<br>" +
                              "Please check if the Kniwwelino is correctly connected to the PC and select the Serial Port in the Settings.",
  arduinoOpErrorIdContext_56: "Unknown Arduino Board<br>" +
                              "The Kniwwelino Board has not been set.<br>" +
                              "Please select the appropriate Kniwwelino Board from the settings.",
  arduinoOpErrorIdContext_52: "Unexpected server error.",
  arduinoOpErrorIdContext_64: "Unable to parse sent JSON.",
  arduinoOpErrorUnknown: "Unexpected error",
  /* Modals */
  noServerTitle: "Kniwwelino-Blockly app not running",
  noServerTitleBody: "<p>For all the Kniwwelino-Blockly features to be enabled, the Kniwwelino-Blockly desktop application must be running locally on your computer.</p>" +
                     "<p>If you are using an online version you will not be able to configure the settings nor load the blocks code into an Kniwwelino.</p>" +
                     "<p>Installation instruction can be found in the <a href=\"http://doku.kniwwelino.lu/en/installation\">Kniwwelino Documentation Wiki</a>.</p>" +
                     "<p>If you have Kniwwelino-Blockly already installed, make sure the application is running correctly.</p>",
  noServerNoLangBody: "If the Kniwwelino-Blockly application is not running the language cannot be fully changed.",
  addBlocksTitle: "Additional Blocks",
  /* Alerts */
  loadNewBlocksTitle: "Load new blocks?",
  loadNewBlocksBody: "Loading a new XML file will replace the current blocks from the workspace.<br>" +
                     "Are you sure you want to proceed?",
  discardBlocksTitle: "Delete blocks?",
  discardBlocksBody: "There are %1 blocks on the workspace.<br>" +
                     "Are you sure you want to delete them?",
  invalidXmlTitle: "Invalid XML",
  invalidXmlBody: "The XML file was not successfully parsed into blocks. Please review the XML code and try again.",
  /* Tooltips */
  uploadingSketch: "Uploading Code to Kniwwelino...",
  uploadSketch: "Upload Code to the Kniwwelino",
	compiledSketch: "Sketch was compiled. Download to Kniwwelino started",
	compiledSketchFailed: "Compiling of Sketch failed. Check your code and the debug output.",
  verifyingSketch: "Verifying Code...",
  verifySketch: "Verify the Code",
  openingSketch: "Opening Code in the Arduino IDE...",
  openSketch: "Open Code in IDE",
  notImplemented: "Function not yet implemented",
  /* Prompts */
  ok: "OK",
  okay: "Okay",
  close: "Close",
  cancel: "Cancel",
  return: "Return",
  /* Cards */
  seeArduinoSourceCode: "Source Code",
  arduinoSourceCode: "Arduino Source Code",
  blocksXml: "Blocks XML",
  /* Toolbox Categories*/
  catKniwwelino: "Kniwwelino",
  catLogic: "Logic",
  catLoops: "Loops",
  catMath: "Math",
  catText: "Text",
  catVariables: "Variables",
  catFunctions: "Functions",
  catInputOutput: "Input/Output",
  catTime: "Time",
  catAudio: "Audio",
  catMotors: "Motors",
  catComms: "Comms",
  catMQTT: "Messages",
	/*Modal Dialog to manage Kniwwelino*/
	manageKniwwelino: "Your Kniwwelino",
	manageKniwwelinoHeading: "Manage your Kniwwelino boards",
	manageKniwwelinoAdd: "add Kniwwelino first",
	manageKniwwelinoZero: "You are managing: 0 Kniwwelinos",
	manageKniwwelinoManaging: "You are managing:",
	manageKniwwelinoName: "Kniwwelino Name",
	manageKniwwelinoPlaceholder: "My Kniwwelino",
	manageKniwwelinoHelp: "Make sure to start it with button A pressed and copy the ID (lighting LEDs) to the Kniwwelino below. More help <a href='https://doku.kniwwelino.lu/en/preparation' target='_blank'>here</a>",
	manageKniwwelinoNoID: "No Kniwwelino with this ID found. Please make sure that the entered ID is correct and that your Kniwwelino is connected to a Wifi.",
	manageKniwwelinoNoUniqueID: "No unique ID for this Kniwwelino found.",
	manageKniwwelinoNameRequired: "Name required",
	manageKniwwelinoNameRequired_message: "Give it a name.",
	manageKniwwelinoAlreadyManaging: "You are already managing this Kniwwelino!",
  manageKniwwelinoLoadLatest: "restore last sketch",
  restore: "Restore",
  backup: "Backup",
  invalidDeviceListTitle: "Invalid Device List",
  invalidDeviceListBody: "The file you uploaded is not valid. Please select an other one.",
	/*ALPHA VERSION*/
	KNIWWELINO_ALPHA_TITLE: "Beta Version!",
	KNIWWELINO_ALPHA_MESSAGE: "Attention: This is an beta version and may contain bugs. If you find an issue, please try to reproduce it before you send us a bug report. The service may be unavailable from time to time.",
	KNIWWELINO_WARNING_TITLE: "Warning",
	KNIWWELINO_ADDKNIWWELINO_TITLE: "Add Kniwwelino first",
	KNIWWELINO_ADDKNIWWELINO_MESSAGE: "In order to use this programming tool you have to link your Kniwwelino with the platform one time. Please press the gear icon below or in the navigation bar to add your Kniwwelino.",
};
