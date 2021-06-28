import { forEachElement } from './domHelpers';

export const addToggleSynstolketListener = () => {
  forEachElement('.c-figure', el => {
    const target = el;
    const toggleButton = target.querySelector('.c-figure__toggleSynstolket');
    if (toggleButton) {
      toggleButton.onclick = () => {
        const buttonHiddenText = toggleButton.querySelector('span.hidden');
        const buttonText = toggleButton.querySelector('span:not(.hidden)');
        const videos = target.querySelector('.brightcove-video');
        const hiddenVideo = videos.querySelector('.hidden');
        const shownVideo = videos.querySelector('iframe:not(.hidden)');
        hiddenVideo.classList.remove('hidden');
        shownVideo.classList.add('hidden');
        buttonHiddenText.classList.remove('hidden');
        buttonText.classList.add('hidden');
      };
    }
  });
};
