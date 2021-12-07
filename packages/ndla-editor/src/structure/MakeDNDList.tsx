import { Children, ReactElement } from 'react';
import {
  DragDropContext,
  Droppable,
  Draggable,
  DraggableProvided,
  DroppableProvided,
  DroppableStateSnapshot,
  DraggableStateSnapshot,
  DropResult,
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
  position: relative;
  align-items: center;
`;

const draggingStyle = css`
  background: white;
  border: 1px solid ${colors.brand.greyLight};
`;

type Props = {
  disableDND: boolean;
  children: ReactElement<{ id: string; connectionId: string }>[];
  onDragEnd: (result: DropResult) => void;
  dragHandle: boolean;
};

const MakeDndList = ({ disableDND, children, onDragEnd, dragHandle }: Props) => {
  if (disableDND) {
    return <>{children}</>;
  }
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided: DroppableProvided, snapshot: DroppableStateSnapshot): ReactElement => (
          <div ref={provided.innerRef} css={snapshot.isDraggingOver && dropZone}>
            {Children.map(children, (child: ReactElement<{ id: string; connectionId: string }>, index: number) => {
              if (!child) {
                return null;
              }
              return (
                <Draggable key={child.props.id} draggableId={child.props.connectionId} index={index}>
                  {(providedInner: DraggableProvided, snapshotInner: DraggableStateSnapshot) => (
                    <div
                      ref={providedInner.innerRef}
                      {...providedInner.draggableProps}
                      {...(dragHandle ? {} : providedInner.dragHandleProps)}
                      css={[dragHandleWrapperStyle, snapshotInner.isDragging && draggingStyle]}>
                      {dragHandle && (
                        <div css={{ position: 'absolute' }} {...providedInner.dragHandleProps}>
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
