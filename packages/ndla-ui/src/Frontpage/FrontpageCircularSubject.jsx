import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import css from '@emotion/css';
import { fonts, colors } from '@ndla/core';

const StyledFigure = styled('figure')`
  ${({ illustrationUrl }) =>
    illustrationUrl &&
    css`
      background-image: url(${illustrationUrl});
      background-size: contain;
      height: 83px;
      width: 83px;
    `}
  border-radius: 50%;
`;

const StyledFigCaption = styled('figcaption')`
  position: absolute;
  bottom: 5px;
  left: 50%;
  ${fonts.sizes('16px', '32px')};
  transform: translateX(-50%);
  background: transparent;
  padding: 0;
  font-weight: bold;
  color: ${colors.subject.dark};
`;

const StyledButton = styled('button')`
  box-shadow: none;
  border: 0;
  background: none;
`;

const FrontpageCircularSubject = ({ textValue, illustrationUrl, ...rest }) => (
  <StyledButton type="button" {...rest}>
    <StyledFigure illustrationUrl={illustrationUrl} />
    <StyledFigCaption>{textValue}</StyledFigCaption>
  </StyledButton>
);

FrontpageCircularSubject.propTypes = {
  textValue: PropTypes.string.isRequired,
  illustrationUrl: PropTypes.string.isRequired,
};

export default FrontpageCircularSubject;
