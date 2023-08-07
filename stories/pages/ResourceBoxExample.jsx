/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import { Article, OneColumn, TasksAndActivitiesBadge, constants, ResourceBox, Figure } from '@ndla/ui';
import LicenseBox from '../article/LicenseBox';
import { CompetenceGoalListExample } from '../organisms/CompetenceGoalsExample';
const { contentTypes } = constants;

const ReferenceBoxExample = () => {
  const Wrapper = styled.div`
    margin-top: 200px;
  `;

  const image = {
    src: 'https://media.snl.no/media/27960/standard_Schaarwa_chter_Henrik_Ibsen_cropped.jpg',
    alt: 'Henrik Ibsen',
  };

  return (
    <Wrapper>
      <OneColumn cssModifier="narrow">
        <Article
          messages={{
            label: 'Fagstoff',
          }}
          article={{
            title: 'Artikkel fagstoff',
            introduction: 'Du har en kjempegod idé til en kortfilm. Men det koster mange penger å produsere filmen.',
            published: '24.04.2018',
            content: () => (
              <>
                <p>
                  En pitch er en kortvarig framføring av en idé for en potensiell samarbeidspartner eller kunde. I løpet
                  av noen få minutter skal du få andre til å <a href="#test">tenne på idéen din og se potensialet</a> i
                  den.
                </p>
                <Figure type={'full'}>
                  <ResourceBox
                    title="Mediehistorie"
                    caption="I dette interaktive oppslagsverket kan du lære om medieutviklingen, kan du lære om medieutviklingen, kan du lære om medieutviklingen. kan du lære om medieutviklingen. "
                    image={image}
                    url="https://www.ndla.no"
                    buttonText="Åpne i nytt vindu"
                  />
                </Figure>

                <p>
                  En pitch er en kortvarig framføring av en idé for en potensiell samarbeidspartner eller kunde. I løpet
                  av noen få minutter skal du få andre til å tenne på idéen din og se potensialet i den.
                </p>
                <p>
                  Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den
                  filmen du planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i
                  klassen.
                </p>
                <p>
                  Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den
                  filmen du planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i
                  klassen.
                </p>
                <p>
                  En pitch er en kortvarig framføring av en idé for en potensiell samarbeidspartner eller kunde. I løpet
                  av noen få minutter skal du få andre til å tenne på idéen din og se potensialet i den.
                </p>
                <p>
                  Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den
                  filmen du planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i
                  klassen.
                </p>
              </>
            ),
            footNotes: '',
            copyright: {
              license: { license: 'CC-BY-SA-4.0' },
              creators: [{ name: 'Frida Forfatter' }, { name: 'Ida Illustratør' }, { name: 'Fred Forfatter' }],
              rightsholders: [{ name: 'Riksarkivet' }],
            },
          }}
          licenseBox={<LicenseBox />}
          competenceGoals={<CompetenceGoalListExample />}
          printUrl={window.location.href}
          icon={<TasksAndActivitiesBadge background size="large" />}
          id="mainContentId"
          modifier={contentTypes.TASKS_AND_ACTIVITIES}
        />
      </OneColumn>
    </Wrapper>
  );
};

export default ReferenceBoxExample;
