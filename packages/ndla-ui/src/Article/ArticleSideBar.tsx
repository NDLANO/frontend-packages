import React from 'react';
// @ts-ignore
import Button, { CopyButton } from '@ndla/button';
import styled from '@emotion/styled';
import SafeLink from '@ndla/safelink';
import { fonts } from '@ndla/core';
// @ts-ignore
import Modal, { ModalHeader, ModalBody, ModalCloseButton } from '@ndla/modal';
import { copyTextToClipboard } from '@ndla/util';
import { useTranslation } from 'react-i18next';

const Wrapper = styled.div`
  width: 160px;
  margin: 6px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  margin-bottom: 8px;
  width: 100%;
`;

const CursorWrapper = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Shadows+Into+Light+Two&display=swap');
  width: 120px;
  font-family: 'Shadows Into Light Two', cursive;
  margin-top: 40px;
  background-image: url("data:image/svg+xml,%3Csvg width='10' height='46' viewBox='0 0 10 46' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.7626 0.887965L4.52762 0.446621L3.64494 0.91658L3.87992 1.35792L4.7626 0.887965ZM8.03372 45.2321L8.46374 39.4747L3.26262 41.981L8.03372 45.2321ZM4.32126 1.12294C3.87992 1.35792 3.8798 1.3577 3.87969 1.3575C3.87968 1.35748 3.87959 1.35731 3.87956 1.35726C3.87951 1.35716 3.87952 1.35717 3.87959 1.35731C3.87973 1.35758 3.88012 1.35832 3.88076 1.35954C3.88203 1.36199 3.88428 1.36633 3.88747 1.3726C3.89384 1.38513 3.90397 1.40533 3.91755 1.43329C3.9447 1.48921 3.98562 1.57616 4.0378 1.69484C4.14215 1.9322 4.29157 2.29653 4.46596 2.79343C4.8147 3.78714 5.2635 5.31159 5.65136 7.41155C6.42699 11.611 6.95965 18.1161 5.95809 27.2851L6.95217 27.3937C7.96354 18.1349 7.42926 11.5317 6.63473 7.22992C6.2375 5.07924 5.77541 3.5048 5.40953 2.46228C5.22661 1.94106 5.06779 1.55294 4.95323 1.29237C4.89595 1.16209 4.84974 1.06371 4.81713 0.996535C4.80082 0.96295 4.78791 0.937167 4.77872 0.9191C4.77413 0.910067 4.77046 0.902963 4.76776 0.897778C4.76641 0.895185 4.7653 0.893072 4.76444 0.891437C4.76401 0.890619 4.76364 0.889921 4.76333 0.889343C4.76318 0.889054 4.763 0.888709 4.76292 0.888565C4.76276 0.88825 4.7626 0.887965 4.32126 1.12294ZM5.95809 27.2851C5.19358 34.284 5.23105 38.5891 5.58488 41.2448L6.57612 41.1128C6.23761 38.5721 6.19146 34.3579 6.95217 27.3937L5.95809 27.2851Z' fill='%2320588F'/%3E%3C/svg%3E%0A");
  background-position: bottom center;
  background-repeat: no-repeat;
  ${(p) => p.hide && 'opacity:0;'}
  transition-duration: 0.5s;
  padding-bottom: 60px;
`;

const LinkText = styled.div`
  transform: rotate(-4.15deg);
  text-align: center;

  ${fonts.sizes('18px', '26px')};
`;

type Props = {
  linkToResources?: string;
  onLinkToResourcesClick?: (e: React.MouseEvent<HTMLElement>) => void;
  copyPageUrlLink?: string;
  licenseBox?: React.ReactNode;
  resourcesRef?: any;
};
const ArticleSideBar = ({
  linkToResources,
  onLinkToResourcesClick,
  copyPageUrlLink,
  licenseBox,
  resourcesRef,
}: Props) => {
  const { t } = useTranslation();
  const copyLinkHandler = () => {
    if (copyPageUrlLink) {
      copyTextToClipboard(copyPageUrlLink);
    }
  };

  const [hide, setHide] = React.useState(Boolean(false));
  React.useEffect(() => {
    window.onscroll = function () {
      //TOP
      if (resourcesRef.current.getBoundingClientRect().top <= 0) {
        setHide(true);
      } else if (resourcesRef.current.getBoundingClientRect().top <= 0) {
        setHide(false);
      }
    };
  }, []);

  return (
    <Wrapper>
      {copyPageUrlLink && (
        <ButtonWrapper>
          <CopyButton
            onClick={copyLinkHandler}
            size="small"
            width="full"
            outline
            copyNode={t('article.copyPageLinkCopied')}
            data-copy-string={copyPageUrlLink}>
            {t('article.copyPageLink')}
          </CopyButton>
        </ButtonWrapper>
      )}
      {licenseBox && (
        <Modal
          activateButton={
            <Button size="small" width="full" outline>
              {t('article.useContent')}
            </Button>
          }
          size="medium">
          {(onClose: () => void) => (
            <>
              <ModalHeader modifier="no-bottom-padding">
                <ModalCloseButton onClick={onClose} title={t('article.closeLabel')} />
              </ModalHeader>
              <ModalBody>{licenseBox}</ModalBody>
            </>
          )}
        </Modal>
      )}
      {linkToResources && (
        <CursorWrapper hide={hide}>
          <LinkText>
            <SafeLink
              to={linkToResources}
              onClick={(e: React.MouseEvent<HTMLElement>) => onLinkToResourcesClick && onLinkToResourcesClick(e)}>
              Hopp til fagressursene
            </SafeLink>
          </LinkText>
        </CursorWrapper>
      )}
    </Wrapper>
  );
};

export default ArticleSideBar;
