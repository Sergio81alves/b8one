var cores = ["#595961","#FFD1C2", "#C8C8CF"];

var visualizar = document.getElementById('visualizar');
var escolhas = document.getElementById('escolhas');
cores.forEach(function(cor) {
    var button = document.createElement('button');
    button.value = cor;
    button.type = 'button';
    button.style.backgroundColor = cor;
    button.addEventListener('click', handler(button));
    escolhas.appendChild(button);
});

function handler(el) {
    return function() {
        visualizar.style.backgroundColor = el.value;
    }
}

// aumentar o produto
const minusButton = document.querySelector('.minus-button');
const plusButton = document.querySelector(".plus-button");
const counterVelueSpan = document.querySelector(".counter-velue")

function minusButtonHandler(){
    let counterCurrentVelue = +counterVelueSpan.innerHTML
    counterCurrentVelue--
    if(counterCurrentVelue >= 0){
        counterVelueSpan.innerHTML = counterCurrentVelue
    }
}
function plusButtonHandler(){
    let counterCurrentVelue = +counterVelueSpan.innerHTML
    counterCurrentVelue++
    counterVelueSpan.innerHTML = counterCurrentVelue

}

minusButton.addEventListener('click', minusButtonHandler)
plusButton.addEventListener('click', plusButtonHandler)