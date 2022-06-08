/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import React, { Fragment } from 'react';
import { Article, OneColumn, TasksAndActivitiesBadge, constants, Figure } from '@ndla/ui';
import Tabs from '@ndla/tabs';
import styled from '@emotion/styled';
//@ts-ignore
import FigureImage from '../article/FigureImage';
//@ts-ignore
import { CompetenceGoalListExample } from '../organisms/CompetenceGoalsExample';
//@ts-ignore
import LicenseBox from '../article/LicenseBox';
import NotionExample from './NotionExample';
import NotionBlock from './NotionBlock';
import NotionList from './NotionList';

const Wrapper = styled.div`
  margin-top: 200px;
  width: 100vw;
  position: relative;
  left: calc(-50vw + 50%);
  font-family: sans-serif;
`;

const { contentTypes } = constants;
const NotionSiteTabs = () => {
  return (
    <>
      <Tabs
        tabs={[
          {
            title: 'Enkel i artikkel',
            content: (
              <Wrapper>
                <OneColumn cssModifier="narrow">
                  <Article
                    //These props will display the messagebox in an article

                    messages={{
                      label: 'Fagstoff',
                    }}
                    article={{
                      title: 'Artikkel fagstoff',
                      introduction:
                        'Du har en kjempegod idé til en kortfilm. Men det koster mange penger å produsere filmen.',
                      published: '24.04.2018',
                      content: () => (
                        <>
                          <p>
                            En pitch er en kortvarig framføring av en idé for en potensiell samarbeidspartner eller
                            kunde. I løpet av noen få minutter skal du få andre til å{' '}
                            <a href="#test">tenne på idéen din og se potensialet</a> i den.
                          </p>
                          <p>
                            En pitch er en kortvarig framføring av en idé for en potensiell samarbeidspartner eller
                            kunde. I løpet av noen få minutter skal du få andre til å tenne på idéen din og se
                            potensialet i den.
                          </p>
                          <p>
                            Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og
                            historien i den filmen du planlegger å lage, tydeligere for både deg selv og dem du
                            eventuelt jobber sammen med i klassen.
                          </p>
                          <p>
                            Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og
                            historien i den filmen du planlegger å lage, tydeligere for både deg selv og dem du
                            eventuelt jobber sammen med i klassen.
                          </p>
                          <FigureImage alt="" src="https://api.staging.ndla.no/image-api/raw/42-45210905.jpg" />
                          <NotionBlock type="image" figureType="full" hideIconsAndAuthors></NotionBlock>
                          <p>
                            En pitch er en kortvarig framføring av en idé for en potensiell samarbeidspartner eller
                            kunde. I løpet av noen få minutter skal du få andre til å tenne på idéen din og se
                            potensialet i den.
                          </p>
                          <p>
                            Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og
                            historien i den filmen du planlegger å lage, tydeligere for både deg selv og dem du
                            eventuelt jobber sammen med i klassen.
                          </p>
                        </>
                      ),
                      footNotes: '',
                      copyright: {
                        license: { license: 'CC-BY-SA-4.0' },
                        creators: [
                          { name: 'Cecilie Isaksen Eftedal' },
                          { name: 'Siv Mundal' },
                          { name: 'Pål Frønsdal' },
                        ],
                        rightsholders: [{ name: 'Riksarkivet' }],
                      },
                    }}
                    licenseBox={<LicenseBox />}
                    competenceGoals={<CompetenceGoalListExample />}
                    competenceGoalTypes={['LK20', 'LK06']}
                    copyPageUrlLink={window.location.href}
                    printUrl={window.location.href}
                    icon={<TasksAndActivitiesBadge background size="large" />}
                    id="mainContentId"
                    locale="nb"
                    modifier={contentTypes.TASKS_AND_ACTIVITIES}
                    notions={{
                      list: [NotionExample],
                    }}
                  />
                </OneColumn>
              </Wrapper>
            ),
          },
          {
            title: 'Liste i artikkel',
            content: (
              <Wrapper>
                <OneColumn cssModifier="narrow">
                  <Article
                    //These props will display the messagebox in an article

                    messages={{
                      label: 'Fagstoff',
                    }}
                    article={{
                      title: 'Artikkel fagstoff',
                      introduction:
                        'Du har en kjempegod idé til en kortfilm. Men det koster mange penger å produsere filmen.',
                      published: '24.04.2018',
                      content: () => (
                        <>
                          <p>
                            En pitch er en kortvarig framføring av en idé for en potensiell samarbeidspartner eller
                            kunde. I løpet av noen få minutter skal du få andre til å{' '}
                            <a href="#test">tenne på idéen din og se potensialet</a> i den.
                          </p>
                          <p>
                            En pitch er en kortvarig framføring av en idé for en potensiell samarbeidspartner eller
                            kunde. I løpet av noen få minutter skal du få andre til å tenne på idéen din og se
                            potensialet i den.
                          </p>
                          <p>
                            Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og
                            historien i den filmen du planlegger å lage, tydeligere for både deg selv og dem du
                            eventuelt jobber sammen med i klassen.
                          </p>
                          <p>
                            Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og
                            historien i den filmen du planlegger å lage, tydeligere for både deg selv og dem du
                            eventuelt jobber sammen med i klassen.
                          </p>
                          <FigureImage alt="" src="https://api.staging.ndla.no/image-api/raw/42-45210905.jpg" />

                          <Figure type="full">
                            <NotionList
                              title="Liste med forklaringer"
                              notions={[{ type: 'image' }, { type: 'h5p' }, { type: 'video' }]}></NotionList>
                          </Figure>
                          <p>
                            En pitch er en kortvarig framføring av en idé for en potensiell samarbeidspartner eller
                            kunde. I løpet av noend få minutter skal du få andre til å tenne på idéen din og se
                            potensialet i den.
                          </p>
                          <p>
                            Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og
                            historien i den filmen du planlegger å lage, tydeligere for både deg selv og dem du
                            eventuelt jobber sammen med i klassen.
                          </p>
                        </>
                      ),
                      footNotes: '',
                      copyright: {
                        license: { license: 'CC-BY-SA-4.0' },
                        creators: [
                          { name: 'Cecilie Isaksen Eftedal' },
                          { name: 'Siv Mundal' },
                          { name: 'Pål Frønsdal' },
                        ],
                        rightsholders: [{ name: 'Riksarkivet' }],
                      },
                    }}
                    licenseBox={<LicenseBox />}
                    competenceGoals={<CompetenceGoalListExample />}
                    competenceGoalTypes={['LK20', 'LK06']}
                    copyPageUrlLink={window.location.href}
                    printUrl={window.location.href}
                    icon={<TasksAndActivitiesBadge background size="large" />}
                    id="mainContentId"
                    locale="nb"
                    modifier={contentTypes.TASKS_AND_ACTIVITIES}
                    notions={{
                      list: [NotionExample],
                    }}
                  />
                </OneColumn>
              </Wrapper>
            ),
          },
        ]}
      />
    </>
  );
};

export default NotionSiteTabs;
