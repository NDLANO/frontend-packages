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

const onSeek = (event, audioElement, progressBar, timeDisplay) => {
  const percent = event.offsetX / progressBar.offsetWidth;
  const currentTime = percent * audioElement.duration;

  audioElement.currentTime = currentTime;
  progressBar.value = percent / 100;
  timeDisplay.innerHTML = formatTime(currentTime);
};

export const initAudioPlayers = () => {
  forEachElement('.c-audio-player', el => {
    const wrapper = el;
    const audioElement = wrapper.querySelector('audio');
    const playButton = wrapper.querySelector('.c-audio-player__play');
    const pauseButton = wrapper.querySelector('.c-audio-player__pause');
    const progressBar = wrapper.querySelector('.c-audio-player__progress');
    const timeDisplay = wrapper.querySelector('.c-audio-player__time');

    const toggleStateClasses = () => {
      wrapper.classList.toggle('c-audio-player--playing');
    };

    audioElement.addEventListener('timeupdate', () => {
      onTimeUpdate(audioElement, progressBar, timeDisplay);
    });

    audioElement.addEventListener('ended', () => {
      toggleStateClasses();
    })

    progressBar.addEventListener('click', (event) => {
      onSeek(event, audioElement, progressBar, timeDisplay);
    });


    playButton.onclick = () => {
      toggleStateClasses();
      audioElement.play();
    };

    pauseButton.onclick = () => {
      toggleStateClasses();
      audioElement.pause();
    }
  });
};
