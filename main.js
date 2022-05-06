//Get modal element
var modal = document.getElementById('simpleModal');
//Get open modal button
var modalBtn = document.getElementById('modalBtn');
//Get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];
//Get play buttons
var play1 = document.getElementById('playLight');

var play2 = document.getElementById('playBeach');

var play3 = document.getElementById('playSunday');

//Get favorite buttons

var fav1 = document.getElementById('favLight');

var fav2 = document.getElementById('favBeach');

var fav3 = document.getElementById('favSunday');

//set audio variables
var audio1 = new Audio('yourlight.mp3');
var audio2 = new Audio('beachbum.mp3');
var audio3 = new Audio('Sundayboredom.mp3');

//Listen for open click
modalBtn.addEventListener('click',openModal);

//Listen for close click
closeBtn.addEventListener('click',closeModal);

//Listen for outside click
window.addEventListener('click',clickOutside);

//Function to open modal
function openModal(){
    modal.style.display = 'block';
}

//Function to close modal
function closeModal(){
    modal.style.display = 'none';
}

//Function to close modal if outside click
function clickOutside(e){
    if(e.target == modal){
    modal.style.display = 'none';
    }
}

//Listen for play1 click

play1.addEventListener('click',playSong1);

//Listen for play2 click

play2.addEventListener('click',playSong2);

//Listen for play3 click

play3.addEventListener('click',playSong3);

//Function to play song 1
function playSong1(){
    if(audio1.duration > 0 && !audio1.paused)
    {
        audio1.pause();
        document.getElementById('playLight').innerHTML = 'Play';
        

    }

    else
    {

        audio1.play();
        document.getElementById('playLight').innerHTML = 'Pause';
    }
}

//Function to play song 2
function playSong2(){
    if(audio2.duration > 0 && !audio2.paused)
    {
        audio2.pause();
        document.getElementById('playBeach').innerHTML = 'Play';
        

    }

    else
    {

        audio2.play();
        document.getElementById('playBeach').innerHTML = 'Pause';
    }
    
}

//Function to play song 3
function playSong3(){
    if(audio3.duration > 0 && !audio3.paused)
    {
        audio3.pause();
        document.getElementById('playSunday').innerHTML = 'Play';
        

    }

    else
    {

        audio3.play();
        document.getElementById('playSunday').innerHTML = 'Pause';
    }
}

//Listen for fav1 click
fav1.addEventListener('click',favSong1);

//Listen for fav2 click
fav2.addEventListener('click',favSong2);

//Listen for fav3 click
fav3.addEventListener('click',favSong3);

//Function to add song 1 to favorites
function favSong1()
{
    document.getElementById('track1').innerHTML += 'Your Light';
}

//Function to add song 2 to favorites
function favSong2()
{
    document.getElementById('track2').innerHTML += 'Beachbum';
    
}

//Function to add song 3 to favorites
function favSong3()
{
    document.getElementById('track3').innerHTML += 'Sunday Boredom';
    
}

