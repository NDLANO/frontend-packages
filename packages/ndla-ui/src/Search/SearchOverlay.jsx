import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { Cross } from 'ndla-icons/action';
import {
  TasksAndActivitiesBadge,
  LearningPathBadge,
  SubjectMaterialBadge,
  AssessmentResourcesBadge,
} from '../ContentTypeBadge';

import SearchField from './SearchField';

const classes = BEMHelper({
  prefix: 'c-',
  name: 'search-overlay',
});

const SearchOverlay = ({ close }) => (
  <Fragment>
    <div className="o-backdrop" />
    <div {...classes()}>
      <div {...classes('container o-wrapper')}>
        <SearchField
          value="Test"
          onChange={() => {}}
          filters={[
            { value: 'Value', display: 'Medieuttrykk og mediesamfunn' },
          ]}
          onFilterRemove={() => {}}
          messages={{
            allContentTypeResultLabel: 'Se alle',
            allResultLabel: 'Se alle søkeresultat for:',
          }}
          allResultUrl="#"
          autocompleteResult={[
            {
              title: 'Læringsstier',
              icon: <LearningPathBadge size="x-small" />,
              totalCount: 2,
              items: [
                {
                  url: '#1',
                  display: 'Mediemakt',
                },
                {
                  url: '#2',
                  display: 'Media som dne fjerde statsmakt',
                },
              ],
            },
            {
              title: 'Oppgaver og aktiviteter',
              icon: <TasksAndActivitiesBadge size="x-small" />,
              totalCount: 5,
              items: [
                {
                  url: '#1',
                  display: 'Hvem har mediemakt i dag?',
                },
              ],
            },
            {
              title: 'Fagartikler',
              icon: <SubjectMaterialBadge size="x-small" />,
              totalCount: 2,
              showAllLinkUrl: '#',
              items: [
                {
                  url: '#1',
                  display: 'Hva er makt?',
                },
                {
                  url: '#2',
                  display: 'Maktfordelingsprinsippet',
                },
              ],
            },
            {
              title: 'Vurderingsressurser',
              icon: <AssessmentResourcesBadge size="x-small" />,
              totalCount: 1,
              items: [
                {
                  url: '#1',
                  display: 'Vurdering i Mediestruktur',
                },
              ],
            },
          ]}
        />
      </div>
      <button {...classes('close-button')} onClick={close}>
        <Cross />
      </button>
    </div>
  </Fragment>
);

SearchOverlay.propTypes = {
  close: PropTypes.func.isRequired,
};

export default SearchOverlay;
