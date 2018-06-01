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
  onSearch,
  searchFieldPlaceholder,
  links,
  messages,
  heading,
}) => (
  <header {...classes()}>
    <div {...classes('inner-background')} />
    <div {...classes('wrapper')}>
      <OneColumn noPadding>
        <nav {...classes('navigation')}>
          <ul>
            {links.map(link => (
              <li key={link.url || link.href}>
                {link.url ? (
                  <SafeLink to={link.url}>{link.text}</SafeLink>
                ) : (
                  <a href={link.href}>{link.text}</a>
                )}
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
            label={heading}
            cssModifier="white"
            large
            color="currentColor"
          />
          <SearchField
            value={searchFieldValue}
            onChange={onSearchFieldChange}
            placeholder={searchFieldPlaceholder}
            messages={messages}
            onSearch={onSearch}
          />
        </div>
      </OneColumn>
    </div>
  </header>
);

FrontpageHeader.propTypes = {
  heading: PropTypes.string.isRequired,
  searchFieldValue: PropTypes.string.isRequired,
  onSearchFieldChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  searchFieldPlaceholder: PropTypes.string.isRequired,
  messages: PropTypes.shape({
    searchFieldTitle: PropTypes.string.isRequired,
    menuButton: PropTypes.string.isRequired,
  }).isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      href: PropTypes.string,
      text: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default FrontpageHeader;
