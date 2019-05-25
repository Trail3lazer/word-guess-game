$(document).ready(function () {
//Arrays
var songs = ["Welcome To The Jungle","Carry on Wayward Son", "Renegade", "Runaway", "Livin On a Prayer", "Rock of Ages", "Sweet Child O Mine", "Paradise City", "Back In Black", "Thunderstruck", "Enter Sandman", "The Unforgiven", "Eye of the Tiger", "Smells Like Teen Spirit", "All The Small Things", "How You Remind Me", "Numb", "The Reason", "TNT", "Knights of Cydonia", "Paint It Black"];
var artists = ["Guns N' Roses","Kansas", "Styx", "Bon Jovi", "Bon Jovi", "Def Leppard", "Guns N' Roses", "Guns N' Roses", "AC/DC", "AC/DC", "Metallica", "Metallica", "Survivor", "Nirvana", "Blink-182", "Nickleback", "Linkin Park", "Hoobastank", "AC/DC", "Muse", "The Rolling Stones"]
var hangman = ["assets/images/noose.png","assets/images/noose1.png","assets/images/noose2.png","assets/images/noose3.png","assets/images/noose4.png","assets/images/noose5.png","assets/images/noose6.png"]
//Global Variables
var wins= 0;
var left= 7;
var losses= 0;
var correct= false;
var lettersGuessed= [];
var random= [Math.floor(Math.random()*22)];
var song= songs[random].toLocaleUpperCase(); 
var artist= artists[random];
var letter = "";
var a = 1

//Functions
function start() {
    $("#startBtn").remove();
    dash();
    print();
    keyup();
};

function dash() {
    $("#dash").empty();
    for (var i=0; i< song.length; i++){
        $("#dash").append("<span id=ltr"+i+"></span>");
        if (song.charAt(i) === " ") {
            $("#ltr"+i).text(" ");
        } 
        else {
            $("#ltr"+i).html(" _ ");
        };
    };
}

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
    wordCheck();
};

function wordCheck() {
    if (document.getElementById("dash").textContent === song) {
        $("#dash").append('<div class="alert-success rounded p-3 text-center text-display-3">Press any key to play again.</div>')
        document.onkeyup = reset
    };
};

function countDown() {
    left--;
    nooseSwitcher()
    if (left<1) {
        reset();
    }
};

function print() {
    $("#hint").html(artist);
    $("#wins").html(wins)
    $("#losses").html(losses);
    $("#guess").html(lettersGuessed);
    $("#left").html(left);
}; 

function nooseSwitcher() {
    $("#noose").attr("src", hangman[a])
    if (a<6) {
        a++
    } else {
        a=0
    }
};

function reset() {
    left = 7;
    correct = false;
    lettersGuessed = [];
    random = [Math.floor(Math.random()*22)];
    song = songs[random].toLocaleUpperCase(); 
    artist = artists[random];
    letter = "";
    print();
    dash();
    keyup();
};

function keyup() {
document.onkeyup = function(event) {
    letter = event.key.toLocaleUpperCase();
    check()
    lettersGuessed.push(" " + letter);
    print();
    
};
};

//Initiation via User
$("#titleBar").append("<div id='startBtn' class='btn btn-success'>Click here to start</div>");
$("#startBtn").click(start);

});

//-----HW Hack-a-thon Code------//
//function wordCheck() {
//    for (let i = 0; i < song.length; i++) {
//        if(!lettersGuessed.includes(song.charAt[i])){
//            if (song.charAt[i] !== " ") {
//                return true;
//            }
//        }
//    }
//    return false;
//};
