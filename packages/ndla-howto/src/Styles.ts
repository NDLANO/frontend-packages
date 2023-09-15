import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { spacing, spacingUnit, colors, fonts, mq, breakpoints } from '@ndla/core';

const gridPush = css`
  ${mq.range({ from: breakpoints.tabletWide })} {
    width: 83.33%;
    margin-left: 8.33%;
  }
`;

export const PushGrid = styled.div`
  ${gridPush}
`;

export const Wrapper = styled.section`
  margin: ${spacing.large} auto ${spacingUnit * 4}px;
  max-width: calc(100vw - ${spacingUnit * 4}px);
  ${mq.range({ from: breakpoints.tabletWide })} {
    max-width: 800px;
  }
`;

export const Header = styled.div`
  h1 {
    margin-top: ${spacing.medium};
    ${fonts.sizes(26, 1.4)};
    font-weight: ${fonts.weight.light};
    color: ${colors.text.primary};
  }
`;

interface HeadingProps {
  inModal?: boolean;
}

export const Heading = styled.div<HeadingProps>`
  margin: 0 0 ${(props) => (!props.inModal ? spacing.medium : '0 0')};
  ${fonts.sizes(38, 1.4)};
  font-weight: ${fonts.weight.semibold};
  color: ${colors.text.primary};
  ${(props) => !props.inModal && gridPush};
  ${mq.range({ from: breakpoints.tabletWide })} {
    padding-left: ${(props) => props.inModal && '8.33%'};
  }
`;

export const IconButton = styled.button`
  border: 0;
  padding: 0;
  background: none;
  color: ${colors.brand.primary};
`;

export const InModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${spacing.medium};
  position: relative;
  ${Heading} {
    flex-grow: 1;
    color: ${colors.brand.primary};
  }
  .c-icon {
    width: ${spacing.large};
    height: ${spacing.large};
    color: ${colors.brand.primary};
  }
  > .c-icon {
    display: none;
    ${mq.range({ from: breakpoints.tabletWide })} {
      display: flex;
    }
  }
`;

export const Lead = styled.p`
  margin: 0 0 ${spacing.medium};
  ${fonts.sizes(26, 1.4)};
  font-weight: ${fonts.weight.light};
  color: ${colors.text.primary};
  ${gridPush};
`;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 ${spacing.medium};
  background: ${colors.brand.greyLighter};
  img {
    max-width: 50%;
    height: auto;
    &[src$='.gif'] {
      max-width: 100%;
    }
  }
`;

export const BreadCrumbs = styled.div`
  colors: ${colors.text.light};
  ${fonts.sizes(14, 1.1)};
  margin: ${spacing.xsmall} 0;
`;

export const SearchResultLink = styled.a`
  color: ${colors.brand.primary};
`;

export const SearchResultLead = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  ${fonts.sizes(18, 1.4)};
  max-height: 52px;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin: ${spacing.xsmall} ${spacing.large} ${spacing.large} 0;
`;

export const SearchBlockWrapper = styled.aside`
  margin: ${spacing.large} -${spacing.large};
  padding: ${spacing.large};
  background: ${colors.brand.lighter};
  h2 {
    margin: 0 0 ${spacing.medium} !important;
    ${fonts.sizes(32, 1.4)} !important;
    font-weight: ${fonts.weight.semibold} !important;
    color: ${colors.text.primary} !important;
  }
`;
