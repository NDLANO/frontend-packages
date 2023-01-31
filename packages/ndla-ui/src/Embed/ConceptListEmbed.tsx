/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import { ConceptListMetaData } from '@ndla/types-embed';
import { Figure } from '../Figure';
import { BlockConcept } from './ConceptEmbed';

interface Props {
  embed: ConceptListMetaData;
}

const ConceptList = styled.div`
  & > figure:first-of-type {
    margin-top: 32px;
  }
  & li {
    display: block;
  }
`;

const ConceptListEmbed = ({ embed }: Props) => {
  if (embed.status === 'error') {
    return <div>Failed to load concept list</div>;
  }
  const { embedData, data } = embed;
  return (
    <div>
      <Figure type="full" resizeIframe>
        {embedData.title && <h2>{embedData.title}</h2>}
        <ConceptList>
          <ul>
            {data.concepts.map(({ concept, visualElement }) => (
              <li key={concept.id}>
                <BlockConcept
                  title={concept.title.title}
                  content={concept.content.content}
                  metaImage={concept.metaImage}
                  copyright={concept.copyright}
                  source={concept.source}
                  visualElement={visualElement}
                />
              </li>
            ))}
          </ul>
        </ConceptList>
      </Figure>
    </div>
  );
};

export default ConceptListEmbed;
