(()=>{
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
})()