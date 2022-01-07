import styled from '@emotion/styled';
import { spacing } from '@ndla/core';

const NotionBody = styled.div`
  margin: 0 ${spacing.normal} ${spacing.small};
  .c-tabs {
    margin-left: 0;
    margin-right: 0;
  }
  .react-tabs__tab-panel--selected {
    animation-name: fadeInLeft;
    animation-duration: 500ms;
  }
`;

export { NotionBody as default };
