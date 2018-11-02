import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { Cross } from 'ndla-icons/action';
import { SearchField, OneColumn, Logo, SafeLink } from 'ndla-ui';
import Modal, { ModalHeader } from 'ndla-modal';
import Button from 'ndla-button';
import { uuid } from 'ndla-util';
import { injectT } from 'ndla-i18n';

const classes = BEMHelper('c-frontpage-header');
const classesMenu = new BEMHelper({
  name: 'topic-menu',
  prefix: 'c-',
});

const FrontpageHeader = ({
  searchFieldValue,
  onSearchFieldChange,
  onSearch,
  searchFieldPlaceholder,
  links,
  logoTo,
  messages,
  locale,
  menuSubject,
  hideSearch,
  hideMenu,
  t,
}) => (
  <header {...classes()}>
    <div {...classes('inner-background')} />
    <div {...classes('wrapper')}>
      <OneColumn wide noPadding>
        <nav {...classes('navigation')}>
          <ul>
            {links.map(link => (
              <li key={link.to}>
                <SafeLink to={link.to}>{link.text}</SafeLink>
              </li>
            ))}
          </ul>
        </nav>
      </OneColumn>
      <OneColumn wide noPadding>
        <div {...classes('content')}>
          {!hideMenu && (
            <Modal
              size="fullscreen"
              animation="subtle"
              backgroundColor="gray-dark"
              activateButton={
                <Button className="c-frontpage-header__menu-button">
                  Meny
                </Button>
              }>
              {closeMenu => (
                <nav>
                  <ModalHeader modifier={['white', 'menu']}>
                    <div {...classesMenu('masthead-left')}>
                      <button
                        type="button"
                        {...classesMenu('close-button')}
                        onClick={closeMenu}>
                        <Cross />
                        <span>Lukk</span>
                      </button>
                    </div>
                    <div {...classesMenu('masthead-right')}>
                      <Logo
                        to={logoTo}
                        label={t('logo.altText')}
                        cssModifier="always-show"
                        locale={locale}
                      />
                    </div>
                  </ModalHeader>
                  <div {...classesMenu('content', 'fill-page')}>
                    {menuSubject}
                    <div {...classes('main-menu-content')}>
                      <ul {...classesMenu('content-type-results')}>
                        {links.map(link => (
                          <li key={uuid()}>
                            <SafeLink to={link.to}>{link.text}</SafeLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </nav>
              )}
            </Modal>
          )}
          <Logo
            to={logoTo}
            large
            color="currentColor"
            label={t('logo.altText')}
            cssModifier="white"
            locale={locale}
          />
          {!hideSearch && (
            <SearchField
              value={searchFieldValue}
              onChange={onSearchFieldChange}
              placeholder={searchFieldPlaceholder}
              messages={messages}
              onSearch={onSearch}
            />
          )}
        </div>
      </OneColumn>
    </div>
  </header>
);

FrontpageHeader.propTypes = {
  hideSearch: PropTypes.bool, // TODO: Search is temporary hidden as default.
  hideMenu: PropTypes.bool, // TODO: Menu is temporary hidden as default.
  searchFieldValue: PropTypes.string.isRequired,
  onSearchFieldChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func,
  searchFieldPlaceholder: PropTypes.string.isRequired,
  logoTo: PropTypes.string,
  locale: PropTypes.string,
  messages: PropTypes.shape({
    searchFieldTitle: PropTypes.string.isRequired,
    menuButton: PropTypes.string.isRequired,
  }).isRequired,
  menuSubject: PropTypes.node.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ).isRequired,
  t: PropTypes.func.isRequired,
};

FrontpageHeader.defaultProps = {
  hideSearch: true,
  hideMenu: true,
};

export default injectT(FrontpageHeader);
