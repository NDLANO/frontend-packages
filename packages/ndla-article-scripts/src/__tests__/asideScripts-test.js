/* eslint-env jest */

import {
  addAsideClickListener,
  removeAsideClickListener,
} from '../asideScripts';

const byId = id => document.getElementById(id);

const asideHtml = `
    <section>
      <p>Lorem ipsum</p>
      <aside id="aside-1">
        <button id="button-1" class="c-aside__button"></button>
      </aside>
      <aside id="aside-2">
        <button id="button-2" class="c-aside__button"></button>
      </aside>
    </section>
  `;

test('articleScripts/addAsideClickListener toggle expanded className on click', () => {
  document.body.innerHTML = asideHtml;

  addAsideClickListener();
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

test('articleScripts/removeAsideClickListener removes aside click listner', () => {
  document.body.innerHTML = asideHtml;

  addAsideClickListener();
  removeAsideClickListener();
  byId('button-1').click();
  byId('button-2').click();

  expect(byId('aside-1').className).toBe('');
  expect(byId('aside-2').className).toBe('');
});
