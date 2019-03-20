const videoContainer = document.getElementById('videoContainer');
const video = document.getElementById('video');
const videoControls = document.getElementById('video-controls');

// Hide the default controls
video.controls = false;

// Display the user defined video controls
videoControls.style.display = 'block';

const playpause = document.getElementById('playpause');
playpause.addEventListener('click', e => {
  if (video.paused || video.ended) {
    video.play();
  } else { 
    video.pause();
  }
});

const play = document.getElementById('play');
play.addEventListener('click', e => {
  video.play();
  play.style.display = 'none';
  pause.style.display = 'inline';
});

const pause = document.getElementById('pause');
pause.addEventListener('click', e => {
  video.pause();
  play.style.display = 'inline';
  pause.style.display = 'none';
});

const stop = document.getElementById('stop');
stop.addEventListener('click', e => {
  video.pause();
  video.currentTime = 0;
  progress.value = 0;
});

const mute = document.getElementById('mute');
mute.addEventListener('click', e => {
  video.muted = !video.muted;
});

const volinc = document.getElementById('volinc');
volinc.addEventListener('click', e => {
  alterVolume('+');
});

const voldec = document.getElementById('voldec');
voldec.addEventListener('click', e => {
  alterVolume('-');
});

const alterVolume = dir => {
  const currentVolume = Math.floor(video.volume * 10) / 10;
  if (dir === '+') {
     if (currentVolume < 1) video.volume += 0.1;
  }
  else if (dir === '-') {
     if (currentVolume > 0) video.volume -= 0.1;
  }
}

const progress = document.getElementById('progress');
//const progressBar = document.getElementById('progress-bar');
video.addEventListener('loadedmetadata', () => {
  progress.setAttribute('max', video.duration);
});

video.addEventListener('timeupdate', () => {
  if (!progress.getAttribute('max')) {
    progress.setAttribute('max', video.duration);
  }
  progress.value = video.currentTime;
  //progressBar.style.width = Math.floor((video.currentTime / video.duration) * 100) + '%';
});

function seek(e) {
  const pos = (e.pageX  - this.offsetLeft) / this.offsetWidth;
  video.currentTime = pos * video.duration;
}
progress.addEventListener('click', this.seek.bind(this));

const iFullScreen = document.getElementById('fullscreen');
// Event listener for the full-screen button
iFullScreen.addEventListener('click', () => {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.mozRequestFullScreen) {
    video.mozRequestFullScreen(); // Firefox
  } else if (video.webkitRequestFullscreen) {
    console.log('chrome');
    video.webkitRequestFullscreen(); // Chrome and Safari
  }
});

const fullscreen = document.getElementById('fs');
/* const fullScreenEnabled = !!(document.fullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled || document.webkitSupportsFullscreen || document.webkitFullscreenEnabled || document.createElement('video').webkitRequestFullScreen);
if (!fullScreenEnabled) {
  fullscreen.style.display = 'none';
} */

fullscreen.addEventListener('click', (e) => {
  handleFullscreen();
});

const isFullScreen = () => {
  return !!(document.fullScreen || document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement || document.fullscreenElement);
}

const handleFullscreen = () => {
  if (isFullScreen()) {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
    //setFullscreenData(false);
  }
  else {
    if (videoContainer.requestFullscreen) {
      videoContainer.requestFullscreen();
    } else if (videoContainer.mozRequestFullScreen) {
      videoContainer.mozRequestFullScreen();
    } else if (videoContainer.webkitRequestFullScreen) {
      console.log('chrome');
      videoContainer.webkitRequestFullScreen();
    } else if (videoContainer.msRequestFullscreen) {
      videoContainer.msRequestFullscreen();
    }
    //setFullscreenData(true);
  }
}

/* const setFullscreenData = state => {
  videoContainer.setAttribute('data-fullscreen', !!state);
}

document.addEventListener('fullscreenchange', e => {
  setFullscreenData(!!(document.fullScreen || document.fullscreenElement));
});
document.addEventListener('webkitfullscreenchange', e => {
  setFullscreenData(!!document.webkitIsFullScreen);
});
document.addEventListener('mozfullscreenchange', e => {
  setFullscreenData(!!document.mozFullScreen);
});
document.addEventListener('msfullscreenchange', e => {
  setFullscreenData(!!document.msFullscreenElement);
}); */