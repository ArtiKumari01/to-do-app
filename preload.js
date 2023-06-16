// Using a preload script provides a more controlled and secure way to interact with Node.js functionality in the renderer process. It allows you to limit access to only the necessary APIs and helps prevent potential security vulnerabilities.

  const os = require('os');
  const path = require('path');
  // const Toastify = require('toastify-js');
  const { contextBridge, ipcRenderer } = require('electron');
  
  contextBridge.exposeInMainWorld('os', {
    homedir: () => os.homedir()
  });
  
  contextBridge.exposeInMainWorld('path', {
    join: (...args) => path.join(...args),
  });
  
    contextBridge.exposeInMainWorld('ipcRenderer', {
      send: (channel, data) => ipcRenderer.send(channel,data),
      on: (channel, func) => ipcRenderer.on(channel,(event, ...args) => func(...args)),
    });