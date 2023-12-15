/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import { spacing, mq, breakpoints } from '@ndla/core';
import { Search } from '@ndla/icons/common';
import { SafeLinkButton } from '@ndla/safelink';

const StyledSearch = styled(Search)`
  height: ${spacing.normal};
  width: ${spacing.normal};
  min-width: ${spacing.normal};
`;

const GoalSearchWrapper = styled.div`
  margin-left: ${spacing.normal};
  flex: 0 0 30%;
  span {
    text-align: left;
  }

  ${mq.range({ until: breakpoints.tabletWide })} {
    margin-left: 0;
    margin-top: ${spacing.normal};
    flex-basis: auto;
  }
`;

interface SearchButtonProps {
  url: string;
  searchText: string;
  isOembed?: boolean;
}

const SearchButton = ({ url, isOembed, searchText }: SearchButtonProps) => {
  return (
    <GoalSearchWrapper>
      <SafeLinkButton variant="outline" to={url} target={isOembed ? '_blank' : '_self'}>
        <StyledSearch size="24" />
        <span>{searchText}</span>
      </SafeLinkButton>
    </GoalSearchWrapper>
  );
};
export default SearchButton;
