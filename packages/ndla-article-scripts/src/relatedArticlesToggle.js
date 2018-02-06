import { forEachElement } from './domHelpers';

export const toggleRelatedArticles = () => {
  forEachElement('.c-related-articles', el => {
    const button = el.querySelector('.c-related-articles__button');
    if (button) {
      button.onclick = () => {
        const hiddenArticles = el.querySelector(
          '.c-related-articles__hidden-articles',
        );
        if (button.classList.contains('show-hidden')) {
          button.classList.remove('show-hidden');
          hiddenArticles.classList.remove('show');
          button.innerHTML = button.getAttribute('data-showmore');
        } else {
          button.classList.add('show-hidden');
          hiddenArticles.classList.add('show');
          button.innerHTML = button.getAttribute('data-showless');
        }
      };
    }
  });
};
