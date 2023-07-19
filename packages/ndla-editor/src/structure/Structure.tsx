/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { Spinner } from '@ndla/icons';
import ItemNameBar from './ItemNameBar';
import Fade from './Fade';

const StructureWrapper = styled.ul`
  margin: 0;
  padding: 0;
`;

interface StyledStructureItemProps {
  greyedOut?: boolean;
  connectionId?: string;
}

const StyledSpinner = styled(Spinner)`
  margin: 4px 26px;
`;

const StyledStructureItem = styled.li<StyledStructureItemProps>`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  ${(props) =>
    props.greyedOut &&
    css`
      > div > button {
        color: rgb(32, 88, 143, 0.5);
      }
    `};
`;

export type RenderBeforeFunction = (input: {
  id: string;
  title: string;
  isSubject: boolean;
  contentUri?: string;
}) => ReactNode;

interface Props {
  structure?: StructureType[];
  openedPaths: string[];
  renderListItems: (props: RenderItemReturnProps) => ReactNode;
  favoriteSubjectIds?: string[];
  toggleFavorite?: (subjectId: string) => void;
  isOpen?: boolean;
  isMainActive?: boolean;
  toggleOpen: (subject: { path: string; isSubject: boolean; id: string }) => void;
  highlightMainActive?: boolean;
  currentPath?: string[];
  renderBeforeTitles?: RenderBeforeFunction;
}

interface MetaData {
  grepCodes: string[];
  visible: boolean;
  customFields: Record<string, string>;
}

interface Topic {
  id: string;
  name: string;
  metadata: MetaData;
  contentUri: string;
  isPrimary: boolean;
  relevanceId?: string;
  parent: string;
  path: string;
  connectionId?: string;
  subtopics?: Topic[];
  rank: number;
}

interface StructureType {
  id: string;
  name: string;
  metadata: MetaData;
  contentUri: string;
  path: string;
  loading?: boolean;
  connectionId?: string;
  topics?: Topic[];
  subtopics?: Topic[];
}

interface RenderItemReturnProps {
  pathToString: string;
  isSubject: boolean;
  subjectId: string;
  isOpen: boolean;
  id: string;
  name: string;
  metadata: MetaData;
  isMainActive: boolean;
  contentUri: string;
  path: string;
  parent?: string;
}

const Structure = ({
  renderListItems,
  structure = [],
  openedPaths,
  toggleOpen,
  highlightMainActive,
  currentPath = [],
  isMainActive,
  isOpen,
  favoriteSubjectIds,
  toggleFavorite,
  renderBeforeTitles,
}: Props) => {
  const isSubject = currentPath.length === 0;
  return (
    <StructureWrapper>
      <Fade show={isOpen} fadeType="fadeInTop">
        {structure.map(({ id, connectionId, name, topics, subtopics, loading, metadata, contentUri, ...rest }) => {
          const currentPathIds = [...currentPath, id];
          const children = topics || subtopics;
          const pathToString = currentPathIds.join('/');
          const parentId = currentPath.slice(-1);
          const isOpen = openedPaths.includes(pathToString);
          const isNewMainActive = openedPaths.slice(-1).pop() === pathToString;
          const greyedOut = highlightMainActive
            ? !isNewMainActive && !isMainActive && openedPaths.length > 0
            : !isOpen && isSubject && openedPaths.length > 0;
          const isVisible = metadata !== undefined ? metadata.visible : true;
          return (
            <StyledStructureItem connectionId={connectionId} key={pathToString} greyedOut={greyedOut}>
              <ItemNameBar
                renderBeforeTitle={renderBeforeTitles}
                highlight={highlightMainActive ? isNewMainActive : isOpen && isSubject}
                isOpen={isOpen}
                title={name}
                level={currentPath.length}
                lastItemClickable={highlightMainActive}
                path={pathToString}
                id={id.includes('topic') ? `${parentId}/${id}` : id}
                hasSubtopics={!!children || isSubject}
                contentUri={contentUri}
                toggleOpen={() =>
                  toggleOpen({
                    path: pathToString,
                    isSubject,
                    id,
                  })
                }
                isSubject={isSubject}
                isVisible={isVisible}
                favoriteSubjectIds={favoriteSubjectIds}
                taxonomyId={id}
                toggleFavorite={() => toggleFavorite?.(id)}
              >
                {renderListItems &&
                  renderListItems({
                    pathToString,
                    isSubject,
                    subjectId: currentPathIds[0],
                    isOpen,
                    id,
                    name,
                    metadata,
                    isMainActive: isNewMainActive,
                    contentUri,
                    ...rest,
                  })}
              </ItemNameBar>
              {loading ? (
                <span>
                  <StyledSpinner size="normal" />
                </span>
              ) : (
                <Structure
                  structure={children}
                  currentPath={currentPathIds}
                  openedPaths={openedPaths}
                  toggleOpen={toggleOpen}
                  renderListItems={renderListItems}
                  highlightMainActive={highlightMainActive}
                  isMainActive={isNewMainActive}
                  isOpen={isOpen}
                  renderBeforeTitles={renderBeforeTitles}
                />
              )}
            </StyledStructureItem>
          );
        })}
      </Fade>
    </StructureWrapper>
  );
};

export default Structure;
