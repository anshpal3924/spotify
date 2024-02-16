
  const music = new Audio('audio/faded.mp3');


 const songs = [
    {  id: 1,
       songName:`on my way <br>
        <div class="subtitle">Alan Walker</div>`,
      poster: "image\faded.jpeg",
     
   },
   
{  id: 2,
    songName:`on my way <br>
     <div class="subtitle">Alan walker</div>`,
   poster: "image\faded.jpeg",
  
},
{  id: 3,
    songName:`on my way <br>
     <div class="subtitle">Alan Walker</div>`,
   poster: "image\faded.jpeg",
  
},
{  id: 4,
    songName:`on my way <br>
     <div class="subtitle">Alan Walker</div>`,
   poster: "image\faded.jpeg",
  
},
{  id: 5,
    songName:`on my way <br>
     <div class="subtitle">Alan Walker</div>`,
   poster: "image\faded.jpeg",
  
},
{  id: 6,
    songName:`on my way <br>
     <div class="subtitle">Alan Walker</div>`,
   poster: "image\faded.jpeg",
  
},
{  id: 7,
    songName:`on my way <br>
     <div class="subtitle">Alan Walker</div>`,
   poster: "image\faded.jpeg",
  
},
{  id: 8,
    songName:`on my way <br>
     <div class="subtitle">Alan Walker</div>`,
   poster: "image\faded.jpeg",
  
},
{  id: 9,
    songName:`on my way <br>
     <div class="subtitle">Alan Walker</div>`,
   poster: "image\faded.jpeg",
  
},
{  id: 10,
    songName:`on my way <br>
     <div class="subtitle">Alan Walker</div>`,
   poster: "image\faded.jpeg",
  
},
{  id: 11,
    songName:`on my way <br>
     <div class="subtitle">Alan Walker</div>`,
   poster: "image\faded.jpeg",
  
},
{  id: 12,
    songName:`on my way <br>
     <div class="subtitle">Alan Walker</div>`,
   poster: "image\faded.jpeg",
  
},
{  id: 13,
    songName:`on my way <br>
     <div class="subtitle">Alan Walker</div>`,
   poster: "image\faded.jpeg",
  
},
{  id: 14,
    songName:`on my way <br>
     <div class="subtitle">Alan Walker</div>`,
   poster: "image\faded.jpeg",
  
},
{  id: 15,
    songName:`on my way <br>
     <div class="subtitle">Alan Walker</div>`,
   poster: "image\faded.jpeg",
  
},
{  id: 16,
    songName:`on my way <br>
     <div class="subtitle">Alan Walker</div>`,
   poster: "image\faded.jpeg",
  
},
{  id: 17,
    songName:`on my way <br>
     <div class="subtitle">Alan Walker</div>`,
   poster: "image\faded.jpeg",
  
},
{  id: 18,
  songName:`on my way <br>
   <div class="subtitle">Alan Walker</div>`,
 poster: "image\faded.jpeg",

}
 ]
Array.from(document.getElementsByClassName('songitem')).forEach((e, i) =>{
e.getElementsByTagName('img')[0].src= songs[i].poster;
//  e.getElementsByTagName('h5').innerHTML = song[i].songName;
  })

let masterplay = document.getElementById('masterplay');
let wave = document.getElementById('wave');
masterplay.addEventListener('click', ()=>{
    if(music.paused || music.currentTime <=0){
        music.play();
        wave.classList.add('active1');
        masterplay.classList.add('bi-pause-fill');
        masterplay.classList.remove('bi-play-fill');
    }
    else{
        music.pause();
        wave.classList.remove('active1');
        masterplay.classList.remove('bi-pause-fill');
        masterplay.classList.add('bi-play-fill');
    }
})
let poster_bottom = document.getElementById('poster_bottom');
let index = 0;
Array.from(document.getElementsByClassName('playlistplay')).forEach((e) => {
e.addEventListener('click', (el) => {
index = el.target.id;
// console.log(index);
music.src =`audio/${index}.mp3`;
poster.src = `img/${index}.jpg`;
music.play();
masterplay.classList.remove('bi-play-fill');
masterplay.classList.add('bi-pause-fill');

})
})



let pop_songleft = document.getElementById('pop_songleft');
let pop_songright = document.getElementById('pop_songright');
let pop_song = document.getElementsByClassName('pop_song')[0];
pop_songright.addEventListener('click', () => {
    pop_song.scrollLeft += 330;
})

pop_songleft.addEventListener('click', () => {
    pop_song.scrollLeft -= 330;
})
let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let item= document.getElementsByClassName('item')[0];
pop_art_right.addEventListener('click', () => {
 item.scrollLeft += 330;
})

pop_art_left.addEventListener('click', () => {
    item.scrollLeft -= 330;
})





let currentstart = document.getElementById('currentstart');
let currentend = document.getElementById('currentend');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot');
music.addEventListener('timeupdate', () => {
  let music_curr = music.currentTime;
  let music_durr = music.duration;
let min1 = Math.floor(music_durr / 60);
let sec1 = Math.floor(music_durr % 60);

if(sec1 <10) {
  sec1 = `0${sec1}`;
}
currentend.innerText = `${min1}:${sec1}`

let min2 = Math.floor(music_curr / 60);
let sec2 = Math.floor(music_curr % 60);

if(sec2 <10) {
  sec2 = `0${sec2}`;
}
currentstart.innerText = `${min2}:${sec2}`

let progressbar = parseInt((music_curr / music_durr) * 100);
seek.value = progressbar;

let seekbar = seek.value;
bar2.style.width = `${seekbar}%`;
dot.style.left = `${seekbar}%`;


});
seek.addEventListener('change', () => {
  music.currentTime = seek.value * music.duration / 100;
});

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar');
let dot1 = document.getElementsByClassName('dot');
vol.addEventListener('change', () => {
  if(vol.value==0){
    vol_icon.classList.add('bi-volume-off-fill')
  vol_icon.classList.remove('bi-volume-down-fill');
  vol_icon.classList.remove('bi-volume-up-fill')
  }
  if(vol.value > 0){
    vol_icon.classList.remove('bi-volume-off-fill')
  vol_icon.classList.add('bi-volume-down-fill');
  vol_icon.classList.remove('bi-volume-up-fill')
  }
  if(vol.value > 50){
    vol_icon.classList.remove('bi-volume-off-fill')
  vol_icon.classList.remove('bi-volume-down-fill');
  vol_icon.classList.add('bi-volume-up-fill')
  }
  let vol_a = vol.value;
  vol_bar.style.width = `${vol_a}%`;
  vol_dot.style.left = `${vol_a}%`;
  music.volume = vol_a /100;
});

let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', ()=> {
  index -= 1;
});
next.addEventListener('click', ()=> {
  index += 1;
})

