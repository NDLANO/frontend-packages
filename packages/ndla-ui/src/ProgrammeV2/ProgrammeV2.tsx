/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import { spacing, fonts, breakpoints, mq } from '@ndla/core';
import { AccordionRoot, AccordionItem, AccordionHeader, AccordionContent } from '@ndla/accordion';
import ProgrammeCard, { Programme } from '../ProgrammeCard/ProgrammeCard';

const DesktopContainer = styled.div`
  display: none;
  ${mq.range({ from: breakpoints.tablet })} {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: ${spacing.normal};
  }
`;

const MobilContainer = styled.div`
  display: none;
  ${mq.range({ until: breakpoints.tablet })} {
    display: block;
    > * + * {
      margin-top: ${spacing.normal};
    }
  }
`;

const StyledAccordianRoot = styled(AccordionRoot)`
  gap: 0;
`;

const StyledAccordionHeader = styled(AccordionHeader)`
  font-family: ${fonts.sans};
  ${fonts.sizes('16px', '24px')};
  ${fonts.weight.semibold};
  :hover {
    text-decoration: none;
  }
  :active {
    text-decoration: underline;
  }
`;

const ProgrammeV2 = ({ programmes }: { programmes: Programme[] }) => {
  const { t } = useTranslation();

  const renderProgrammeCards = () => {
    return programmes.map((programme) => (
      <ProgrammeCard
        key={programme.id}
        id={programme.id}
        title={programme.title}
        desktopImage={programme.desktopImage}
        mobileImage={programme.mobileImage}
        url={programme.url}
      />
    ));
  };

  return (
    <>
      <DesktopContainer>{renderProgrammeCards()}</DesktopContainer>
      <MobilContainer>
        <StyledAccordianRoot type="single" collapsible>
          <img src="https://api.test.ndla.no/image-api/raw/IW5TJg5I.svg?width=600&ts=1687342895410" alt="" />
          <AccordionItem value={'1'}>
            <StyledAccordionHeader>{t('programme.accordianHeader')}</StyledAccordionHeader>
            <AccordionContent>{renderProgrammeCards()}</AccordionContent>
          </AccordionItem>
        </StyledAccordianRoot>
      </MobilContainer>
    </>
  );
};

export default ProgrammeV2;
