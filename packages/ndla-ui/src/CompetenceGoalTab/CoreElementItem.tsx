/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useTranslation } from 'react-i18next';
import { CoreElementsItemType } from '../types';
import SearchButton from './SearchButton';
import { GoalItem, GoalList, GoalText, GoalsHeading, ListItemContent } from './styles';

const CoreElementItem = ({ title, text, url, id, isOembed }: CoreElementsItemType) => {
  const { t } = useTranslation();
  return (
    <GoalItem>
      <GoalsHeading>{title}</GoalsHeading>
      <GoalList>
        <li>
          <ListItemContent>
            <GoalText>{text}</GoalText>
            {url && (
              <SearchButton
                url={url}
                isOembed={isOembed}
                searchText={t('competenceGoals.coreResourceSearchText', { code: id })}
              />
            )}
          </ListItemContent>
        </li>
      </GoalList>
    </GoalItem>
  );
};

export default CoreElementItem;
