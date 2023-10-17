/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { spacing } from '@ndla/core';
import {
  Masthead,
  LanguageSelector,
  Logo,
  SearchField,
  SearchResultSleeve,
  MastheadSearchModal,
  SearchFieldForm,
} from '@ndla/ui';
import { Menu } from '@ndla/icons/common';
import { ButtonV2 } from '@ndla/button';
import SafeLink from '@ndla/safelink';
import { contentTypeResults } from '../../dummydata';

const ButtonWrapper = styled.div`
  display: flex;
  gap: ${spacing.xsmall};
  align-items: center;
  justify-content: flex-end;
  flex: 1;
`;

const DrawerWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex: 1;
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

class MastheadWithTopicMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.inputRef = createRef();
    this.closeAllModals = [null, null];
  }

  renderSearchField() {
    const filters = [];
    if (!this.props.hideMenuButton) {
      filters.push({
        value: 'Value',
        title: this.props.ndlaFilm ? 'NDLA film' : 'Medieuttrykk og mediesamfunnet',
      });
    }
    return (
      <SearchFieldForm onSubmit={(e) => e.preventDefault()}>
        <SearchField
          inputRef={this.inputRef}
          placeholder={this.props.t('searchPage.searchFieldPlaceholder')}
          value={this.state.value}
          onChange={(value) => {
            this.setState({
              value,
            });
          }}
          filters={filters}
          onFilterRemove={() => {}}
          messages={{
            searchFieldTitle: 'Søk',
          }}
          onNavigate={() => {
            try {
              this.closeAllModals[1]();
            } catch (e) {
              console.log('no search modal to close'); // eslint-disable-line no-console
            }
            try {
              this.closeAllModals[0]();
            } catch (e) {
              console.log('no menu modal to close'); // eslint-disable-line no-console
            }
          }}
        />
        {this.state.value.length > 2 && (
          <SearchResultSleeve
            result={contentTypeResults}
            searchString={this.state.value}
            allResultUrl={'#'}
            resourceToLinkProps={(resource) => ({ to: resource.path })}
          />
        )}
      </SearchFieldForm>
    );
  }

  renderSearchButtonView = (ndlaFilm) => {
    return (
      <MastheadSearchModal
        ndlaFilm={ndlaFilm}
        onClose={() => {
          this.setState({ value: '' });
          this.closeAllModals[1] = null;
        }}
      >
        {() => this.renderSearchField()}
      </MastheadSearchModal>
    );
  };

  render() {
    const { skipToMainContentId, ndlaFilm, beta, betaInfoContent, t, i18n, messages } = this.props;

    return (
      <Masthead
        fixed
        skipToMainContentId={skipToMainContentId}
        ndlaFilm={ndlaFilm}
        infoContent={beta && betaInfoContent}
        messages={messages}
      >
        <DrawerWrapper>
          <ButtonV2 inverted={ndlaFilm} variant="outline" shape="pill">
            <Menu /> {t('masthead.menu.title')}
          </ButtonV2>
        </DrawerWrapper>
        <LogoWrapper>
          <Logo
            to="?selectedKind=Emnesider&selectedStory=1.%20Fagoversikt&full=0&addons=0&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel"
            label="Nasjonal digital læringsarena"
            isBeta={beta}
            cssModifier={ndlaFilm && 'white'}
          />
        </LogoWrapper>
        <ButtonWrapper>
          {this.renderSearchButtonView(ndlaFilm)}
          <LanguageSelector
            inverted={ndlaFilm}
            locales={i18n.options.supportedLngs}
            onSelect={(lang) => i18n.changeLanguage(lang)}
          />
        </ButtonWrapper>
      </Masthead>
    );
  }
}

MastheadWithTopicMenu.propTypes = {
  searchFieldExpanded: PropTypes.bool,
  beta: PropTypes.bool,
  betaInfoContent: PropTypes.node,
  t: PropTypes.func.isRequired,
  ndlaFilm: PropTypes.bool,
  skipToMainContentId: PropTypes.string,
  isAuthed: PropTypes.bool,
  messages: PropTypes.arrayOf(PropTypes.string),
};

MastheadWithTopicMenu.defaultProps = {
  searchFieldExpanded: false,
  betaInfoContent: (
    <>
      <span>Du tester nå de nye nettsidene.</span> <SafeLink to="#">Les mer om nye NDLA.no</SafeLink>
    </>
  ),
  menuProps: {},
};

export default withTranslation()(MastheadWithTopicMenu);
