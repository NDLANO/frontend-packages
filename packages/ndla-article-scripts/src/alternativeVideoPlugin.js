import { forEachElement } from './domHelpers';

export const addToggleAlternativeVideoListener = () => {
  forEachElement('.c-figure', (el) => {
    const target = el;
    const toggleButton = target.querySelector('.c-figure__toggleAlternative');
    if (toggleButton) {
      toggleButton.onclick = () => {
        const buttonHiddenText = toggleButton.querySelector('span.hidden');
        const buttonText = toggleButton.querySelector('span:not(.hidden)');
        const video = target.querySelector('iframe');
        if (video.className === 'original') {
          video.src = video.attributes['data-alternative-src'].value;
          video.className = 'alternative';
        } else {
          video.src = video.attributes['data-original-src'].value;
          video.className = 'original';
        }
        buttonHiddenText.classList.remove('hidden');
        buttonText.classList.add('hidden');
      };
    }
  });
};
