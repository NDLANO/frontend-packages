/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { CoreElementsItemType } from '../types';
import SearchButton from './SearchButton';
import { GoalItem, GoalList, GoalText, GoalsHeading, ListItemContent } from './styles';

const CoreElementItem = ({ title, text, url, id, isOembed }: CoreElementsItemType) => {
  return (
    <GoalItem>
      <GoalsHeading>{title}</GoalsHeading>
      <GoalList>
        <li>
          <ListItemContent>
            <GoalText>{text}</GoalText>
            {url && <SearchButton url={url} id={id} variant="coreElement" isOembed={isOembed} />}
          </ListItemContent>
        </li>
      </GoalList>
    </GoalItem>
  );
};

export default CoreElementItem;
