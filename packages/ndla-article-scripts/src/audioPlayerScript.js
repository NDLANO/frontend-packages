import {
  forEachElement,
} from './domHelpers';

const formatTime = (currentTime) => {
    const currentMinute = parseInt(currentTime / 60, 10);
    const currentSeconds = (currentTime % 60).toFixed();

    return `${currentMinute < 10 ? `0${currentMinute}` : currentMinute}:${currentSeconds < 10 ? `0${currentSeconds}` : currentSeconds}`;
};

const onTimeUpdate = (audioElement, progressBar, timeDisplay) => {
  const { currentTime, duration } = audioElement;
  timeDisplay.innerHTML = formatTime(currentTime);
  progressBar.value = (currentTime / duration);
};

const onSeek = (percent, audioElement, progressBar, timeDisplay) => {
  const currentTime = percent * audioElement.duration;

  audioElement.currentTime = currentTime;
  progressBar.value = percent;
  timeDisplay.innerHTML = formatTime(currentTime);
};

export const initAudioPlayers = () => {
  forEachElement('.c-audio-player', el => {
    const wrapper = el;
    const audioElement = wrapper.querySelector('audio');
    const playButton = wrapper.querySelector('.c-audio-player__play');
    const progressBar = wrapper.querySelector('.c-audio-player__progress');
    const timeDisplay = wrapper.querySelector('.c-audio-player__time');

    const toggleStateClasses = (playing) => {
      if (playing) {
        wrapper.classList.add('c-audio-player--playing');
      } else {
        wrapper.classList.remove('c-audio-player--playing');
      }
    };

    const togglePlay = () => {
      if (audioElement.paused) {
        audioElement.play();
        toggleStateClasses(true);
      } else {
        audioElement.pause();
        toggleStateClasses(false);
      }
    };

    audioElement.addEventListener('timeupdate', () => {
      onTimeUpdate(audioElement, progressBar, timeDisplay);
    });

    audioElement.addEventListener('ended', () => {
      toggleStateClasses(false);
    })

    progressBar.addEventListener('click', (event) => {
      const percent = event.offsetX / progressBar.offsetWidth;
      onSeek(percent, audioElement, progressBar, timeDisplay);
    });

    progressBar.addEventListener('keydown', (event) => {
      const step = event.shiftKey ? 0.05 : 0.01;
      if(event.key === 'ArrowLeft' || event.key === 'Left') {
        let newValue = parseFloat(progressBar.value) - step;
        if (newValue < 0) {
          newValue = 0;
        }

        onSeek(newValue, audioElement, progressBar, timeDisplay);
      } else if (event.key === 'ArrowRight' || event.key === 'Right') {
        let newValue = parseFloat(progressBar.value) + step;
        if (newValue > 1) {
          newValue = 1;
        }
        onSeek(newValue, audioElement, progressBar, timeDisplay);
      }
    });

    playButton.onclick = togglePlay;
  });
};
