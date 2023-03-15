const inputButton = document.getElementById('input-button')
inputButton.addEventListener('click',() => {
    const input = document.getElementById('mass').value;
    const number = document.querySelector('#number');
    let primeNumber;
    for (let i = 0; i <= input; i++){
        primeNumber = isPrime(i);
        console.log(primeNumber);
        if (primeNumber===true)
        {
            // check prime number
            number.innerHTML += `<div class="number-box">${i}</div>`;
            number.style.backgroundColor="gold";
        }
        else
        {
            if (i % 2 === 0){
                // check even number
                number.innerHTML += `<div class="number-box">${i}</div>`;
                number.style.backgroundColor="green";
            }
            else {
                number.innerHTML += `<div class="number-box">${i}</div>`;
                number.style.backgroundColor="red";
               // check odd number
            }
        }
        // number.innerHTML += `<div class="number-box">${i}</div>`;
        // number.style.backgroundColor="blue";
    }
})

function isPrime(n) {
    // Corner case
    if (n <= 1)
        return false;

    // Check from 2 to n-1
    for (let j = 2; j < n; j++)
        if (n % j === 0)
            return false;

    return true;
}

