/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import Tooltip from '@ndla/tooltip';
import { DragHorizontal, DeleteForever } from '@ndla/icons/editor';
import { Pencil } from '@ndla/icons/action';
import { spacing, fonts, colors, shadows, animations } from '@ndla/core';
import FileNameInput from './FileNameInput';

const FILE_HEIGHT = 69;
const FILE_MARGIN = 4;

const fileCss = css`
  margin: ${FILE_MARGIN}px 0 0;
  padding: 0;
  background: ${colors.brand.greyLighter};
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${FILE_HEIGHT - FILE_MARGIN}px;
  max-width: 100%;
  box-sizing: border-box;
  ${fonts.sizes(18, 1.1)};
  font-weight: ${fonts.weight.semibold};
  font-family: ${fonts.sans};
  > div {
    display: flex;
    align-items: center;
    padding: 0 ${spacing.small} 0 calc(${spacing.small} + ${spacing.xsmall});
    &:first-of-type {
      flex-grow: 1;
    }
    svg {
      width: 18px;
      height: 18px;
    }
  }
`;

const fileErrorCss = css`
  background: ${colors.support.redLight};
  > div:first-of-type button {
    color: ${colors.support.red};
  }
`;

const ListWrapper = styled.ul`
  overflow: visible;
  margin: 0 0
    ${props =>
      props.draggingIndex > -1
        ? `${FILE_HEIGHT + spacing.spacingUnit * 0.75}px`
        : '0'};
  padding: 0;
  position: relative;
  list-style: none;
`;

const ButtonIcons = styled.button`
  border: 0;
  background: none;
  color: ${props => (props.delete ? colors.support.red : colors.brand.primary)};
  width: ${spacing.medium};
  height: ${spacing.medium};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  border-radius: 100%;
  transition: background 200ms ease;
  cursor: ${props => (props.draggable ? 'grabbing' : 'auto')};

  &:hover,
  &:focus {
    background: ${props =>
      props.delete ? colors.support.redLight : colors.brand.light};
  }
`;

const fadeOutAnimation = css`
  ${animations.fadeOut()}
`;

class FileListEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editFileIndex: -1,
      draggingIndex: -1,
      deleteIndex: -1,
    };
    this.filesWrapperRef = React.createRef();
    this.exitEditFileName = this.exitEditFileName.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
    this.onDragging = this.onDragging.bind(this);
    this.executeDeleteFile = this.executeDeleteFile.bind(this);
  }

  deleteFile(deleteIndex) {
    this.setState({
      deleteIndex,
    });
  }

  executeDeleteFile() {
    this.props.onDeleteFile(this.state.deleteIndex);
    this.setState({
      deleteIndex: -1,
    });
  }

  editFile(e, editFileIndex) {
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      editFileIndex,
    });
  }

  exitEditFileName() {
    this.setState({
      editFileIndex: -1,
    });
  }

  updateTransforms(dragIndex) {
    Array.from(this.filesWrapperRef.current.childNodes.values()).forEach(
      (node, index) => {
        if (index !== this.initialPosition) {
          const value = index >= dragIndex ? FILE_HEIGHT : 0;
          node.style.transform = `translateY(${value}px)`;
        }
      },
    );
  }

  onDragStart(e, dragIndex) {
    e.preventDefault();
    this.mouseMovement = -FILE_HEIGHT + dragIndex * FILE_HEIGHT;
    this.initialPosition = dragIndex;
    this.updateTransforms(dragIndex);

    this.DraggingFile = this.filesWrapperRef.current.childNodes[dragIndex];
    this.DraggingFile.style.width = `${
      this.DraggingFile.getBoundingClientRect().width
    }px`;
    this.DraggingFile.style.position = 'absolute';
    this.DraggingFile.style.top = 0;
    this.DraggingFile.style.zIndex = 9999;
    this.DraggingFile.style.boxShadow = shadows.levitate1;
    this.DraggingFile.style.transform = `translateY(${this.mouseMovement +
      FILE_HEIGHT}px)`;

    this.setState(
      {
        draggingIndex: dragIndex,
      },
      () => {
        // Add transitions
        Array.from(this.filesWrapperRef.current.childNodes.values()).forEach(
          node => {
            node.style.transition = 'transform 100ms ease';
          },
        );
        this.DraggingFile.style.transition = 'box-shadow 100ms ease';
      },
    );

    window.addEventListener('mousemove', this.onDragging);
    window.addEventListener('mouseup', this.onDragEnd);
  }

  onDragEnd() {
    window.removeEventListener('mousemove', this.onDragging);
    window.removeEventListener('mouseup', this.onDragEnd);

    this.props.onMovedFile(this.initialPosition, this.state.draggingIndex);
    this.setState({
      draggingIndex: -1,
    });

    Array.from(this.filesWrapperRef.current.childNodes.values()).forEach(
      (node, index) => {
        node.style.transition = 'none';
        node.style.transform = 'none';
      },
    );

    this.DraggingFile.style.width = 'auto';
    this.DraggingFile.style.position = 'static';
    this.DraggingFile.style.zIndex = 0;
    this.DraggingFile.style.boxShadow = 'none';
  }

  onDragging(e) {
    this.mouseMovement += e.movementY;
    const currentPosition = Math.max(
      Math.ceil((this.mouseMovement + FILE_HEIGHT / 2) / FILE_HEIGHT),
      0,
    );
    const addToPosition = this.initialPosition < currentPosition ? 1 : 0;
    const dragIndex = Math.min(
      this.props.files.length,
      Math.max(currentPosition, 0),
    );
    this.DraggingFile.style.transform = `translateY(${this.mouseMovement +
      FILE_HEIGHT}px)`;
    this.updateTransforms(dragIndex + addToPosition);
    if (this.state.draggingIndex !== dragIndex) {
      this.setState({
        draggingIndex: dragIndex,
      });
    }
  }

  render() {
    const { files, onEditFileName, usePortal, messages } = this.props;
    const { editFileIndex, draggingIndex, deleteIndex } = this.state;

    return (
      <ListWrapper ref={this.filesWrapperRef} draggingIndex={draggingIndex}>
        {files.map((file, index) => (
          <li
            key={file.path}
            css={[
              fileCss,
              deleteIndex === index && fadeOutAnimation,
              editFileIndex !== index && file.title === '' && fileErrorCss,
            ]}
            onAnimationEnd={
              deleteIndex === index ? this.executeDeleteFile : undefined
            }>
            <FileNameInput
              useRef={this.filesWrapperRef}
              file={file}
              editMode={editFileIndex === index}
              value={file.title}
              childIndex={index}
              usePortal={usePortal}
              type="text"
              placeholder={messages.placeholder}
              onChange={e => {
                onEditFileName(index, e.target.value);
              }}
              onKeyDown={e => {
                if (e.key === 'Enter') {
                  e.target.blur();
                }
              }}
              onBlur={this.exitEditFileName}
            />
            <div>
              <Tooltip tooltip={messages.changeName}>
                <ButtonIcons
                  tabIndex={-1}
                  type="button"
                  onClick={e => this.editFile(e, index)}>
                  <Pencil />
                </ButtonIcons>
              </Tooltip>
              {files.length > 1 &&
                (draggingIndex === -1 ? (
                  <Tooltip tooltip={messages.changeOrder}>
                    <ButtonIcons
                      draggable
                      tabIndex={-1}
                      type="button"
                      onMouseDown={e => this.onDragStart(e, index)}
                      onMouseUp={this.onDragEnd}>
                      <DragHorizontal />
                    </ButtonIcons>
                  </Tooltip>
                ) : (
                  <ButtonIcons
                    draggable
                    tabIndex={-1}
                    type="button"
                    onMouseDown={e => this.onDragStart(e, index)}
                    onMouseUp={this.onDragEnd}>
                    <DragHorizontal />
                  </ButtonIcons>
                ))}
              <Tooltip tooltip={messages.removeFile}>
                <ButtonIcons
                  tabIndex={-1}
                  type="button"
                  onClick={() => this.deleteFile(index)}
                  delete>
                  <DeleteForever />
                </ButtonIcons>
              </Tooltip>
            </div>
          </li>
        ))}
      </ListWrapper>
    );
  }
}

FileListEditor.propTypes = {
  files: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string,
      title: PropTypes.string,
      type: PropTypes.string,
    }),
  ),
  sortable: PropTypes.bool,
  onEditFileName: PropTypes.func.isRequired,
  onDeleteFile: PropTypes.func.isRequired,
  onMovedFile: PropTypes.func.isRequired,
  usePortal: PropTypes.bool,
};

export default FileListEditor;
