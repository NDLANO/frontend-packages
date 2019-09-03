import React from 'react';
import { css } from '@emotion/core';
import Accordion, {
  AccordionBar,
  AccordionPanel,
  AccordionWrapper,
} from '@ndla/accordion';
import { colors } from '@ndla/core';

const paddingPanelStyle = css`
  background: ${colors.brand.greyLightest};
`;

const TinyAccordionExample = () => (
  <Accordion single tiny>
    {({ getPanelProps, getBarProps }) => (
      <AccordionWrapper>
        {['Innhold 1', 'Innhold 2', 'Innhold 3'].map((item, index) => (
          <React.Fragment key={item}>
            <AccordionBar
              {...getBarProps(index)}
              ariaLabel={`Panel ${index + 1}`}>
              Panel {index + 1}
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