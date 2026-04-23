console.log("Status Manager Started");

let flashingInterval = null;

const mainTitle = document.getElementById('main-title');
mainTitle.innerHTML = "DOM Project: Ready!";

const toggleButton = document.getElementById('toggle-button');
toggleButton.setAttribute('data-action', 'status-toggle');

function toggleStatus(e) {
    e.preventDefault();
    
    const statusOutput = document.getElementById('status-output');
    statusOutput.classList.toggle('hidden');
    
    if (!statusOutput.classList.contains('hidden')) {
        mainTitle.style.backgroundColor = "yellow";
        createTimestamp();
    } else {
        mainTitle.style.backgroundColor = "";
    }
}

toggleButton.addEventListener('click', toggleStatus);

function createTimestamp() {
    const timestampSpan = document.createElement('span');
    timestampSpan.innerHTML = new Date().toLocaleTimeString();
    const statusOutput = document.getElementById('status-output');
    statusOutput.appendChild(timestampSpan);
}

function highlightListItems() {
    const listItems = document.querySelectorAll('li');
    
    for (let i = 0; i < listItems.length; i++) {
        listItems[i].style.color = "blue";
    }
}

highlightListItems();

function startFlashing() {
    const controlPanel = document.getElementById('control-panel');
    flashingInterval = setInterval(function() {
        controlPanel.classList.toggle('hidden');
    }, 500);
}

function stopFlashing() {
    clearInterval(flashingInterval);
    const controlPanel = document.getElementById('control-panel');
    controlPanel.classList.remove('hidden');
}

const timerButton = document.getElementById('timer-button');
timerButton.addEventListener('click', startFlashing);
timerButton.addEventListener('dblclick', stopFlashing);