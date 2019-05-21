
var abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    var wins= 0;
    var losses= 0;
    var left= 9;
    var guess= [];
    var random= (abc[Math.floor(Math.random()*27)]);

function countDown()  {
    if (guess[guess.length - 1] === (" " + random)) {

        wins = (wins+1);
        left = 9;
        guess = [];
        document.getElementById("wins").innerHTML = wins;
        document.getElementById("left").innerHTML = left;
        random = (abc[Math.floor(Math.random()*27)])
        alert("Nice guess!");
    
    }

    else {
        left--;
    
        alert("Try Again");

        if (left<1) {
            losses++;
            left = 9;
            guess = [];
        }
    }
};

function print() {
document.getElementById("guess").innerHTML = guess;

document.getElementById("left").innerHTML = left;

document.getElementById("losses").innerHTML = losses;
};

document.onkeyup = function(event) {
    var letter = event.key.toLocaleLowerCase();
    guess.push(" " + letter);
    countDown();
    print();
};