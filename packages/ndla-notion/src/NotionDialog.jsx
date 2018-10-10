import React from 'react';
import PropTypes from 'prop-types';
import styled, { cx } from 'react-emotion';
import { fonts, spacing, colors, misc } from 'ndla-core';

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

export const NotionDialogTags = ({ tags }) =>
  tags ? (
    <NotionDialogTagWrapper>
      <div className={cx('tags')}>
        {tags && <span>Brukes i:</span>}
        {tags.map(tag => (
          <span className={cx('tag')} key={`key-${tag}`}>
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

NotionDialogContent.propTypes = {
  children: PropTypes.node,
};

const Paragraph = styled.p`
  font-weight: ${fonts.weight.normal};
  ${fonts.sizes('18px', 1.3)};
  color: ${colors.text.primary};
  font-family: ${fonts.serif};
`;

export const NotionDialogText = ({ children }) => (
  <Paragraph>{children}</Paragraph>
);

NotionDialogText.propTypes = {
  children: PropTypes.node,
};

const NotionDialogImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  flex-grow: 1;
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
  display: none;
  position: absolute;
  width: 90%;
  left: 5%;
  z-index: 1;
  @include mq($until: mobileWide) {
    left: 0;
    right: 0;
    top: 0 !important;
    bottom: 0;
    width: 100%;
    position: fixed;
    overflow-y: scroll;
    z-index: 9999;
  }
  @include mq($from: tablet) {
    max-width: 500px;
    left: 50%;
    margin-left: -250px;
  }
  @include mq($from: desktop) {
    max-width: 720px;
    margin-left: -360px;
    left: 50%;
  }
  box-shadow: 0 0 30px rgba($black, 0.2);
  box-sizing: border-box;
  background: $white;
  padding: $spacing;
  &.visible {
    display: block;
    opacity: 1;
  }
`;

const NotionDialog = ({ title, children, id, subtitle, ariaHidden }) => {
  return (
    <NotionDialogStyledWrapper
      aria-hidden={ariaHidden}
      role="dialog"
      data-concept-id={id}
      aria-labelledby={id}
      aria-describedby={id}>
      <button type="button" data-notion-close>
        Lukk
      </button>
      <h1>
        {title} {subtitle ? <small>{subtitle}</small> : null}
      </h1>
      {children}
    </NotionDialogStyledWrapper>
  );
};

NotionDialog.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  closeCallback: PropTypes.func,
  subtitle: PropTypes.string,
  ariaHidden: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

NotionDialog.defaultProps = {
  ariaHidden: true,
};

export default NotionDialog;
