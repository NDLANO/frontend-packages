import { forEachElement } from './domHelpers';

export const addToggleSynstolketListener = () => {
  forEachElement('.c-figure', el => {
    const target = el;
    const toggleButton = target.querySelector('.c-figure__toggleSynstolket');

    toggleButton.onclick = () => {
      const videos = target.querySelector('.brightcove-video');
      const hiddenVideo = videos.querySelector('.hidden');
      const shownVideo = videos.querySelector('iframe:not(.hidden)');
      hiddenVideo.classList.remove('hidden');
      shownVideo.classList.add('hidden');
    };
  });
};
