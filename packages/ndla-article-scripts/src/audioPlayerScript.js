/* eslint no-param-reassign: 0 */

import {
  forEachElement,
} from './domHelpers';

const formatTime = (currentTime) => {
    const currentMinute = parseInt(currentTime / 60, 10);
    const currentSeconds = (currentTime % 60).toFixed();

    return `${currentMinute}:${currentSeconds < 10 ? `0${currentSeconds}` : currentSeconds}`;
};


const setPlayed = (progressPlayed, timeDisplay, currentTime, duration) => {
  const percent = currentTime / duration;

  timeDisplay.innerHTML = `${formatTime(currentTime)} / ${formatTime(duration)}`;
  progressPlayed.style.width = `${percent * 100}%`;
  progressPlayed.setAttribute('data-value', percent);
}

const onTimeUpdate = (audioElement, progressPlayed, timeDisplay) => {
  const { currentTime, duration } = audioElement;
  setPlayed(progressPlayed, timeDisplay, currentTime, duration);
};

const onSeek = (percent, audioElement, progressPlayed, timeDisplay) => {
  const currentTime = percent * audioElement.duration;
  audioElement.currentTime = currentTime;
  setPlayed(progressPlayed, timeDisplay, currentTime, audioElement.duration);
};

export const initAudioPlayers = () => {
  forEachElement('.c-audio-player', el => {
    const wrapper = el;
    const audioElement = wrapper.querySelector('audio');
    const playButton = wrapper.querySelector('.c-audio-player__play');
    const progressBar = wrapper.querySelector('.c-audio-player__progress');
    const progressPlayed = progressBar.querySelector('.c-audio-player__progress-played');
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
      onTimeUpdate(audioElement, progressPlayed, timeDisplay);
    });

    audioElement.addEventListener('ended', () => {
      toggleStateClasses(false);
    })

    progressBar.addEventListener('click', (event) => {
      const percent = event.offsetX / progressBar.offsetWidth;
      onSeek(percent, audioElement, progressPlayed, timeDisplay);
    });

    progressBar.addEventListener('keydown', (event) => {
      const step = event.shiftKey ? 0.05 : 0.01;
      if(event.key === 'ArrowLeft' || event.key === 'Left') {
        let newValue = parseFloat(progressPlayed.getAttribute('data-value')) - step;
        if (newValue < 0) {
          newValue = 0;
        }

        onSeek(newValue, audioElement, progressPlayed, timeDisplay);
      } else if (event.key === 'ArrowRight' || event.key === 'Right') {
        let newValue = parseFloat(progressPlayed.getAttribute('data-value')) + step;
        if (newValue > 1) {
          newValue = 1;
        }
        onSeek(newValue, audioElement, progressPlayed, timeDisplay);
      }
    });

    playButton.onclick = togglePlay;

    audioElement.addEventListener('loadedmetadata', () => {
      setPlayed(progressPlayed, timeDisplay, audioElement.currentTime, audioElement.duration);
    });
  });
};
