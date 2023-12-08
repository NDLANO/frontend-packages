/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { ButtonV2 as Button } from '@ndla/button';
import { colors, spacing, mq, breakpoints } from '@ndla/core';
import { ModalHeader, ModalBody, ModalCloseButton, Modal, ModalTrigger, ModalContent } from '@ndla/modal';
import VisualElement from './VisualElement';

const StyledAside = styled.aside`
  background: #184673;
  color: #fff;
  display: flex;
  padding: ${spacing.normal} ${spacing.normal} ${spacing.medium};
  > div {
    padding: ${spacing.normal};
    width: 50%;
    h2 {
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: #fff;
      margin: 0 0 ${spacing.small} 0;
    }
  }
  button {
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
  const titleId = 'about-ndla-film-title';
  return (
    <div className="o-wrapper">
      <StyledAside aria-labelledby={titleId}>
        <div>
          <VisualElement visualElement={aboutNDLAVideo.visualElement} />
        </div>
        <div>
          <h2 id={titleId}>{aboutNDLAVideo.title}</h2>
          <p>{aboutNDLAVideo.description}</p>
          <Modal>
            <ModalTrigger>
              <Button variant="link">{t('ndlaFilm.about.more')}</Button>
            </ModalTrigger>
            <ModalContent size="full">
              <ModalHeader>
                <ModalCloseButton />
              </ModalHeader>
              <ModalBody>{moreAboutNdlaFilm}</ModalBody>
            </ModalContent>
          </Modal>
        </div>
      </StyledAside>
    </div>
  );
};

export default AboutNdlaFilm;
