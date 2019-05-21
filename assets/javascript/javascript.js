
var songs = ["Welcome To The Jungle","Carry on Wayward Son", "Renegade", "Runaway", "Livin' On a Prayer", "Rock of Ages", "Sweet Child O' Mine", "Paradise City", "Back In Black", "Thunderstruck", "Enter Sandman", "The Unforgiven", "Eye of the Tiger", "Smells Like Teen Spirit", "All The Small Things", "How You Remind Me", "Numb", "The Reason", "T.N.T.", "Knights of Cydonia", "Pant It, Black"];
var artist = ["Guns N' Roses","Kansas", "Styx", "Bon Jovi", "Bon Jovi", "Def Leppard", "Guns N' Roses", "Guns N' Roses", "AC/DC", "AC/DC", "Metallica", "Metallica", "Survivor", "Nirvana", "Blink-182", "Nickleback", "Linkin Park", "Hoobastank", "AC/DC", "Muse", "The Rolling Stones"]

    var wins= 0;
    var losses= 0;
    var left= 9;
    var guess= [];
    var random= (songs[Math.floor(Math.random()*27)]);

function countDown()  {
    if (guess[guess.length - 1] === (" " + random)) {

        wins = (wins+1);
        left = 9;
        guess = [];
        document.getElementById("wins").innerHTML = wins;
        document.getElementById("left").innerHTML = left;
        random = (songs[Math.floor(Math.random()*27)])
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