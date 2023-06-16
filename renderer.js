// Retrieve the input element
const inputElement = document.getElementById('inp');

// Retrieve the send button element
const sendButton = document.getElementById('btn');

// Add a click event listener to the send button
sendButton.addEventListener('click', () => {
  // Get the input value when the button is clicked
  const value = inputElement.value;

  // Send the value to the backend using IPC
  // const { ipcRenderer } = require('electron');

  console.log("heyyyyy",value);
  sendValue(value);
  
});

function sendValue(params) {
    ipcRenderer.send('inputValue', params);
}

ipcRenderer.on('Sdata', (event, data) => {
    // const inputBox = document.getElementById('inputBox');
    // inputBox.value = data;
    addToList(data);
    console.log(data);
  });

function addToList(val){
    let newEle = document.createElement("ul");
        newEle.innerHTML = `${val} <i class="fa-sharp fa-solid fa-trash"></i>`;
        text.appendChild(newEle);
}