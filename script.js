const currencyElementOne = document.getElementById('currency-one');
const currencyElementTwo = document.getElementById('currency-two');
const amountElementOne = document.getElementById('amount-one');
const amountElementTwo = document.getElementById('amount-two');

const apiKey = '769d93df613954608aabb6e2'

const swapBtn = document.getElementById('swap');
const rateElement = document.getElementById('rate');

// Fetch exchange rate and update the dom
function calculate() {
    const currency_one = currencyElementOne.value
    const currency_two = currencyElementTwo.value

    fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${currency_one}`)
    .then(res => res.json())
    .then(data =>{
        let currencyRate = data.conversion_rates[currency_two]
        rateElement.textContent  = `1 ${currency_one} = ${currencyRate}${currency_two}`

        amountElementTwo.value = (amountElementOne.value * currencyRate).toFixed(2);
  
    } )
}



// Event Listeners 

currencyElementOne.addEventListener('change', calculate)
currencyElementTwo.addEventListener('change', calculate)
amountElementOne.addEventListener('input', calculate)
amountElementTwo.addEventListener('input', calculate)


swapBtn.addEventListener('click' , () => {
    const temp = currencyElementOne.value;
    currencyElementOne.value = currencyElementTwo.value;
    currencyElementTwo.value = temp;
    calculate();
})
calculate();