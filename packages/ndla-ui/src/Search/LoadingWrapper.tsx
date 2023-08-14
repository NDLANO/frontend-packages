import styled from '@emotion/styled';
import { spacing, spacingUnit, animations } from '@ndla/core';
import { Spinner } from '@ndla/icons';

const StyledWrapper = styled.div`
  position: absolute;
  pointer-events: none;
  top: 0;
  left: 0;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  span {
    opacity: 0;
  }
  > div {
    ${animations.fadeIn('1000ms')};
    transform: translateX(${spacingUnit * 1.5}px) translateY(-${spacing.xsmall});
  }
`;

type Props = {
  value: string;
};

const LoadingWrapper = ({ value }: Props) => (
  <StyledWrapper>
    <span>{value}</span>
    <div>
      <Spinner size="normal" />
    </div>
  </StyledWrapper>
);

export default LoadingWrapper;
