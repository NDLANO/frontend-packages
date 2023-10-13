import { Fragment } from 'react';
import { css } from '@emotion/react';
import Accordion, { AccordionBar, AccordionPanel, AccordionWrapper } from '@ndla/accordion';
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
          <Fragment key={item}>
            <AccordionBar {...getBarProps(index)} title={`Panel ${index + 1}`}>
              hello
            </AccordionBar>
            <AccordionPanel {...getPanelProps(index)} css={paddingPanelStyle}>
              <p>{item}</p>
            </AccordionPanel>
          </Fragment>
        ))}
      </AccordionWrapper>
    )}
  </Accordion>
);

export default TinyAccordionExample;
