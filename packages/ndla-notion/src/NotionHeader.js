import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { spacing, colors, fonts, misc } from 'ndla-core';

const NotionHeaderWrapper = styled.div`
  margin: ${spacing.normal} ${spacing.normal} ${spacing.small};
  padding-bottom: ${spacing.small};
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  border-bottom: 2px solid ${colors.brand.tertiary};
  h1 {
    margin: 0;
    flex-grow: 1;
    font-weight: ${fonts.weight.bold};
    ${fonts.sizes('22px', 1.2)};
    color: ${colors.text.primary};
    small {
      padding-left: ${spacing.small};
      margin-left: ${spacing.xsmall};
      border-left: 1px solid ${colors.brand.greyLight};
      ${fonts.sizes('20px', 1.2)};
      font-weight: ${fonts.weight.normal};
    }
  }
  button {
    padding: 0;
    border: none;
    background: none;
    color: ${colors.brand.primary};
    box-shadow: ${misc.textLinkBoxShadow};
    &:hover,
    &:focus {
      box-shadow: none;
    }
  }
`;

const NotionHeader = ({ title, subTitle, onClose }) => (
  <NotionHeaderWrapper>
    <h1>
      {title} {subTitle ? <small>{subTitle}</small> : null}
    </h1>
    {onClose ? (
      <button type="button" onClick={onClose}>
        Lukk
      </button>
    ) : (
      <button type="button" data-notion-close>
        Lukk
      </button>
    )}
  </NotionHeaderWrapper>
);

NotionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  onClose: PropTypes.func,
};

export { NotionHeader as default };
