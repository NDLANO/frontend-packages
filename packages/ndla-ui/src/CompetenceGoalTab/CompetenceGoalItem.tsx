/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useTranslation } from "react-i18next";
import SearchButton from "./SearchButton";
import { GoalItem, GoalList, GoalText, GoalsHeading, ListItemContent } from "./styles";
import { CompetenceGoalsItemType } from "../types";

const CompetenceGoalItem = ({ title, goals, isOembed }: CompetenceGoalsItemType) => {
  const { t } = useTranslation();
  return (
    <GoalItem>
      <GoalsHeading>{title}</GoalsHeading>
      <GoalList>
        {goals.map((goal, index) => (
          <li key={`${goal.text}${index}`}>
            <ListItemContent>
              <GoalText>{goal.text}</GoalText>
              {goal.url && (
                <SearchButton
                  url={goal.url}
                  isOembed={isOembed}
                  searchText={t("competenceGoals.competenceGoalResourceSearchText", { code: goal.id })}
                />
              )}
            </ListItemContent>
          </li>
        ))}
      </GoalList>
    </GoalItem>
  );
};

export default CompetenceGoalItem;
