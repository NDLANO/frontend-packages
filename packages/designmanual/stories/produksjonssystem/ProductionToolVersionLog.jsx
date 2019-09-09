import React, { useState, Fragment } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import Accordion, {
  AccordionBar,
  AccordionPanel,
  AccordionWrapper,
} from '@ndla/accordion';
import { VersionHistory } from '@ndla/editor';
import { colors, spacing } from '@ndla/core';

const paddingPanelStyle = css`
  background: ${colors.brand.greyLightest};
  padding-left: ${spacing.medium};
  padding-right: ${spacing.medium};
`;

const StyledAccordionsItemsWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  background: yellow;
`;

const VersionLogCurrentTag = () => (
  <span>current</span>
);

const VersionLogPublishedTag = () => (
  <span>published</span>
)

const versionsDummy = [
  {
    name: '#003',
    lastChange: 'Sist endret 03.09.2019',
    current: true,
    messages: [
      {
        author: 'Torgeir H.',
        date: '03.09.2019',
        msg: 'Endret status',
        status: 'Fra "Kladd" til "Publisert"',
        id: '#3_0',
      },
      {
        author: 'Ivar B.',
        date: '01.09.2019',
        msg: 'Omskrivning av ingress',
        status: '',
        id: '#3_1',
      },
      {
        author: 'Torgeir H.',
        date: '27.08.2019',
        msg: 'Gjorde noe',
        status: 'Kladd',
        id: '#3_2',
      },
    ],
  },
  {
    name: '#002',
    lastChange: 'Sist endret 03.09.2019',
    published: true,
    messages: [
      {
        author: 'Torgeir H.',
        date: '03.09.2019',
        msg: 'Endret status',
        status: 'Fra "Kladd" til "Publisert"',
        id: '#2_0',
      },
      {
        author: 'Ivar B.',
        date: '01.09.2019',
        msg: 'Omskrivning av ingress',
        status: '',
        id: '#2_1',
      },
      {
        author: 'Torgeir H.',
        date: '27.08.2019',
        msg: 'Gjorde noe',
        status: 'Kladd',
        id: '#2_2',
      },
    ],
  },
  {
    name: '#001',
    lastChange: 'Sist endret 03.09.2019',
    messages: [
      {
        author: 'Torgeir H.',
        date: '03.09.2019',
        msg: 'Endret status',
        status: 'Fra "Kladd" til "Publisert"',
        id: '#1_0',
      },
      {
        author: 'Ivar B.',
        date: '01.09.2019',
        msg: 'Omskrivning av ingress',
        status: '',
        id: '#1_1',
      },
      {
        author: 'Torgeir H.',
        date: '27.08.2019',
        msg: 'Gjorde noe',
        status: 'Kladd',
        id: '#1_2',
      },
    ],
  }
];

const ProductionToolVersionLog = () => {
  const [versions, updateVersions] = useState(versionsDummy);
  return (
    <Accordion openIndexes={[2]}>
      {({ getPanelProps, getBarProps }) => (
        <AccordionWrapper>
          {['Lisens og bruker', 'Metadata'].map((name, index) => (
            <Fragment key={name}>
              <AccordionBar
                {...getBarProps(index)}
                title={name}>
              </AccordionBar>
              <AccordionPanel {...getPanelProps(index)} css={paddingPanelStyle}>
                <p>{name}</p>
              </AccordionPanel>
            </Fragment>
          ))}
          <AccordionBar
            {...getBarProps(2)}
            title="Versjonslogg og merknader">
              <StyledAccordionsItemsWrapper>
                <div>
                  12.23.1244
                </div>
                <div>
                  <span>
                    1
                  </span>
                  <span>
                    2
                  </span>
                  <VersionLogCurrentTag />
                </div>
              </StyledAccordionsItemsWrapper>
          </AccordionBar>
          <AccordionPanel {...getPanelProps(2)} css={paddingPanelStyle}>
          <Accordion tiny>
            {({ getPanelProps, getBarProps }) => (
              <AccordionWrapper>
                {versions.map(({ name, lastChange, current, published, messages }, index) => (
                  <Fragment key={name}>
                    <AccordionBar
                      {...getBarProps(index)}
                      title={name}>
                        <StyledAccordionsItemsWrapper>
                          <div>
                            {lastChange}
                          </div>
                          <div>
                            {!current && (
                              <>
                                <span>
                                  1
                                </span>
                                <span>
                                  2
                                </span>
                              </>
                            )}
                            {current && <VersionLogCurrentTag />}
                            {published && <VersionLogPublishedTag />}
                          </div>
                        </StyledAccordionsItemsWrapper>
                    </AccordionBar>
                    <AccordionPanel {...getPanelProps(index)} css={paddingPanelStyle}>
                      <VersionHistory
                        messages={messages}
                        onComment={(value) => console.log('comment!', value)}
                      />
                    </AccordionPanel>
                  </Fragment>
                ))}
              </AccordionWrapper>
            )}
          </Accordion>
          </AccordionPanel>
        </AccordionWrapper>
      )}
    </Accordion>
  );
};

export default ProductionToolVersionLog;