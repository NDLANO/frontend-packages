import React, { useState, Fragment } from 'react';
import { css } from '@emotion/core';
import Accordion, {
  AccordionBar,
  AccordionPanel,
  AccordionWrapper,
  StyledAccordionsPanelItemsWrapper,
  StyledAccordionsPanelIconButton,
} from '@ndla/accordion';
import { Eye, Restore } from '@ndla/icons/editor';
import { VersionHistory, VersionLogTag } from '@ndla/editor';
import { colors, spacing } from '@ndla/core';
import { uuid } from '@ndla/util';
import Tooltip from '@ndla/tooltip';

const paddingPanelStyle = css`
  padding: 0 ${spacing.medium};
`;

const paddingPanelStyleInside = css`
  background: ${colors.brand.greyLightest};
  padding: 0 ${spacing.normal};
`;

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
  },
];

const ProductionToolVersionLog = () => {
  const [versions, updateVersions] = useState(versionsDummy);
  return (
    <Accordion openIndexes={[2]}>
      {({ getPanelProps, getBarProps }) => (
        <AccordionWrapper>
          {['Lisens og bruker', 'Metadata'].map((name, index) => (
            <Fragment key={name}>
              <AccordionBar {...getBarProps(index)} title={name} />
              <AccordionPanel {...getPanelProps(index)} css={paddingPanelStyle}>
                <p>{name}</p>
              </AccordionPanel>
            </Fragment>
          ))}
          <AccordionBar {...getBarProps(2)} title="Versjonslogg og merknader" />
          <AccordionPanel {...getPanelProps(2)} css={paddingPanelStyle}>
            <Accordion openIndexes={[0]} tiny>
              {({ getPanelProps, getBarProps }) => (
                <AccordionWrapper>
                  {versions.map(
                    (
                      { name, lastChange, current, published, messages },
                      index,
                    ) => (
                      <Fragment key={name}>
                        <AccordionBar {...getBarProps(index)} title={name}>
                          <StyledAccordionsPanelItemsWrapper>
                            <div>{lastChange}</div>
                            <div>
                              {!current && (
                                <>
                                  <Tooltip tooltip="Se versjon">
                                    <StyledAccordionsPanelIconButton
                                      onClick={() =>
                                        console.log('Preview version')
                                      } // eslint-disable-line no-console
                                    >
                                      <Eye />
                                    </StyledAccordionsPanelIconButton>
                                  </Tooltip>
                                  <Tooltip tooltip="Tilbakestill til versjon">
                                    <StyledAccordionsPanelIconButton
                                      onClick={() =>
                                        console.log(
                                          'Are you sure? (modal to confirm revert?)',
                                        )
                                      } // eslint-disable-line no-console
                                    >
                                      <Restore />
                                    </StyledAccordionsPanelIconButton>
                                  </Tooltip>
                                </>
                              )}
                              {current && (
                                <VersionLogTag
                                  color="yellow"
                                  label="Du er her"
                                />
                              )}
                              {published && (
                                <VersionLogTag
                                  color="green"
                                  label="Publisert"
                                />
                              )}
                            </div>
                          </StyledAccordionsPanelItemsWrapper>
                        </AccordionBar>
                        <AccordionPanel
                          {...getPanelProps(index)}
                          css={paddingPanelStyleInside}>
                          <VersionHistory
                            messages={messages}
                            onComment={msg => {
                              const updatedVersions = [...versions];
                              const now = new Date();
                              const day = now.getDate();
                              const month = now.getMonth() + 1;
                              const newDate = `${day > 9 ? day : `0${day}`}.${
                                month > 9 ? month : `0${month}`
                              }.${now.getFullYear()}`;
                              updatedVersions[index].messages.unshift({
                                author: 'Dr. Phil',
                                msg,
                                status: '',
                                id: uuid(),
                                date: newDate,
                              });
                              updateVersions(updatedVersions);
                            }}
                          />
                        </AccordionPanel>
                      </Fragment>
                    ),
                  )}
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
