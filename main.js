const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      // The nodeIntegration option in Electron's webPreferences configuration allows you to enable or disable Node.js integration within the Electron renderer process.
      preload: path.join(__dirname, 'preload.js')
      // This script will run in the renderer process before any other scripts, allowing you to set up custom communication channels and selectively expose APIs.
    }
  });

  win.webContents.openDevTools();

  win.loadFile('index.html');


}

app.whenReady().then(createWindow);

ipcMain.on('inputValue', (event, value) => {
  // Process the value in the backend
  console.log("value",value);

  event.reply("Sdata", "Hey gpt");
});