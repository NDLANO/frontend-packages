/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import React, { Children, cloneElement, ReactElement } from 'react';
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
  ResponderProvided,
  resetServerContext,
} from 'react-beautiful-dnd';
import { spacing } from '@ndla/core';

interface StyledDropZoneProps {
  dragging?: boolean;
}

const StyledDropZone = styled.div<StyledDropZoneProps>`
  background-color: ${(p) => p.dragging && '#ddd'};
  display: flex;
  flex-direction: column;
  gap: ${spacing.xsmall};
`;

interface Props {
  children: ReactElement[];
  disableDND: boolean;
  onDragEnd: (result: DropResult, provided: ResponderProvided) => void;
  dragHandle: boolean;
  isServer: boolean;
}

const MakeDNDList = ({ disableDND, children, onDragEnd, dragHandle, isServer }: Props) => {
  if (disableDND) {
    return <>{children}</>;
  }

  if (isServer) {
    // `react-beautiful-dnd` wants this to only run on server
    resetServerContext();
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <StyledDropZone ref={provided.innerRef} dragging={snapshot.isDraggingOver}>
            {Children.map(children, (child, index) => {
              if (!child) return null;

              return (
                <Draggable key={child.props.id} draggableId={child.props.id} index={index}>
                  {(providedInner, snapshotInner) => (
                    <div
                      ref={providedInner.innerRef}
                      {...providedInner.draggableProps}
                      {...(dragHandle ? {} : providedInner.dragHandleProps)}>
                      {cloneElement(child, {
                        isDragging: snapshotInner.isDragging,
                        dragHandleProps: providedInner.dragHandleProps,
                      })}
                    </div>
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </StyledDropZone>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default MakeDNDList;
