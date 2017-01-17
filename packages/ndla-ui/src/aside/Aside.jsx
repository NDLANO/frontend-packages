import React from 'react';
import Button from '../button/Button';

const toggleAside = (event) => {
  const button = event.target;
  const aside = button.previousSibling;
  aside.classList.toggle('expanded');
  button.textContent = aside.classList.contains('expanded') ? 'Lukk' : 'Åpne';
};

const Aside = ({ ...rest }) => (
  <aside>
    <div>{rest.children}</div>
    <Button className="c-aside__button" onClick={toggleAside}>Åpne</Button>
  </aside>);

export default Aside;
