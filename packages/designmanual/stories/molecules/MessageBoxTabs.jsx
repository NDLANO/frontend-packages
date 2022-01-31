/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';

import styled from '@emotion/styled';
import Tabs from '@ndla/tabs';
import { Article, OneColumn, TasksAndActivitiesBadge, constants, PageContainer, Content } from '@ndla/ui';
import MessageBoxSiteExample from '../pages/MessageBoxSiteExample';

import MastheadWithTopicMenu from '../molecules/mastheads';

import { subjectBreadcrumb, topics } from '../../dummydata/mockPrograms';

import backgroundSSR from '../../images/banners/Service-og-samferdsel-black.svg';
import { contentCards } from '../../dummydata';
import SubjectPage from '../pages/SubjectPage';
import { CompetenceGoalListExample } from '../organisms/CompetenceGoalsExample';
import FigureImage from '../article/FigureImage';
import LicenseBox from '../article/LicenseBox';
import NotionExample from '../molecules/NotionExample';
const Wrapper = styled.div`
  margin-top: 200px;
`;

const { contentTypes } = constants;
const MessageBoxTabs = () => {
  return (
    <>
      <Tabs
        tabs={[
          {
            title: 'Utdanningsprogram',
            content: (
              <>
                <MessageBoxSiteExample
                  sticky={true}
                  type="fullpage"
                  message={
                    'Nettleseren din er utdatert. Oppdater den, eller finn en trygg og oppdatert nettleser på https://browsehappy.com.'
                  }></MessageBoxSiteExample>
              </>
            ),
          },

          {
            title: 'Med lenke',
            content: (
              <Wrapper>
                <OneColumn cssModifier="narrow">
                  <Article
                    //These props will display the messagebox in an article
                    messagebox={true}
                    messageForBox={'Dette emnet hører til et fag som ikke er oppdatert etter gjeldende læreplan.'}
                    messageBoxLinks={[
                      //optional if you want links
                      //first prop is the name, second is the link
                      { name: 'link1', href: 'www.facebook.com' },
                      { name: 'link2', href: 'www.facebook.com' },
                      { name: 'link3', href: 'www.facebook.com' },
                    ]}
                    article={{
                      title: 'Fagforside',
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
                    messages={{
                      label:
                        'Denne læringsressursen er ikke oppdatert etter gjeldende læreplan. Du finner en oppdatert versjon her:',
                    }}
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
            title: 'Læringsressurs',
            content: (
              <>
                <PageContainer>
                  <Content>
                    <MastheadWithTopicMenu />

                    <SubjectPage
                      topics={topics}
                      messagebox={'Dette emnet hører til et fag som ikke er oppdatert etter gjeldende læreplan.'} //pass this prop to display a messagebox
                      initialBreadcrumb={subjectBreadcrumb}
                      subjectName="Forretningsdrift (SR Vg1)"
                      bannerBackground={backgroundSSR}
                      subjectContentCards={contentCards}
                      subjectAboutHeading="Om salg, service og reiseliv"
                      subjectAboutDescription="Litt om faget"
                      messageBoxMini="Beta" //Pass this prop to display a tag in the breadcrumblist
                    />
                  </Content>
                </PageContainer>
              </>
            ),
          },
        ]}
      />
    </>
  );
};

export default MessageBoxTabs;
