/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import styled from "@emotion/styled";
import { breakpoints, colors, fonts, mq, stackOrder } from "@ndla/core";
import { Explanation, NotionFlip } from "@ndla/icons/common";
import { ModalHeader, ModalCloseButton, ModalBody, Modal, ModalTitle, ModalTrigger, ModalContent } from "@ndla/modal";

const ArticleNotionsContainer = styled.div`
  margin-bottom: 26px;

  ${mq.range({ from: breakpoints.tablet })} {
    margin-bottom: 0;
  }
`;

const NotionsTrigger = styled.div`
  padding: 0 16px;
  display: inline-flex;
  align-items: center;
  background-color: ${colors.brand.greyLighter};
  border-radius: 4px;
  cursor: pointer;

  ${mq.range({ from: breakpoints.tablet })} {
    position: fixed;
    border: none;
    padding: 0;
    height: auto;
    top: 12rem;
    right: 18px;
    background-color: transparent;
    z-index: ${stackOrder.trigger};
  }

  svg {
    &:first-of-type {
      display: none;
      width: 40px;
      height: 54px;
      cursor: pointer;
      color: #def1ed;

      ${mq.range({ from: breakpoints.tablet })} {
        display: block;
      }
    }
    &:nth-of-type(2) {
      display: block;
      color: ${colors.brand.primary};
      margin-right: 8px;

      ${mq.range({ from: breakpoints.tablet })} {
        display: none;
      }
    }
  }

  span {
    ${fonts.sizes("16px", "39px")};
    display: block;
    font-family: ${fonts.sans};
    font-weight: ${fonts.weight.semibold};
    color: ${colors.brand.primary};
    padding-bottom: 1px;

    ${mq.range({ from: breakpoints.tablet })} {
      display: none;
    }
  }
`;

const ModalHeadingContainer = styled.div`
  display: flex;
  align-items: center;

  svg {
    display: block;
    width: 2rem;
    height: 2rem;
    color: #638b98;
    margin: 0 1rem 0 -0.25rem;

    ${mq.range({ from: breakpoints.tablet })} {
      width: 3rem;
      height: 3rem;
      margin: 0 1.5rem 0 -0.5rem;
    }
  }
`;

const StyledModalHeader = styled(ModalHeader)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

type ArticleNotionsProps = {
  children?: ReactNode;
  buttonOffsetRight: number;
};

export const ArticleNotions = ({ buttonOffsetRight, children }: ArticleNotionsProps) => {
  const { t } = useTranslation();
  const leftOffset = `${buttonOffsetRight - 32}px`;

  return (
    <ArticleNotionsContainer>
      <Modal>
        <ModalTrigger>
          <NotionsTrigger role="button" aria-label={t("article.notionsPrompt")} style={{ left: leftOffset }}>
            <NotionFlip />
            <Explanation />
            <span>{t("article.notionsPrompt")}</span>
          </NotionsTrigger>
        </ModalTrigger>
        <ModalContent size="large">
          <StyledModalHeader>
            <ModalHeadingContainer>
              <Explanation />
              <ModalTitle>{t("article.notionsPrompt")}</ModalTitle>
            </ModalHeadingContainer>
            <ModalCloseButton />
          </StyledModalHeader>
          <ModalBody modifier="notions-modal-body no-padding">{children}</ModalBody>
        </ModalContent>
      </Modal>
    </ArticleNotionsContainer>
  );
};

export default ArticleNotions;
