/* eslint-env jest */

import {
  addFactBoxClickListener,
  removeFactBoxClickListener,
} from '../factBoxScripts';

const byId = id => document.getElementById(id);

const asideHtml = `
    <section>
      <p>Lorem ipsum</p>
      <aside id="aside-1">
        <button id="button-1" class="c-factbox__button"></button>
      </aside>
      <aside id="aside-2">
        <button id="button-2" class="c-factbox__button"></button>
      </aside>
    </section>
  `;

test('factBoxScripts/addFactBoxClickListener toggle expanded className on click', () => {
  document.body.innerHTML = asideHtml;

  addFactBoxClickListener();
  byId('button-1').click();

  expect(byId('aside-1').className).toBe('expanded');
  expect(byId('aside-2').className).toBe('');

  byId('button-2').click();

  expect(byId('aside-1').className).toBe('expanded');
  expect(byId('aside-2').className).toBe('expanded');

  byId('button-1').click();
  byId('button-2').click();

  expect(byId('aside-1').className).toBe('');
  expect(byId('aside-2').className).toBe('');
});

test('factBoxScripts/removeFactBoxClickListener removes aside click listner', () => {
  document.body.innerHTML = asideHtml;

  addFactBoxClickListener();
  removeFactBoxClickListener();
  byId('button-1').click();
  byId('button-2').click();

  expect(byId('aside-1').className).toBe('');
  expect(byId('aside-2').className).toBe('');
});
