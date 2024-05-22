const counterDisplay = document.getElementById('counter');
const increaseBtn = document.getElementById('increase');
const resetBtn = document.getElementById('reset');
const decreaseBtn = document.getElementById('decrease');

let count = 0;

function updateCounter() {
    counterDisplay.textContent = count;
    if (count > 0) {
        counterDisplay.style.color = 'green';
    } else if (count < 0) {
        counterDisplay.style.color = 'red';
    } else {
        counterDisplay.style.color = 'grey';
    }
}

increaseBtn.addEventListener('click', function() {
    count++;
    updateCounter();
});

resetBtn.addEventListener('click', function() {
    count = 0;
    updateCounter();
});

decreaseBtn.addEventListener('click', function() {
    count--;
    updateCounter();
});

















