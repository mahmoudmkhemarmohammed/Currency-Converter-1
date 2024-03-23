// Start Send Request From Api Link
fetch("https://api.currencyfreaks.com/v2.0/rates/latest?apikey=9ce71a097d134da990f841fdcfac189f").then(resulet => {
    let myData = resulet.json();
    return myData;
}).then(coins =>{
    // input Value
    let input = document.querySelector("input");
    // span Egypt
    let spanEgypt = document.querySelector("span.egypt");
    // span Sar
    let spanSar = document.querySelector("span.sar");
    input.onkeyup = () => {
        spanEgypt.innerHTML = Math.round(input.value * coins.rates["EGP"]);
        spanSar.innerHTML = Math.round(input.value * coins.rates["SAR"]);
        if(input.value !== ''){
            spanEgypt.style.background = 'green';
            spanSar.style.background = 'green';
        }
        else {
            spanEgypt.innerHTML = '';
            spanSar.innerHTML = '';
            spanEgypt.style.background = '#2e2bff';
            spanSar.style.background = '#2e2bff';
        }
    }
});