$(document).ready(function () {
//Arrays
var songs = ["Welcome To The Jungle","Carry on Wayward Son", "Renegade", "Runaway", "Livin On a Prayer", "Rock of Ages", "Sweet Child O Mine", "Paradise City", "Back In Black", "Thunderstruck", "Enter Sandman", "The Unforgiven", "Eye of the Tiger", "Smells Like Teen Spirit", "All The Small Things", "How You Remind Me", "Numb", "The Reason", "TNT", "Knights of Cydonia", "Paint It Black"];
var artists = ["Guns N' Roses","Kansas", "Styx", "Bon Jovi", "Bon Jovi", "Def Leppard", "Guns N' Roses", "Guns N' Roses", "AC/DC", "AC/DC", "Metallica", "Metallica", "Survivor", "Nirvana", "Blink-182", "Nickleback", "Linkin Park", "Hoobastank", "AC/DC", "Muse", "The Rolling Stones"]
var hangman = ["assets\images\noose.png","assets\images\noose1.png","assets\images\noose2.png","assets\images\noose3.png","assets\images\noose4.png","assets\images\noose5.png","assets\images\noose6.png"]
//Stat Variables
var wins= 0;
var left= 9;
var losses= 0;
var correct= false;
var lettersGuessed= [];
var random= [Math.floor(Math.random()*22)];
var song= songs[random].toLocaleUpperCase(); 
var artist= artists[random];
var letter = "";

function start() {
    
    for (var i=0; i< song.length; i++){
        $("#dash").append("<span id=ltr"+i+"></span>");
        if (song.charAt(i) === " ") {
            $("#ltr"+i).text(" ");
        } 
        else {
            $("#ltr"+i).text(" _ ");
        };
    };
    //for (var i = 0; i < song.length; i++) {
    //    song = song.replace(" ", "&nbsp");
    //    console.log(song)
    //};

    $("#hint").append(artist)
    $("#startBtn").remove();
};

function check() {
    for (var i = 0; i < song.length; i++) {
        if (song.charAt(i) === letter) {
            $("#ltr"+[i]).text(song.charAt(i));
            correct = true;
        } 
    };
    if (correct === true) {
        correct = false
    }
    else {
        countDown();
    };
};

function countDown()  {
    
    left--;
    alert("Try Again");
    if (left<1) {
        losses++;
        left = 9;
        lettersGuessed = [];
    }
};

function print() {
    $("#guess").html(lettersGuessed);
    $("#left").text(left);
    $("#losses").text(losses);
}; 
    
$("#titleBar").append("<div id='startBtn' class='btn btn-success'>Click here to start</div>");
$("#startBtn").click(start);

document.onkeyup = function(event) {
    letter = event.key.toLocaleUpperCase();
    check()
    lettersGuessed.push(" " + letter);
    print();
    if (document.getElementById("dash").textContent === song) {
        $("#dash").append('<div class="alert-success rounded p-3 text-center text-display-3">YOU WIN!</div>')
    }
};



//wins = (wins+1);

});