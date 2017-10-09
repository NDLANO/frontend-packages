import React from 'react';
import Button from '../button/Button';

const toggleAside = event => {
  const button = event.target;
  const aside = button.previousSibling.parentNode;
  aside.classList.toggle('expanded');
};

const Aside = ({ ...rest }) => (
  <aside className={rest.float ? 'c-aside c-aside--float expanded' : 'c-aside'}>
    <div className="c-aside__content">{rest.children}</div>
    {!rest.float ? (
      <Button className="c-aside__button" onClick={toggleAside} />
    ) : null}
  </aside>
);

export default Aside;
