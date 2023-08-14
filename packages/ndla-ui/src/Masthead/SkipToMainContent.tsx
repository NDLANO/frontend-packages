import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { colors } from '@ndla/core';

interface Props {
  skipToMainContentId: string;
}

const StyledSkipToMainContent = styled.a`
  left: -999px;
  position: absolute;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
  z-index: -999;
  &:focus,
  &:active {
    color: ${colors.white};
    background: ${colors.brand.primary};
    left: auto;
    top: auto;
    width: 30%;
    height: auto;
    overflow: auto;
    margin: 10px 35%;
    padding: 5px;
    border-radius: 15px;
    border: 4px solid ${colors.brand.tertiary};
    text-align: center;
    font-size: 1.2em;
    z-index: 9999;
    animation-name: fadeIn;
    animation-duration: 0.3s;
  }
`;

const SkipToMainContent = ({ skipToMainContentId }: Props) => {
  const { t } = useTranslation();
  return (
    <StyledSkipToMainContent tabIndex={0} href={`#${skipToMainContentId}`}>
      {t('masthead.skipToContent')}
    </StyledSkipToMainContent>
  );
};

export default SkipToMainContent;
