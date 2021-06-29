// Number 1

// random number

var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6
console.log(randomNumber1)

// Function to change the image

function change1(){
    let image1 = document.getElementById('imagen1');
    if (randomNumber1 === 1){
        image1.setAttribute('src', 'images/dice1.png');
    }
    else if (randomNumber1 === 2){
        image1.setAttribute('src', 'images/dice2.png');
    }
    else if (randomNumber1 === 3){
        image1.setAttribute('src', 'images/dice3.png');
    }
    else if (randomNumber1 === 4){
        image1.setAttribute('src', 'images/dice4.png');
    }
    else if (randomNumber1 === 5){
        image1.setAttribute('src', 'images/dice5.png');
    }
    else {
        image1.setAttribute('src', 'images/dice6.png');
    }

}

change1()


// Number 2

// random number

var randomNumber2 = Math.floor(Math.random() * 6) + 1; // 1-6
console.log(randomNumber2)

// Function to change the image

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
 
document.querySelectorAll("img")[1].setAttribute('src', randomImageSource2)

// Victory 

function victory(){
    change_title = document.querySelector("h1")
    if (randomNumber1 > randomNumber2){
        change_title.textContent = "🚩 Player 1 wins!";
    }
    else if (randomNumber1 < randomNumber2){
        change_title.textContent = "Player 2 wins! 🚩";
    }
    else{
        change_title.textContent = "🤝 Draw!";
    }

} 
victory()

