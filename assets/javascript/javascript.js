//Arrays
var songs = ["Welcome To The Jungle","Carry on Wayward Son", "Renegade", "Runaway", "Livin' On a Prayer", "Rock of Ages", "Sweet Child O' Mine", "Paradise City", "Back In Black", "Thunderstruck", "Enter Sandman", "The Unforgiven", "Eye of the Tiger", "Smells Like Teen Spirit", "All The Small Things", "How You Remind Me", "Numb", "The Reason", "T.N.T.", "Knights of Cydonia", "Paint It, Black"];
var artists = ["Guns N' Roses","Kansas", "Styx", "Bon Jovi", "Bon Jovi", "Def Leppard", "Guns N' Roses", "Guns N' Roses", "AC/DC", "AC/DC", "Metallica", "Metallica", "Survivor", "Nirvana", "Blink-182", "Nickleback", "Linkin Park", "Hoobastank", "AC/DC", "Muse", "The Rolling Stones"]
var hangman = ["assets\images\noose.png","assets\images\noose1.png","assets\images\noose2.png","assets\images\noose3.png","assets\images\noose4.png","assets\images\noose5.png","assets\images\noose6.png"]
//Stat Variables
var wins= 0;
var left= 9;
var losses= 0;
var lettersGuessed= [];
var random= [Math.floor(Math.random()*22)];
var song= songs[random].toLocaleLowerCase()
var artist= artists[random]

function start() {

    $("#hint").append(artist)
    $("#song").html(song)

    for (var i=0; i< song.length; i++){
        $("#dash").append("<ltr id=ltr"+i+"></ltr>");
        if (song[i] === " ") {
        $("#ltr"+i).html(" &nbsp; ");
        } 
        else {
        $("#ltr"+i).text(" _ ");
        };
    };
    $("#startBtn").remove();
};

function countDown()  {
    if (song.some(letter) === (" "+letter)) {

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

//for (var i=0; i< song.length; i++){
//    var str = song.indexOf(" ");
//    $("#dash").text(song[str])
//};

function print() {
    $("#guess").html(lettersGuessed);
    $("#left").text(left);
    $("#losses").text(losses);
}; 
    
$("#titleBar").append("<div id='startBtn' class='btn btn-success'>Click here to start</div>");
$("#startBtn").click(start);

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