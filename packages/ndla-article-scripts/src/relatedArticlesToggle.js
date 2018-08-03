import BEMHelper from 'react-bem-helper';
import { forEachElement } from './domHelpers';

const classes = new BEMHelper({
  name: 'related-articles',
  prefix: 'c-',
});

export const toggleRelatedArticles = () => {
  const hiddenItem = classes('item--hidden').className;
  const shownItem = classes('item--shown').className;

  forEachElement('.c-related-articles', el => {
    const button = el.querySelector(`.${classes('button').className}`);

    if (button && typeof button.onclick !== 'function') {
      button.onclick = e => {
        e.stopPropagation();
        if (button.innerHTML === button.getAttribute('data-showless')) {
          button.innerHTML = button.getAttribute('data-showmore');

          const hiddenArticles = el.querySelectorAll(`.${shownItem}`);
          for (let i = 0; i < hiddenArticles.length; i += 1) {
            // IE 11 dont support classList.replace('name', 'name');
            hiddenArticles[i].classList.add(hiddenItem);
            hiddenArticles[i].classList.remove(shownItem);
          }
        } else {
          button.innerHTML = button.getAttribute('data-showless');
          const hiddenArticles = el.querySelectorAll(`.${hiddenItem}`);
          for (let i = 0; i < hiddenArticles.length; i += 1) {
            // IE 11 dont support classList.replace('name', 'name');
            hiddenArticles[i].classList.add(shownItem);
            hiddenArticles[i].classList.remove(hiddenItem);
          }
        }
      };
    }
  });
};
