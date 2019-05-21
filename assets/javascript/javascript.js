
var songs = ["Welcome To The Jungle","Carry on Wayward Son", "Renegade", "Runaway", "Livin' On a Prayer", "Rock of Ages", "Sweet Child O' Mine", "Paradise City", "Back In Black", "Thunderstruck", "Enter Sandman", "The Unforgiven", "Eye of the Tiger", "Smells Like Teen Spirit", "All The Small Things", "How You Remind Me", "Numb", "The Reason", "T.N.T.", "Knights of Cydonia", "Pant It, Black"];
var artists = ["Guns N' Roses","Kansas", "Styx", "Bon Jovi", "Bon Jovi", "Def Leppard", "Guns N' Roses", "Guns N' Roses", "AC/DC", "AC/DC", "Metallica", "Metallica", "Survivor", "Nirvana", "Blink-182", "Nickleback", "Linkin Park", "Hoobastank", "AC/DC", "Muse", "The Rolling Stones"]

    var wins= 0;
    var losses= 0;
    var left= 9;
    var lettersGuessed= [];
    var random= [Math.floor(Math.random()*22)];
    var song= songs[random].toLocaleLowerCase()
    var artist= artists[random]

    for (var i = 0; i < song.length; i++) {
        guess = document.createElement('li');
        guess.setAttribute('id', 'dash'+i);
        if (song[i] === " ") {
          guess.innerHTML = " ";
        } 
        else {
          guess.innerHTML = "-";
        }
    };

function countDown()  {
    if (guess[guess.length - 1] === (" " + random)) {

        wins = (wins+1);
        left = 9;
        guess = [];
        $("#wins").text(wins);
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
            lettersGuessed = [];
        }
    }
};

$("#hint").append(artist)
$("#song").text(song)

for (var i=0; i< song.length; i++){
    $("#dash").append("<ltr id="+i+">-</ltr>");
};

//for (var i=0; i< song.length; i++){
//    var str = song.indexOf(" ");
//    $("#dash").text(song[str])
//};

function print() {
$("#guess").text(guess);

$("#left").text(left);

$("#losses").text(losses);
};

document.onkeyup = function(event) {
    var letter = event.key.toLocaleLowerCase();
    var ltrIdx = song.indexOf(letter);
    for (var i = 0; i < song.length; i++) {
        if (song[ltrIdx] === song[i]) {
            $("#dash"+i).text(song[ltrIdx])
        };
    };
    countDown();
    lettersGuessed.push(" " + letter);
    print();
};