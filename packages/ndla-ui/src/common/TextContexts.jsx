/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

export const textAndLabels = {
  nb: {
    topic: {
      heading: 'Emner',
      additionalFilterLabel: 'Vis tilleggsemner',
      dialogTooltip: 'Hva er kjernestoff og tilleggsstoff?',
      dialogHeading: 'Kjernestoff og tilleggsstoff',
      dialogTexts: [
        'Når du lærer deg kjernestoffet skaffer du deg den kompetansen som beskrives i læreplanen for faget.',
        'Tilleggstoff er innhold i faget som du kan velge i tillegg til kjernestoffet. Gjennom tilleggsstoffet kan du fordype deg i et emne eller tilnærme deg emnet på en annen måte.',
      ],
    },
    learningResources: {
      heading: 'Læringsressurser',
      additionalFilterLabel: 'Vis tilleggsressurser',
      dialogTooltip: 'Hva er kjernestoff og tilleggsstoff?',
      dialogHeading: 'Kjernestoff og tilleggsstoff',
      dialogTexts: [
        'Når du lærer deg kjernestoffet skaffer du deg den kompetansen som beskrives i læreplanen for faget.',
        'Tilleggstoff er innhold i faget som du kan velge i tillegg til kjernestoffet. Gjennom tilleggsstoffet kan du fordype deg i et emne eller tilnærme deg emnet på en annen måte.',
      ],
    },
  },
};

const Context = React.createContext('texts');

const ContextProvider = ({ children, lang }) => (
  <Context.Provider value={textAndLabels[lang]}>{children}</Context.Provider>
);

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
  lang: PropTypes.string,
};

ContextProvider.defaultProps = {
  lang: 'nb',
};

const ContextConsumer = Context.Consumer;

export { ContextProvider };
export { ContextConsumer };
