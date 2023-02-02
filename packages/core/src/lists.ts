import { css } from '@emotion/react';
import colors from './colors';
import fonts from './fonts';

const listsStyle = css`
  list-style: none;
  li {
    margin: 24px;
  }
  ul,
  li {
    ${fonts.sizes('18px', '29px')};
  }

  // Ordered list
  ol {
    list-style-type: none;
    counter-reset: item;

    > li {
      counter-increment: item;
      ::before {
        position: absolute;
        transform: translateX(-100%);
        padding-right: 24px;
        content: counters(item, '.') '.';
      }
    }
  }
  // First level count
  li > ol {
    > li {
      ::before {
        content: counters(item, '.');
      }
    }
  }

  // Unordered list
  ul {
    li {
      ::marker {
        color: ${colors.brand.secondary};
        /* font-size: 30px; */
      }
    }
  }
`;

const lists = { listsStyle };

export default lists;
