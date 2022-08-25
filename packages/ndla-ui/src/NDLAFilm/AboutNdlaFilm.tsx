import React, { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import Modal, { ModalHeader, ModalBody, ModalCloseButton } from '@ndla/modal';
import { colors, spacing, fonts, mq, breakpoints } from '@ndla/core';
import Button from '@ndla/button';
import { OneColumn } from '..';
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

interface Props {
  aboutNDLAVideo: {
    title: string;
    description: string;
    visualElement: {
      alt?: string;
      url: string;
      type: string;
    };
  };
  moreAboutNdlaFilm: ReactNode;
}

const AboutNdlaFilm = ({ aboutNDLAVideo, moreAboutNdlaFilm }: Props) => {
  const { t } = useTranslation();
  return (
    <div className="o-wrapper">
      <StyledAside>
        <div>
          <VisualElement visualElement={aboutNDLAVideo.visualElement} />
        </div>
        <div>
          <h1>{aboutNDLAVideo.title}</h1>
          <p>{aboutNDLAVideo.description}</p>
          <Modal size="fullscreen" activateButton={<Button variant="link">{t('ndlaFilm.about.more')}</Button>}>
            {(onClose) => (
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

export default AboutNdlaFilm;
