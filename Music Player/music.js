let audios=["Lamborghini.mp3","Khyaal-rakhya-kar.mp3","Mahi Ve.mp3","Oh-humsafar.mp3","Puchda-hi-nahin.mp3","Shona-Shona.mp3"];
let currentTime=document.querySelector('.time1');
let newTime=document.querySelector('.time2');


let audio=new Audio();
let currentSong=0;

window.onload=playSong;

function playSong(){
    audio.src=audios[currentSong];   //src shows the address of song
    audio.play();
}

function tooglePlayPause(){
    if(audio.paused){
        audio.play();
        let playBtn=document.querySelector('.play-pause');
        playBtn.innerHTML='<i class="fa fa-pause"></i>';
    }
    else{
        audio.pause();
        playBtn=document.querySelector('.play-pause');
        playBtn.innerHTML='<i class="fa fa-play"></i>';
    }
}

let timer;
audio.addEventListener("timeupdate",function(){
    timer=setInterval(range_slider ,1000);
    convertTime(Math.round(audio.currentTime));  //gets current time pos in sec
    if(audio.ended){
        nextAudio();
    }
    });


function convertTime(seconds){
    let min=Math.floor(seconds/60);
    let sec=seconds%60;
    min=min<10?"0"+min:min;
    sec=sec<10?"0"+sec:sec;
    currentTime.innerHTML=min+":"+sec;
    totalTime(Math.round(audio.duration));    //total time duration of song in sec
  }

function totalTime(seconds) {
  let min = Math.floor(seconds / 60);
  let sec = seconds % 60;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;
  newTime.innerHTML=min+":"+sec;
}

function nextAudio(){
    currentSong++;
    if(currentSong>5){
        currentSong=0;
    }
    playSong();
}

function prevAudio(){
    currentSong--;
    if(currentSong<0){
        currentSong=0;
    }
    playSong();
}

function decreaseVolume(){
    audio.volume-=0.25;
}

function increaseVolume(){
    audio.volume+=0.25;
}

let slider=document.querySelector('#duration_slider');
function change_duration(){
    audio.currentTime=audio.duration*((slider.value /100));
}

function range_slider(){
    let pos=0;
    pos=audio.currentTime*((100/audio.duration));
    slider.value=pos;
}

let volumeUp = document.querySelector(".volume-up");
volumeUp.addEventListener("click", function() {
  if (audio.volume === 1) {
    audio.volume = 0;
     document.querySelector('.volume-up').innerHTML ='<i class="fa fa-volume-off"></i>';
      }  
  else {
    audio.volume = 1;
    document.querySelector('.volume-up').innerHTML ='<i class="fa fa-volume-up"></i>';
  }
});

