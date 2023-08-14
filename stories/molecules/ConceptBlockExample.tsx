/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useEffect, useMemo } from 'react';
import { Article, OneColumn, TasksAndActivitiesBadge, constants } from '@ndla/ui';
// @ts-ignore
import { Remarkable } from 'remarkable';

// @ts-ignore
import { initArticleScripts } from '@ndla/article-scripts';
//@ts-ignore
import FigureImage from '../article/FigureImage';
//@ts-ignore
import { CompetenceGoalListExample } from '../organisms/CompetenceGoalsExample';
//@ts-ignore
import LicenseBox from '../article/LicenseBox';
import NotionBlock from './NotionBlock';

const { contentTypes } = constants;

const ConceptBlockExample = () => {
  const markdown = useMemo(() => {
    const md = new Remarkable({ breaks: true });
    md.inline.ruler.enable(['sub', 'sup']);
    md.block.ruler.disable(['list']);
    return md;
  }, []);

  useEffect(() => {
    initArticleScripts();
  }, []);

  return (
    <OneColumn cssModifier="narrow">
      <Article
        renderMarkdown={(text: string) => markdown.render(text)}
        messages={{
          label: 'Fagstoff',
        }}
        article={{
          title: 'Artikkel fagstoff',
          introduction: 'Du har en kjempegod idé til en kortfilm. Men det koster mange penger å produsere filmen.',
          published: '24.04.2018',
          content: (
            <>
              <p>
                En pitch er en kortvarig framføring av en idé for en potensiell samarbeidspartner eller kunde. I løpet
                av noen få minutter skal du få andre til å <a href="#test">tenne på idéen din og se potensialet</a> i
                den.
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
              <p>
                Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den
                filmen du planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i
                klassen.
              </p>
              <FigureImage alt="" src="https://api.staging.ndla.no/image-api/raw/42-45210905.jpg" />
              <NotionBlock type="image" figureType="full" hideIconsAndAuthors></NotionBlock>
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
          footNotes: [],
          copyright: {
            license: { license: 'CC-BY-SA-4.0' },
            creators: [
              { name: 'Frida Forfatter', type: 'author' },
              { name: 'Ida Illustratør', type: 'author' },
              { name: 'Fred Forfatter', type: 'author' },
            ],
            rightsholders: [{ name: 'Riksarkivet', type: 'rightsholder' }],
            processors: [],
          },
        }}
        licenseBox={<LicenseBox />}
        competenceGoals={<CompetenceGoalListExample />}
        icon={<TasksAndActivitiesBadge background size="large" />}
        id="mainContentId"
        modifier={contentTypes.TASKS_AND_ACTIVITIES}
      />
    </OneColumn>
  );
};

export default ConceptBlockExample;
