'use strict';


//pop-up window
const openButton = document.querySelector('.click-btn');
const modalWindow = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeButton = document.querySelector('.close-modal');
// openButton.textContent="varsha";
console.log(openButton);

//main function
openButton.addEventListener('click',function(){
    modalWindow.classList.remove('hidden');
    overlay.classList.remove('hidden');
});

closeButton.addEventListener('click', function(){
    modalWindow.classList.add('hidden');
    overlay.classList.add('hidden');
})


//'esc' key press
document.addEventListener('keydown', function (e) {
   
    if(e.key === 'Escape'){

        if(modalWindow.classList.contains('hidden') != true){
            modalWindow.classList.add('hidden');
            overlay.classList.add('hidden');
        }
    }
    
});






let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;

const show = function(data){
      document.querySelector('.guessing').textContent = data;
}


// Check button
document.querySelector('.btn-check').addEventListener('click', function(){

    const guess = Number(document.querySelector('.number-enter').value);
    
    if(guess === 0)
    {
       show("🥴No Number!");
    }
    else if(guess === secretNumber)
    {
        show("🎊Correct Number!");
        document.querySelector('body').style.background = "green";
        document.querySelector('.number-enter').style.background = "green";
        document.querySelector('.output').style.width = "150px";
        document.querySelector('.output').textContent = secretNumber;

        let highScore = Number(document.querySelector('.total-score').textContent);

        if(score > highScore)
         document.querySelector('.total-score').textContent = score;

    }
    else if(guess < secretNumber)
    {
        if(score > 1){
            score--;
            document.querySelector('.current').textContent = score;
            show("📈Low Number!");
        }
        else{
            show("😞You Lost The Game");
        }
        
    }else if(guess > secretNumber)
    {
        if(score > 1) {
            score--;
            document.querySelector('.current').textContent = score;
            show("📉High Number!");
        }
        else{
            show("😞You Lost The Game");
        }
    }
});

// Again button

document.querySelector('.btn-again').addEventListener('click', function(){

    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    console.log(secretNumber);

    show("Start guessing....");
    document.querySelector('.current').textContent = score;
    document.querySelector('.output').textContent = "?";
    document.querySelector('.number-enter').value = '';

    document.querySelector('body').style.background = "black";
    document.querySelector('.number-enter').style.background = "black";
    document.querySelector('.output').style.width = "50px";
});
