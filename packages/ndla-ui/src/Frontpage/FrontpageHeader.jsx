import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';

import { SearchField } from '../Search';
import { OneColumn } from '../Layout';
import Logo from '../Logo';
import SafeLink from '../common/SafeLink';

const classes = BEMHelper('c-frontpage-header');

const FrontpageHeader = ({
  searchFieldValue,
  onSearchFieldChange,
  searchFieldPlaceholder,
  links,
  messages,
}) => (
  <header {...classes()}>
    <div {...classes('inner-background')} />
    <div {...classes('wrapper')}>
      <OneColumn noPadding>
        <nav {...classes('navigation')}>
          <ul>
            {links.map(link => (
              <li key={link.url}>
                <SafeLink to={link.url}>{link.text}</SafeLink>
              </li>
            ))}
          </ul>
        </nav>
      </OneColumn>
      <OneColumn>
        <div {...classes('content')}>
          <button {...classes('menu-button')}>{messages.menuButton}</button>
          <Logo
            to="#"
            altText="Nasjonal digital læringsarena"
            cssModifier="white"
            large
            color="currentColor"
          />
          <SearchField
            value={searchFieldValue}
            onChange={onSearchFieldChange}
            placeholder={searchFieldPlaceholder}
            messages={messages}
          />
        </div>
      </OneColumn>
    </div>
  </header>
);

FrontpageHeader.propTypes = {
  searchFieldValue: PropTypes.string.isRequired,
  onSearchFieldChange: PropTypes.func.isRequired,
  searchFieldPlaceholder: PropTypes.string.isRequired,
  messages: PropTypes.shape({
    searchFieldTitle: PropTypes.string.isRequired,
    menuButton: PropTypes.string.isRequired,
  }).isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default FrontpageHeader;
