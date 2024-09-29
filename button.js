const pressedFlags = document.querySelector('.flagbtn');
const numFlags = document.querySelector('.flagcount');
let i = 0; 

pressedFlags.addEventListener('click', function() {
    i++; 
    numFlags.textContent = i; 
});