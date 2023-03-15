const button = document.querySelector('button');
button.addEventListener('mouseenter', e => {
    console.log('hello',e);
    console.log('hello',e.target);
    console.log('hello',e.target.textContent);
})

const elo = document.