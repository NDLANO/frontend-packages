import React from 'react';
import Button from '../button/Button';

const toggleAside = (event) => {
  const button = event.target;
  const aside = button.previousSibling.parentNode;
  aside.classList.toggle('expanded');
};

const Aside = ({ ...rest }) => (
  <aside className="c-aside u-1/3@desktop">
    <div className="c-aside__content">{rest.children}</div>
    <Button className="c-aside__button" onClick={toggleAside}></Button>
  </aside>);

export default Aside;
