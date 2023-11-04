//variaveis
const checkBox = document.querySelector('#flexSwitchCheckChecked');
const monthlyPrices = document.querySelectorAll('.monthly');
const annualPrices = document.querySelectorAll('.annual');


//function change, eu verifico qualquer mudança do meu checkbox
checkBox.addEventListener('change', function() {
    if(checkBox.checked) { //no modo anual, o mensal não aparece
        monthlyPrices.forEach(element => {
            element.style.display = 'none'
        });
        annualPrices.forEach(element => {
            element.style.display = 'block'
        });
    }else { 
        //o mensal aparece
        monthlyPrices.forEach(element => {
            element.style.display = 'block'
        })

        //o anual some, quando ele está desmarcado
        annualPrices.forEach(element => {
            element.style.display = 'none'
        })
    }
})

//o for each posso usar para mudar algo, percorrer algo quando tenho vários elementos com a mesma classe.