import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import FocusTrapReact from 'focus-trap-react';
import { Cross } from '@ndla/icons/action';
import Modal, { ModalHeader } from '@ndla/modal';
import Button from '@ndla/button';
import { uuid } from '@ndla/util';
import { injectT } from '@ndla/i18n';
import SafeLink from '../common/SafeLink';
import { OneColumn } from '../Layout';
import { SearchField } from '../Search';
import Logo from '../Logo';
import { ToggleSearchButton } from '../Search';
import { ContentTypeResultShape } from '../shapes';

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
  searchResult,
  onSearchInputFocus,
  onSearchDeactiveFocusTrap,
  inputHasFocus,
  infoText,
  allResultUrl,
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
          {!inputHasFocus && (
            <Logo
              to={logoTo}
              large
              color="currentColor"
              label={t('logo.altText')}
              cssModifier="white"
              locale={locale}
            />
          )}
          {!hideSearch && inputHasFocus && (
            <>
              <FocusTrapReact
                focusTrapOptions={{
                  onDeactivate: () => {
                    onSearchDeactiveFocusTrap();
                  },
                  clickOutsideDeactivates: true,
                  escapeDeactivates: true,
                }}>
                <div {...classes('active-search-wrapper')}>
                  <SearchField
                    modifiers={
                      inputHasFocus
                        ? ['no-left-margin', 'absolute-position-sleeve']
                        : ['absolute-position-sleeve']
                    }
                    ignoreContentTypeBadge
                    infoText={infoText}
                    value={searchFieldValue}
                    onChange={onSearchFieldChange}
                    placeholder={searchFieldPlaceholder}
                    messages={messages}
                    onSearch={onSearch}
                    searchResult={searchResult}
                    allResultUrl={allResultUrl}
                    resourceToLinkProps={() => {}}
                    singleColumn
                    hideSleeveHeader
                  />
                  <button
                    type="button"
                    onClick={onSearchDeactiveFocusTrap}
                    aria-label={t('welcomePage.closeSearch')}
                    {...classes('close-button')}>
                    <Cross />
                  </button>
                </div>
              </FocusTrapReact>
              <div {...classes('active-search-background')} />
            </>
          )}
          {!hideSearch && !inputHasFocus && (
            <>
              <SearchField
                value={searchFieldValue}
                onChange={onSearchFieldChange}
                onFocus={onSearchInputFocus}
                placeholder={searchFieldPlaceholder}
                messages={messages}
                onSearch={onSearch}
                allResultUrl={allResultUrl}
                resourceToLinkProps={() => {}}
              />
              <ToggleSearchButton
                hideOnWideScreen
                onClick={onSearchInputFocus}
                aria-label={t('welcomePage.heading.searchFieldPlaceholder')}>
                {t('welcomePage.heading.messages.searchFieldTitle')}
              </ToggleSearchButton>
            </>
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
  searchResult: PropTypes.arrayOf(ContentTypeResultShape),
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
  onSearchInputFocus: PropTypes.func,
  onSearchDeactiveFocusTrap: PropTypes.func,
  inputHasFocus: PropTypes.bool,
  infoText: PropTypes.node,
};

FrontpageHeader.defaultProps = {
  hideSearch: true,
  hideMenu: true,
  inputHasFocus: false,
};

export default injectT(FrontpageHeader);
