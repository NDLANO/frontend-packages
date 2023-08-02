import { useState, Fragment } from 'react';
import { css } from '@emotion/react';
import Accordion, {
  AccordionBar,
  AccordionPanel,
  AccordionWrapper,
  StyledAccordionsPanelItemsWrapper,
  StyledAccordionsPanelIconButton,
} from '@ndla/accordion';
import { Eye, Restore } from '@ndla/icons/editor';
import { VersionHistory, VersionLogTag } from '@ndla/editor';
import { colors, spacing, fonts, misc } from '@ndla/core';
import { uuid } from '@ndla/util';
import Tooltip from '@ndla/tooltip';
import styled from '@emotion/styled';
import { ButtonV2 } from '@ndla/button';
import { Cross } from '@ndla/icons/action';
import { useTranslation } from 'react-i18next';

const paddingPanelStyleInside = css`
  background: ${colors.brand.greyLightest};
  padding: 0 ${spacing.normal};
`;

const StyledInputWrapper = styled.div`
  margin: 0 ${spacing.small} 0 ${spacing.normal};
  padding-right: ${spacing.xsmall};
  display: flex;
  flex-grow: 1;
  justify-items: space-between;
  align-items: center;
  border: 1px solid;
  background: #fff;
  transition: border-color 200ms ease;
  border-color: ${(props) => (props.inputHasFocus ? colors.brand.primary : colors.brand.greyLight)};
  border-radius: ${misc.borderRadius};
`;

const StyledInput = styled.input`
  ${fonts.sizes(16, '23px')};
  border: 0;
  outline: 0;
  background: 0;
  flex-grow: 1;
  padding: ${spacing.xsmall} ${spacing.small};
`;

const StyledForm = styled.form`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${spacing.small};
`;

const StyledInputLabel = styled.label`
  ${fonts.sizes(16, 1.1)};
  font-weight: ${fonts.weight.semibold};
`;

const StyledEmptyInputButton = styled.button`
  border: 0;
  background: transparent;
  border-radius: 100%;
  width: ${spacing.normal};
  height: ${spacing.normal};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;
  transition: background-color 200ms ease;
  svg {
    width: 18px;
    height: 18px;
    cursor: pointer;
    fill: ${colors.brand.greyDark};
    transition: fill 200ms ease;
  }
  &:hover,
  &:focus {
    background: ${colors.brand.greyLight};
    svg {
      fill: ${colors.brand.primary};
    }
  }
`;

const versionsDummy = [
  {
    name: '#003',
    lastChange: 'Sist endret 03.09.2019',
    current: true,
    notes: [
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
    notes: [
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
    notes: [
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
  const { t } = useTranslation();
  const [versions, updateVersions] = useState(versionsDummy);
  const [commentValue, setCommentValue] = useState('');
  const [commentError, setCommentError] = useState(false);
  const [inputHasFocus, setInputHasFocus] = useState(false);
  return (
    <Accordion openIndexes={[2]}>
      {({ getPanelProps, getBarProps }) => (
        <AccordionWrapper>
          {['Lisens og bruker', 'Metadata'].map((name, index) => (
            <Fragment key={name}>
              <AccordionBar {...getBarProps(index)} title={name} />
              <AccordionPanel {...getPanelProps(index)}>
                <p>{name}</p>
              </AccordionPanel>
            </Fragment>
          ))}
          <AccordionBar {...getBarProps(2)} title="Versjonslogg og merknader" />
          <AccordionPanel {...getPanelProps(2)}>
            <Accordion openIndexes={[0]} tiny>
              {({ getPanelProps, getBarProps }) => (
                <AccordionWrapper>
                  {versions.map(({ name, lastChange, current, published, notes }, index) => (
                    <Fragment key={name}>
                      <AccordionBar {...getBarProps(index)} title={name}>
                        <StyledAccordionsPanelItemsWrapper>
                          <div>{lastChange}</div>
                          <div>
                            {!current && (
                              <>
                                <Tooltip tooltip="Se versjon">
                                  <StyledAccordionsPanelIconButton
                                    onClick={
                                      () => console.log('Preview version') // eslint-disable-line no-console
                                    }
                                  >
                                    <Eye />
                                  </StyledAccordionsPanelIconButton>
                                </Tooltip>
                                <Tooltip tooltip="Tilbakestill til versjon">
                                  <StyledAccordionsPanelIconButton
                                    onClick={() =>
                                      // eslint-disable-next-line no-console
                                      console.log('Are you sure? (modal to confirm revert?)')
                                    }
                                  >
                                    <Restore />
                                  </StyledAccordionsPanelIconButton>
                                </Tooltip>
                              </>
                            )}
                            {current && <VersionLogTag color="yellow" label="Du er her" />}
                            {published && <VersionLogTag color="green" label="Publisert" />}
                          </div>
                        </StyledAccordionsPanelItemsWrapper>
                      </AccordionBar>
                      <AccordionPanel {...getPanelProps(index)} css={paddingPanelStyleInside}>
                        <VersionHistory
                          notes={notes}
                          onComment={(msg) => {
                            const updatedVersions = [...versions];
                            const now = new Date();
                            const day = now.getDate();
                            const month = now.getMonth() + 1;
                            const newDate = `${day > 9 ? day : `0${day}`}.${
                              month > 9 ? month : `0${month}`
                            }.${now.getFullYear()}`;
                            updatedVersions[index].notes.unshift({
                              author: 'Dr. Phil',
                              msg,
                              status: '',
                              id: uuid(),
                              date: newDate,
                            });
                            updateVersions(updatedVersions);
                          }}
                        >
                          <StyledForm onSubmit={() => {}}>
                            <StyledInputLabel htmlFor="inputComment">
                              {t('editor.versionHistory.inputLabel')}
                            </StyledInputLabel>
                            <StyledInputWrapper inputHasFocus={inputHasFocus}>
                              <StyledInput
                                name="inputComment"
                                value={commentValue}
                                autoComplete="off"
                                onFocus={() => setInputHasFocus(true)}
                                onBlur={() => setInputHasFocus(false)}
                                onChange={(e) => {
                                  setCommentValue(e.target.value);
                                  setCommentError(false);
                                }}
                                placeholder={t('editor.versionHistory.inputPlaceholder')}
                              />
                              {commentValue.length > 0 && (
                                <StyledEmptyInputButton type="button" onClick={() => setCommentValue('')}>
                                  <Cross />
                                </StyledEmptyInputButton>
                              )}
                            </StyledInputWrapper>
                            {commentError && <span>Has error!!!</span>}
                            <ButtonV2 type="submit" disabled={commentValue.length < 3 ? true : false}>
                              {t('editor.versionHistory.buttonLabel')}
                            </ButtonV2>
                          </StyledForm>
                        </VersionHistory>
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
