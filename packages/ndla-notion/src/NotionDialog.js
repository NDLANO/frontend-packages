import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { fonts, spacing, colors, misc, breakpoints, mq } from '@ndla/core';
import SafeLink from '@ndla/safelink';
import NotionHeader from './NotionHeader';
import NotionBody from './NotionBody';

const NotionDialogContentWrapper = styled.div`
  padding-bottom: ${spacing.normal};
  display: flex;
  flex-wrap: wrap;
`;

export const NotionDialogContent = ({ children, ...rest }) => (
  <NotionDialogContentWrapper {...rest}>{children}</NotionDialogContentWrapper>
);

const NotionDialogTagWrapper = styled.div`
  .tags {
    display: flex;
    flex-wrap: wrap;
    margin: ${spacing.small} 0;
    > span {
      padding-right: ${spacing.small};
    }
    .tag {
      background: #f8f8f8;
      margin-right: ${spacing.xsmall};
      padding: 0 ${spacing.xsmall};
      border-radius: ${misc.borderRadius};
      ${fonts.sizes('12px', 1.2)};
      font-family: ${fonts.sans};
      font-weight: ${fonts.weight.semibold};
      display: flex;
      align-items: center;
    }
  }
`;

const NotionDialogRelatedLinksWrapper = styled.div`
  margin: ${spacing.small} 0;

  .link:first-of-type {
    padding-left: ${spacing.small};
  }
`;
export const NotionDialogTags = ({ tags }) =>
  tags ? (
    <NotionDialogTagWrapper>
      <div className={'tags'}>
        {tags && <span>Brukes i:</span>}
        {tags.map((tag) => (
          <span className={'tag'} key={`key-${tag}`}>
            {tag}
          </span>
        ))}
      </div>
    </NotionDialogTagWrapper>
  ) : null;

NotionDialogTags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
  useContent: PropTypes.shape({
    label: PropTypes.string,
    href: PropTypes.string,
    ariaLabel: PropTypes.string,
  }),
};

export const NotionDialogRelatedLinks = ({ links, label }) =>
  links ? (
    <NotionDialogRelatedLinksWrapper>
      {label}:
      {links.map((link, index) => (
        <span className={'link'} key={`key-${link.href}`}>
          <SafeLink to={link.href}>{link.label}</SafeLink>
          {links[index + 1] && ' - '}
        </span>
      ))}
    </NotionDialogRelatedLinksWrapper>
  ) : null;

NotionDialogRelatedLinks.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      href: PropTypes.string,
    }),
  ),
  label: PropTypes.string,
};

NotionDialogContent.propTypes = {
  children: PropTypes.node,
};

const Paragraph = styled.p`
  font-weight: ${fonts.weight.normal};
  ${fonts.sizes('18px', 1.3)};
  color: ${colors.text.primary};
  font-family: ${fonts.serif};
`;

export const NotionDialogText = ({ children }) => <Paragraph>{children}</Paragraph>;

NotionDialogText.propTypes = {
  children: PropTypes.node,
};

const NotionDialogImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  flex-grow: 1;
  margin: ${spacing.xsmall} 0;
`;
export const NotionDialogImage = ({ alt, src }) => (
  <NotionDialogImageWrapper>
    <img src={src} alt={alt} />
  </NotionDialogImageWrapper>
);

NotionDialogImage.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export const NotionDialogStyledWrapper = styled.div`
  @keyframes animateIn {
    0% {
      opacity: 0;
      transform: translate3d(0, -13px, 0);
    }
    100% {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  display: none;
  position: absolute;
  width: calc(100% - (${spacing.normal} * 2));
  left: ${spacing.normal};
  z-index: 1;
  animation-name: animateIn;
  animation-duration: 300ms;
  ${mq.range({ until: breakpoints.mobileWide })} {
    left: 0;
    right: 0;
    top: 0 !important;
    bottom: 0;
    width: 100%;
    position: fixed;
    overflow-y: scroll;
    z-index: 9999;
  }
  ${mq.range({ from: breakpoints.tablet })} {
    max-width: 500px;
    left: 50%;
    margin-left: -250px;
  }
  ${mq.range({ from: breakpoints.desktop })} {
    max-width: 720px;
    margin-left: -360px;
    left: 50%;
  }
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  background: #fff;
  &.visible {
    display: block;
    opacity: 1;
  }
`;

const NotionDialog = ({ title, children, id, subTitle, ariaHidden, customCSS }) => (
  <NotionDialogStyledWrapper
    aria-hidden={ariaHidden}
    role="dialog"
    data-concept-id={id}
    aria-labelledby={id}
    aria-describedby={id}
    css={customCSS}>
    <NotionHeader title={title} subTitle={subTitle} />
    <NotionBody>{children}</NotionBody>
  </NotionDialogStyledWrapper>
);

NotionDialog.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  title: PropTypes.string,
  closeCallback: PropTypes.func,
  subTitle: PropTypes.string,
  ariaHidden: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

NotionDialog.defaultProps = {
  ariaHidden: true,
};

export default NotionDialog;
