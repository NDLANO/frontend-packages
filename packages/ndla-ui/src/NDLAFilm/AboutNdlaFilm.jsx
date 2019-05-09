import React from 'react';
import PropTypes from 'prop-types';
import Modal, { ModalHeader, ModalBody, ModalCloseButton } from '@ndla/modal';
import { colors, spacing, fonts, mq, breakpoints } from '@ndla/core';
import Button from '@ndla/button';
import styled from '@emotion/styled';
import { injectT } from '@ndla/i18n';

const StyledAside = styled.aside`
  background: #184673;
  color: #fff;
  display: flex;
  padding: ${spacing.normal};
  > div {
    padding: ${spacing.normal};
    width: 50%;
    h1 {
      @include font-size(22px, 26px);
      font-weight: ${fonts.weight.bold};
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: #fff;
      margin: ${spacing.small} 0;
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
      &:first-child {
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
          <img
            src={aboutNDLAVideo.visualElement.url}
            alt={aboutNDLAVideo.visualElement.alt}
          />
        </div>
        <div>
          <h1>{aboutNDLAVideo.title}</h1>
          <p>{aboutNDLAVideo.description}</p>
          <Modal
            activateButton={<Button link>{t('ndlaFilm.about.more')}</Button>}>
            {onClose => (
              <>
                <ModalHeader>
                  <ModalCloseButton onClick={onClose} title="Lukk" />
                </ModalHeader>
                <ModalBody>{moreAboutNdlaFilm}</ModalBody>
              </>
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
    }),
  }),
};

export default injectT(AboutNdlaFilm);
