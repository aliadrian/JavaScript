let btn = document.getElementById('btn');
let res = document.getElementById('div2');

function changeContent() {
    res.innerText = 'Uppdaterad via en clickEvent';
}

// Adds an event on the button
btn.addEventListener('click', function() {
    div.style.backgroundColor = '#000000';
})