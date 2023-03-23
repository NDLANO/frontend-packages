import { css } from '@emotion/react';
import colors from './colors';
import fonts from './fonts';

const generateListResets = () => {
  let styles = '';
  for (let $i = 0; $i < 50; $i++) {
    styles += ` 
      ol.ol-reset-${$i} { counter-reset: item ${$i - 1} }  
    `;
  }

  return styles;
};

const listsStyle = css`
  // Parent shared styles/defaults
  ul,
  ol {
    margin-top: 0;
    margin-left: 0;
    ${fonts.sizes('18px', '29px')};

    // Due to displayment issues in the editor. The editor wraps all text with a <p> tag
    p {
      display: inline;
    }
    // Child unordered lists
    ul {
      padding-left: 20px;
    }

    // Child ordered lists
    ol {
      padding-left: 20px;
    }
  }

  // List item
  li {
    margin-top: 24px;
  }

  // Unordered list
  ul {
    padding-left: 44px;
    > li {
      ::marker {
        color: ${colors.brand.secondary};
      }
    }
  }

  // Regular ordered lists
  ol:not(.ol-list--roman) {
    list-style-type: none;
    counter-reset: item;
    li {
      counter-increment: item;
      &:before {
        position: absolute;
        transform: translateX(-100%);
        padding-right: 0.25em;
        content: counters(item, '.') '.';
      }

      > ol:not(.ol-list--roman) {
        padding-left: 32px;
        > li {
          > ol:not(.ol-list--roman) {
            padding-left: 48px;
            > li {
              > ol:not(.ol-list--roman) {
                padding-left: 64px;
                ol:not(.ol-list--roman) {
                  padding-left: 80px;
                }
              }
            }
          }
        }
      }
    }
  }

  // Alphabetical ordered lists
  ol.ol-list--roman {
    list-style-type: none;
    counter-reset: item;
    > li {
      counter-increment: item;
      &:before {
        content: counter(item, upper-alpha) '.';
        padding-right: 0.25em;
      }

      > ol.ol-list--roman {
        > li {
          &:before {
            content: counter(item, lower-alpha) '.';
          }
          ol.ol-list--roman {
            padding-left: 28px;
            > li {
              &:before {
                content: counter(item, lower-roman) '.';
              }
            }
          }
        }
      }
    }
  }

  // List reset classes
  ${generateListResets()}
`;

const lists = { listsStyle };

export default lists;
