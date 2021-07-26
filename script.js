'use strict';

const checkBtn = document.querySelector('.check')
const againBtn = document.querySelector('.again')
const guessNumber = document.querySelector('.guess')
const message = document.querySelector('.message')
const score = document.querySelector('.score')
const number = document.querySelector('.number')
let highScore = document.querySelector('.highscore')
let randomNumber

const randomNumberGen = () => {
    randomNumber = Math.floor((Math.random() * 20 + 1)) 
    console.log(randomNumber);
} 
    

const reset = () => {
    randomNumberGen()
    guessNumber.value = ''
    number.textContent = "?"
    document.body.style.backgroundColor = "#222";
    message.textContent = 'Start guessing...'
    score.textContent = 20
}

randomNumberGen()


checkBtn.addEventListener('click' , function(){
    if(!guessNumber.value){
        message.textContent = '⛔ No Number'
    }else if(randomNumber === Number(guessNumber.value)){
        document.body.style.backgroundColor = "#60b347";
        number.textContent = randomNumber
        message.textContent = '🎉 Correct Number'
        score.textContent > highScore.textContent ? highScore.textContent = score.textContent : highScore.textContent 
    }
    else if(Number(guessNumber.value) < randomNumber ){
        message.textContent = '👇🏻 Too Low'
        score.textContent -=  1

    }
    else if(Number(guessNumber.value) > randomNumber ){
        message.textContent = '☝🏻 Too HIGH'
        score.textContent -=  1

    }
})

againBtn.addEventListener('click' , function(){
    reset()
})