/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import { AccordionRoot, AccordionItem, AccordionHeader, AccordionContent } from '@ndla/accordion';
import SafeLink from '@ndla/safelink';
import { spacing, colors, fonts, breakpoints, mq } from '@ndla/core';

export interface Props {
  menu: {
    title: string;
    language: string;
    slug: String;
    menu: {
      title: string;
      language: string;
      slug: String;
      path: string;
    }[];
  }[];
}

const AccordionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.xxsmall};
`;

const StyledAccordionItem = styled(AccordionItem)`
  border: none;
`;

const StyledAccordionHeader = styled(AccordionHeader)`
  padding-left: ${spacing.medium};
  ${fonts.sizes('16px', '29px')};
  color: ${colors.brand.dark};
  border: solid 1px ${colors.brand.tertiary};
  border-radius: 2px;
  ${mq.range({ until: breakpoints.tabletWide })} {
    :active {
      text-decoration: underline;
    }
  }
`;

const StyledAccordionContent = styled(AccordionContent)`
  display: flex;
  flex-direction: column;
  padding: ${spacing.xsmall} 0px ${spacing.small};
  gap: ${spacing.xxsmall};
`;

const StyledSafeLink = styled(SafeLink)`
  box-shadow: none;
  border: solid 1px ${colors.brand.lighter};
  border-radius: 2px;
  color: ${colors.text.primary};
  ${fonts.sizes('16px', '24px')};
  font-weight: ${fonts.weight.semibold};
  padding: ${spacing.xsmall} ${spacing.medium};
  :hover {
    text-decoration: underline;
  }
`;

const AccordionMenu = ({ menu }: Props) => {
  return (
    <AccordionContainer>
      {menu.map((item, index) => (
        <AccordionRoot key={index} type="single" collapsible>
          <StyledAccordionItem value="1">
            <StyledAccordionHeader lang={item.language}>{item.title}</StyledAccordionHeader>
            <StyledAccordionContent>
              {item.menu.map((subItem, subIndex) => (
                <StyledSafeLink key={subIndex} to={subItem.path}>
                  {subItem.title}
                </StyledSafeLink>
              ))}
            </StyledAccordionContent>
          </StyledAccordionItem>
        </AccordionRoot>
      ))}
    </AccordionContainer>
  );
};

export default AccordionMenu;
