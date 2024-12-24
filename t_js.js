const modal = document.getElementById('doubt-modal');
const askDoubtBtn = document.getElementById('ask-doubt-btn');
const closeBtn = document.querySelector('.close-btn');


askDoubtBtn.onclick = function() {
    modal.style.display = 'flex';
}


closeBtn.onclick = function() {
    modal.style.display = 'none';
}


window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}


document.getElementById('doubt-form').onsubmit = function(event) {
    event.preventDefault();
    const doubt = document.getElementById('doubt-text').value;
    alert('Your doubt has been submitted: ' + doubt);
    modal.style.display = 'none';
}
