var randomnumber1 = Math.floor(Math.random() * 6) + 1;
var randomimage1 = "images/dice" + randomnumber1 + ".png";
document.querySelector(".img1").setAttribute("src",randomimage1)

var randomnumber2 = Math.floor(Math.random() * 6) + 1;
var randomimage2 = "images/dice" + randomnumber2 + ".png";
document.querySelector(".img2").setAttribute("src",randomimage2)


// Result
if(randomnumber1 === randomnumber2){
    document.querySelector("h1").innerHTML = "Draw!"
} else if(randomnumber1 > randomnumber2){
    document.querySelector("h1").innerHTML = "Player 1🥇 wins!🏆"
}else if(randomnumber1 < randomnumber2){
    document.querySelector("h1").innerHTML = "Player 2🥈 wins!🏆"
}
