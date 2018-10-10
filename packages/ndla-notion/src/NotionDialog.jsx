import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import styled, { css, cx } from 'react-emotion';
import { fonts, spacing, colors, misc } from 'ndla-core';
import { getLicenseByAbbreviation } from 'ndla-licenses';
import { ForwardArrow } from 'ndla-icons/action';
import { LicenseByline } from 'ndla-ui';

const classes = new BEMHelper({
  name: 'concept',
  prefix: 'c-',
});
const sourceClasses = new BEMHelper({
  name: 'source-list',
  prefix: 'c-',
});

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
  font-family: $font-serif;
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

  .c-tabs {
    margin-left: 0;
  }

  &.listview {
    margin-top: $spacing;
    position: fixed;
    max-height: 100%;
    overflow-y: auto;
    top: 50%;
    transform: translateY(-50%);

    &.c-concept__popup--visible {
      // Use other animation to allow fixed div to be vertically aligned using translateY
      animation: fadeInTopFixed 0.4s;
    }
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
  opacity: 0;

  // Styling for concept-popup content components, Content, Text, Image
  &__content {
    padding-bottom: $spacing;
    display: flex;
    flex-wrap: wrap;
  }

  &__paragraph {
    flex: 1 1 100%;
    &--small {
      flex: 1 1 75%;
    }
  }

  &__image {
    flex: 1 100%;

    img {
      display: block;
      position: relative;
      margin: 0 auto 0 auto;
      max-height: 320px;
    }
    &--small {
      flex: 0 1 25%;
    }

    &--wide {
      flex: 1 100%;
    }
  }

  &__licensebox {
    flex: 2 1 auto;
    justify-content: flex-end;
  }

  // Additional styling for extras in the dialog such as links and tags
  &-extra {
    display: block;
    &:after {
      content: '';
      display: inline-table;
      clear: both;
    }
  }

  &-tags {
    width: 50%;
    float: left;
  }

  &-tag {
    font-family: $font;
    @include inuit-font-size(12px);
    background: $brand-grey--lightest;
    display: inline-block;
    font-weight: 600;
    border-radius: 0.2em;
    padding: 0.3rem;
    line-height: 0.5rem;
    margin-left: 0.5em;
    font-family: $font;
  }

  &-link {
    width: 50%;
    float: left;
    text-align: right;
    a {
      display: inline-block;
      color: $brand-color;
      font-weight: $font-weight-semibold;
      font-family: $font;
      @include inuit-font-size(14px, 25px);
    }
  }
`;

const NotionDialog = ({
  title,
  authors,
  source,
  content,
  id,
  messages,
  license,
  modifiers,
  closeCallback,
  subtitle,
  ariaHidden,
  linkTo,
  tags,
  licenseBox,
}) => {
  const licenseRights = getLicenseByAbbreviation(license).rights;
  return (
    <NotionDialogStyledWrapper
      aria-hidden={ariaHidden}
      role="dialog"
      data-concept-id={id}
      aria-labelledby={id}
      aria-describedby={id}
      className={cx(modifiers)}>
      <button
        type="button"
        {...classes('close', 'u-close')}
        onClick={() => (closeCallback ? closeCallback() : null)}>
        {messages.close}
      </button>
      <h3 {...classes('title')}>
        {title}{' '}
        {subtitle ? <span {...classes('subtitle')}>{subtitle}</span> : null}
      </h3>
      <div {...classes('content')}>{content}</div>

      {tags || linkTo ? (
        <div {...classes('popup-extra')}>
          {tags ? (
            <div {...classes('popup-tags')}>
              Brukes iiiii:
              {tags.map(tag => (
                <span {...classes('popup-tag')} key={`key-${tag}`}>
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
          {linkTo ? (
            <div {...classes('popup-link')}>
              <a {...classes('linkTo')} href={linkTo.href}>
                {linkTo.label} <ForwardArrow />
              </a>
            </div>
          ) : null}
        </div>
      ) : null}

      <div {...sourceClasses()}>
        {licenseRights.length > 0 && (
          <LicenseByline
            className="c-source-list__item"
            licenseRights={licenseRights}
          />
        )}
        {authors.map(author => (
          <span {...sourceClasses('item')} key={author}>
            {author}
          </span>
        ))}
        <span {...sourceClasses('item')} key={source}>
          {source}
        </span>
        <span {...classes('popup__licensebox')}>{licenseBox}</span>
      </div>
    </NotionDialogStyledWrapper>
  );
};

NotionDialog.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  authors: PropTypes.arrayOf(PropTypes.string),
  source: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  messages: PropTypes.shape({
    ariaLabel: PropTypes.string.isRequired,
    close: PropTypes.string.isRequired,
  }),
  license: PropTypes.string,
  children: PropTypes.string,
  modifiers: PropTypes.arrayOf(PropTypes.string),
  closeCallback: PropTypes.func,
  subtitle: PropTypes.string,
  ariaHidden: PropTypes.bool,
  linkTo: PropTypes.shape({
    label: PropTypes.string,
    href: PropTypes.string,
  }),
  tags: PropTypes.arrayOf(PropTypes.string),
  licenseBox: PropTypes.node,
};

NotionDialog.defaultProps = {
  authors: [],
  license: '',
  children: '',
  modifiers: [],
  ariaHidden: true,
};

export default NotionDialog;
