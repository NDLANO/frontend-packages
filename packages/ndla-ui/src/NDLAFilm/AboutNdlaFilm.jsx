import React from 'react';
import PropTypes from 'prop-types';
import { OneColumn } from '@ndla/ui';
import Modal, { ModalHeader, ModalBody, ModalCloseButton } from '@ndla/modal';
import { colors, spacing, fonts, mq, breakpoints } from '@ndla/core';
import Button from '@ndla/button';
import styled from '@emotion/styled';
import { injectT } from '@ndla/i18n';
import VisualElement from './VisualElement';

const StyledAside = styled.aside`
  background: #184673;
  color: #fff;
  display: flex;
  padding: ${spacing.normal} ${spacing.normal} ${spacing.medium};
  > div {
    padding: ${spacing.normal};
    width: 50%;
    h1 {
      @include font-size(22px, 26px);
      font-weight: ${fonts.weight.bold};
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: #fff;
      margin: 0 0 ${spacing.small} 0;
    }
  }
  button {
    text-align: left;
    color: #fff;
    &:hover,
    &:focus {
      color: ${colors.brand.light};
    }
  }
  ${mq.range({ until: breakpoints.tablet })} {
    flex-direction: column;
    > div {
      width: auto;
      &:first-of-type {
        padding-bottom: 0;
      }
    }
  }
`;

const AboutNdlaFilm = ({ aboutNDLAVideo, moreAboutNdlaFilm, t }) => {
  return (
    <div className="o-wrapper">
      <StyledAside>
        <div>
          <VisualElement visualElement={aboutNDLAVideo.visualElement} />
        </div>
        <div>
          <h1>{aboutNDLAVideo.title}</h1>
          <p>{aboutNDLAVideo.description}</p>
          <Modal size="fullscreen" activateButton={<Button link>{t('ndlaFilm.about.more')}</Button>}>
            {onClose => (
              <OneColumn cssModifier="medium">
                <ModalHeader>
                  <ModalCloseButton onClick={onClose} title="Lukk" />
                </ModalHeader>
                <ModalBody>{moreAboutNdlaFilm}</ModalBody>
              </OneColumn>
            )}
          </Modal>
        </div>
      </StyledAside>
    </div>
  );
};

AboutNdlaFilm.propTypes = {
  aboutNDLAVideo: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    visualElement: PropTypes.shape({
      url: PropTypes.string,
      alt: PropTypes.string,
      type: PropTypes.string,
    }),
  }),
};

export default injectT(AboutNdlaFilm);
