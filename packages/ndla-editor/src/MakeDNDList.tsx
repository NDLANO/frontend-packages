import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { colors } from '@ndla/core';
import { css } from '@emotion/core';
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
  children: React.ReactNode;
  onDragEnd: () => {};
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
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            css={snapshot.isDraggingOver && dropZone}>
            {React.Children.map(children, (child, index) => {
              if (!child) {
                return null;
              }
              return (
                <Draggable
                  key={child.props.id}
                  draggableId={child.props.id}
                  index={index}>
                  {(providedInner, snapshotInner) => (
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
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default MakeDndList;
