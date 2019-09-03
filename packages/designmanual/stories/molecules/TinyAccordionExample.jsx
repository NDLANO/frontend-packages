import React from 'react';
import { css } from '@emotion/core';
import Accordion, {
  AccordionBar,
  AccordionPanel,
  AccordionWrapper,
} from '@ndla/accordion';
import { colors, spacing } from '@ndla/core';

const paddingPanelStyle = css`
  background: ${colors.brand.greyLightest};
  padding-left: ${spacing.medium};
  padding-right: ${spacing.medium};
`;

const TinyAccordionExample = () => (
  <Accordion single tiny>
    {({ getPanelProps, getBarProps }) => (
      <AccordionWrapper>
        {['Innhold 1', 'Innhold 2', 'Innhold 3'].map((item, index) => (
          <React.Fragment key={item}>
            <AccordionBar
              {...getBarProps(index)}
              title={`Panel ${index + 1}`}>
                hello
            </AccordionBar>
            <AccordionPanel {...getPanelProps(index)} sidePadding={0} css={paddingPanelStyle}>
              <p>{item}</p>
            </AccordionPanel>
          </React.Fragment>
        ))}
      </AccordionWrapper>
    )}
  </Accordion>
);

export default TinyAccordionExample;