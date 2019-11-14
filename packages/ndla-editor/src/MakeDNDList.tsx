import React from 'react';
import {
  DragDropContext,
  Droppable,
  Draggable,
  DraggableProvided,
  DroppableProvided,
  DroppableStateSnapshot,
  DraggableStateSnapshot,
} from 'react-beautiful-dnd';

import { colors } from '@ndla/core';
import { css } from '@emotion/core';
// @ts-ignore
import { DragHorizontal } from '@ndla/icons/editor';

const dropZone = css`
  background-color: ${colors.brand.greyLight};
`;

const dragHandleWrapperStyle = css`
  display: flex;
  align-items: center;
`;

const dragHandleStyle = css`
  margin: 0 40px 0 -40px;
`;

const draggingStyle = css`
  background: white;
  border: 1px solid ${colors.brand.greyLight};
`;

type Props = {
  disableDND: boolean;
  children: React.Component<{ id: string; connectionId: string }>;
  onDragEnd: VoidFunction;
  dragHandle: boolean;
};

const MakeDndList = ({
  disableDND,
  children,
  onDragEnd,
  dragHandle,
}: Props) => {
  if (disableDND) {
    return <React.Fragment>{children}</React.Fragment>;
  }
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(
          provided: DroppableProvided,
          snapshot: DroppableStateSnapshot,
        ): React.ReactElement => (
          <div
            ref={provided.innerRef}
            css={snapshot.isDraggingOver && dropZone}>
            {React.Children.map(
              children,
              (
                child: React.Component<{ id: string; connectionId: string }>,
                index: number,
              ): React.ReactElement | null => {
                if (!child) {
                  return null;
                }
                return (
                  <Draggable
                    key={child.props.id}
                    draggableId={child.props.connectionId}
                    index={index}>
                    {(
                      providedInner: DraggableProvided,
                      snapshotInner: DraggableStateSnapshot,
                    ) => (
                      <div
                        ref={providedInner.innerRef}
                        {...providedInner.draggableProps}
                        {...(dragHandle ? {} : providedInner.dragHandleProps)}
                        css={[
                          dragHandleWrapperStyle,
                          snapshotInner.isDragging && draggingStyle,
                        ]}>
                        {dragHandle && (
                          <div
                            css={dragHandleStyle}
                            {...providedInner.dragHandleProps}>
                            <DragHorizontal />
                          </div>
                        )}
                        {child}
                      </div>
                    )}
                  </Draggable>
                );
              },
            )}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default MakeDndList;
