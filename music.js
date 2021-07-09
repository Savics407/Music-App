// fetching IDs
const play = document.querySelector('#play')
const next = document.querySelector('#next')
const music = document.querySelector('audio')
const prev = document.querySelector('#prev')
const currentImg = document.querySelector("img")
const title = document.querySelector('#title')
const artist = document.querySelector('#artist')
const backgroundImage = document.querySelector('.music-container')
const download = document.querySelector('.download')

let isPlaying = false; // to check whether song is playing or it is pause
let currentSong = 0 // Current song index, initially points to the first song in the array

//Play Music function

const playMusic = () => {
    isPlaying = true        // Music is playing
    music.play();
    play.classList.replace('fa-play', 'fa-pause')
    currentImg.classList.add('anime')
}

//Pause Music function

const pauseMusic = () => {
    isPlaying = false        // Music is paused
    music.pause();
    play.classList.replace('fa-pause', 'fa-play')
    currentImg.classList.remove('anime')
}

//play button clicked
play.addEventListener('click', () => {
    isPlaying === true ? pauseMusic() : playMusic()     
    //if music is playing it will pause else is will start playing 
})


const playList = [
    {
        name: "Tim_Godfrey_-_Toya_ft_Israel_Houghton_",
        title: "TOYA",
        artist: "Tim Godfrey ft Isreal Houghton",
        image: "toya",
    },
    {
        name: "Kadosh",
        title: "Kadosh",
        artist: "PV Idemudia",
        image: "kadosh",
        background:"kadosh"
    },
    {
        name: "the bill",
        title: "The Bill is On you",
        artist: "GUC",
        image: "bill",
        background:"bill"
    },
    {
        name: "seeyouagain",
        title: "See you Again",
        artist: "Wiz Khalifa",
        image: "seeyouagainimg"
    },
    
    {
        name: "doingit",
        title: "Doing it All again",
        artist: "Todd Dulaney",
        image: "doingit"
    },
    {
        name: "Who You Were",
        title: "Who you were",
        artist: "Travis Greene",
        image: "whoyouwere"
    },
    {
        name: "recklesslove",
        title: "Reckless Love",
        artist: "Johny Drille",
        image: "doingit"
    },
    {
        name: "promises",
        title: "Promises",
        artist: "Maverick City Music",
        image: "promises"
    },
    {
        name: "OPENUP",
        title: "Open Up",
        artist: "Dunsin Oyekan",
        image: "openup"
    },
    {
        name: "JUSTICE ft GUC - GIVE",
        title: "GIVE",
        artist: "Jusctic ft GUC",
        image: "give"
    },
];

//Enter key pressed
document.addEventListener('keyup', (event) => {
    if (event.keyCode == 13) {
        isPlaying === true ? pauseMusic() : playMusic();                          
        //If Music is playing it will pause
            // otherwise it will start playing
    }
});

//SpaceBar key pressed
document.addEventListener('keyup', (event) => {
    if (event.keyCode == 32) {
        isPlaying === true ? pauseMusic() : playMusic();                          
        //If Music is playing it will pause
            // otherwise it will start playing
    }
});

//load current song
const loadSongs = (songs) => {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = `music/${songs.name}.mp3`; 
    currentImg.src = `images/${songs.image}.jpg`;
    backgroundImage.style.backgroundImage= `url(${currentImg.src})`
    download.href = music.src
    // downLoad(music.src)
    // download.setAttribute('download')
}
loadSongs(playList[currentSong]);   
//Calling loadSongs function when page is load

// Download Function
// const downLoad = (file) => {
//     let link = download;
//     link.setAttribute('download', file)
//     // link.click()
//     alert('downloading')
// }

// download.addEventListener('click', downLoad)
//Next btton clicked
next.addEventListener('click', () => {
    currentSong === playList.length-1 ?
        next.disabled = true :
        currentSong += 1;
        loadSongs(playList[currentSong]);
        isPlaying = false;
        playMusic();

});

//prev btton clicked
prev.addEventListener('click', () => {
    currentSong === 0 ?
        prev.disabled = true :
        currentSong -= 1;
        loadSongs(playList[currentSong]);
        isPlaying = false;
        playMusic();

});

//leftArrow key pressed
document.addEventListener('keyup', (event) => {
    if (event.keyCode == 37) {
        currentSong === 0 ?
        prev.disabled = true :
        currentSong -= 1;
        loadSongs(playList[currentSong]);
        isPlaying = false;
        playMusic();                          
        //If Music is playing it will pause
            // otherwise it will start playing
    }
});

//Right Arrow key pressed
document.addEventListener('keyup', (event) => {
    if (event.keyCode == 39) {
        currentSong === playList.length-1 ?
        next.disabled = true :
        currentSong += 1;
        loadSongs(playList[currentSong]);
        isPlaying = false;
        playMusic();
    }
});

// Progress bar js 
const audio = document.getElementById('music')
  const start = document.querySelector('.start')
  const end = document.querySelector('.end')
  const progressBar = document.querySelector('.progress-bar')
  const now = document.querySelector('.now')

  function conversion (value) {
    let minute = Math.floor(value / 60)
    minute = minute.toString().length === 1 ? ('0' + minute) : minute
    let second = Math.round(value % 60)
    second = second.toString().length === 1 ? ('0' + second) : second
    return `${minute}:${second}`
  }

  audio.onloadedmetadata = function () {
    end.innerHTML = conversion(audio.duration)
    start.innerHTML = conversion(audio.currentTime)
  }

  progressBar.addEventListener('click', function (event) {
    let coordStart = this.getBoundingClientRect().left
    let coordEnd = event.pageX
    let p = (coordEnd - coordStart) / this.offsetWidth
    now.style.width = p.toFixed(3) * 100 + '%'

    audio.currentTime = p * audio.duration
    audio.play()
  })

  setInterval(() => {
    start.innerHTML = conversion(audio.currentTime)
    now.style.width = audio.currentTime / audio.duration.toFixed(3) * 100 + '%'
  }, 1000)


  //copy text button 
  const copy = document.querySelector('.copy-link')
  copy.addEventListener("click", (evt) => {
    /* Get the text field */
    let copyText = document.querySelector(".pen-url");
  
    /* Select the text field */
    copyText.select();
    // copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
    /* Alert the copied text */
    // alert("Copied the link: " + copyText.value);

})
