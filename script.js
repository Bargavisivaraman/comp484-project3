console.log("Status Manager Started");

let flashingInterval = null;

// TASK 3: Primary implementation
const mainTitle = document.getElementById('main-title');
mainTitle.innerHTML = "DOM Project: Ready!";
// Alternative: mainTitle.textContent = "DOM Project: Ready!";

// TASK 4: Primary implementation
const toggleButton = document.getElementById('toggle-button');
toggleButton.setAttribute('data-action', 'status-toggle');
// Alternative: toggleButton.dataset.action = 'status-toggle';

// TASK 5, 6, 7: Primary implementation
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

// TASK 8: Primary implementation
function createTimestamp() {
    const timestampSpan = document.createElement('span');
    timestampSpan.innerHTML = new Date().toLocaleTimeString();
    const statusOutput = document.getElementById('status-output');
    statusOutput.appendChild(timestampSpan);
}
// Alternative: use textContent instead of innerHTML, or append() instead of appendChild()

// TASK 9: Primary implementation
function highlightListItems() {
    const listItems = document.querySelectorAll('li');
    
    for (let i = 0; i < listItems.length; i++) {
        listItems[i].style.color = "blue";
    }
}
// Alternative using forEach:
// listItems.forEach(function(item) { item.style.color = "blue"; });

highlightListItems();

// TASK 10: Primary implementation
function startFlashing() {
    const controlPanel = document.getElementById('control-panel');
    flashingInterval = setInterval(function() {
        controlPanel.classList.toggle('flashing');
    }, 500);
}

function stopFlashing() {
    clearInterval(flashingInterval);
    const controlPanel = document.getElementById('control-panel');
    controlPanel.classList.remove('flashing');
}

const timerButton = document.getElementById('timer-button');
timerButton.addEventListener('click', startFlashing);
timerButton.addEventListener('dblclick', stopFlashing);

// EXTRA FEATURE 1: Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

const darkModeBtn = document.getElementById('dark-mode-btn');
if (darkModeBtn) {
    darkModeBtn.addEventListener('click', toggleDarkMode);
}


// EXTRA FEATURE 2: Click Counter

let clickCount = 0;

const originalToggle = toggleStatus;
toggleStatus = function(e) {
    originalToggle(e);
    clickCount++;
    const counter = document.getElementById('click-counter');
    if (counter) counter.textContent = `Toggles: ${clickCount}`;
};