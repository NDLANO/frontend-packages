/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';
import Tooltip from '@ndla/tooltip';
import { DragHorizontal, DeleteForever } from '@ndla/icons/editor';
import { Pencil } from '@ndla/icons/action';
import { spacing, fonts, colors, shadows, animations } from '@ndla/core';
import { createUniversalPortal } from '@ndla/util';
import { Download } from '@ndla/icons/common';

const FILE_HEIGHT = 69;
const FILE_MARGIN = 4;

const StyledFile = styled.li`
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
    &:first-child {
      flex-grow: 1;
    }
    svg {
      width: 18px;
      height: 18px;
    }
    a {
      margin-left: ${spacing.xsmall};
      span {
        text-transform: uppercase;
      }
    }
  }
  ${props => props.delete && css`
    ${animations.fadeOut()}
  `}
`;

const ListWrapper = styled.ul`
  overflow: visible;
  margin: 0;
  padding: 0;
  position: relative;
  list-style: none;
`;

const ButtonIcons = styled.button`
    border: 0;
    background: none;
    color: ${colors.brand.primary};
    width: ${spacing.medium};
    height: ${spacing.medium};
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
    border-radius: 100%;
    transition: background 200ms ease;
    &:hover, &:focus {
      background: ${colors.brand.light};
    }
    ${props => props.delete && css`
      color: ${colors.support.red};
      &:hover, &:focus {
        background: ${colors.support.redLight};
      }
    `}
    ${props => props.draggable && css`
      cursor: grabbing;
    `};
`;

const StyledInput = styled.input`
  height: ${spacing.medium};
  position: absolute;
  z-index: 9999;
  ${fonts.sizes(18, 1.1)};
  font-weight: ${fonts.weight.normal};
  font-family: ${fonts.sans};
`;

/* We need to use a portal so we can edit names when inside Slate editor */

class InputComponent extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }
  componentDidMount() {
    // Get position from props.forwardedRef.
    const rect = this.props.forwardedRef.current.childNodes[this.props.childIndex].firstChild.getBoundingClientRect();
    this.inputRef.current.style.top = `${rect.top + window.scrollY - 15}px`;
    this.inputRef.current.style.left = `${rect.left + spacing.spacingUnit * 0.75}px`;
    this.inputRef.current.style.width = `${rect.width - spacing.spacingUnit}px`;
    this.inputRef.current.focus();
  }

  render() {
    const { forwardedRef, ...rest } = this.props;
    return (
      createUniversalPortal(<StyledInput innerRef={this.inputRef} {...rest} />, 'body')
    );
  }
}

const InputForwardRef = React.forwardRef((props, ref) => {
  return <InputComponent {...props} forwardedRef={ref} />;
});

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
    })
  }
  
  executeDeleteFile() {
    const { files } = this.props;
    files.splice(this.state.deleteIndex, 1);
    this.setState({
      deleteIndex: -1,
    }, () => this.props.onUpdateOrder(files));
  }

  editFile(editFileIndex) {
    this.setState({
      editFileIndex,
    });
  }

  exitEditFileName() {
    this.setState({
      editFileIndex: -1,
    })
  }

  updateTransforms(dragIndex) {
    Array.from(this.filesWrapperRef.current.childNodes.values()).forEach((node, index) => {
      if (index !== this.initialPosition) {
        const value = (index >= dragIndex) ? FILE_HEIGHT : 0;
        node.style.transform = `translateY(${value}px)`; 
      }
    });
  }

  onDragStart(e, dragIndex) {
    e.preventDefault();
    this.mouseMovement = -FILE_HEIGHT + (dragIndex * FILE_HEIGHT);
    this.initialPosition = dragIndex;

    this.updateTransforms(dragIndex);

    this.DraggingFile = this.filesWrapperRef.current.childNodes[dragIndex];
    this.DraggingFile.style.width = `${this.DraggingFile.getBoundingClientRect().width}px`;
    this.DraggingFile.style.position = 'absolute';
    this.DraggingFile.style.top = 0;
    this.DraggingFile.style.zIndex = 9999;
    this.DraggingFile.style.boxShadow = shadows.levitate1;
    this.DraggingFile.style.transform = `translateY(${this.mouseMovement + FILE_HEIGHT}px)`;

    this.setState({
      draggingIndex: dragIndex,
    }, () => {
      // Add transitions
      Array.from(this.filesWrapperRef.current.childNodes.values()).forEach(node => {
        node.style.transition = 'transform 100ms ease';
      });
      this.DraggingFile.style.transition = 'box-shadow 100ms ease';
    });
    
    window.addEventListener('mousemove', this.onDragging);
    window.addEventListener('mouseup', this.onDragEnd);
  }

  onDragEnd() {
    window.removeEventListener('mousemove', this.onDragging);
    window.removeEventListener('mouseup', this.onDragEnd);
    const { files } = this.props;
    // Rearrange files
    const toIndex = this.state.draggingIndex;
    const moveFile = files[this.initialPosition];
    files.splice(this.initialPosition, 1);
    files.splice(toIndex, 0, moveFile);
    this.props.onUpdateOrder(files);

    this.setState({
      draggingIndex: -1,
    });

    Array.from(this.filesWrapperRef.current.childNodes.values()).forEach((node, index) => {
      node.style.transition = 'none';
      node.style.transform = 'none';
    });

    this.DraggingFile.style.width = 'auto';
    this.DraggingFile.style.position = 'static';
    this.DraggingFile.style.zIndex = 0;
    this.DraggingFile.style.boxShadow = 'none';
    
  }

  onDragging(e) {
    this.mouseMovement += e.movementY;
    const currentPosition = Math.max(Math.ceil((this.mouseMovement + (FILE_HEIGHT / 2)) / FILE_HEIGHT), 0);
    const addToPosition = this.initialPosition < currentPosition ? 1 : 0;
    const dragIndex = Math.min(this.props.files.length, Math.max(currentPosition, 0));
    this.DraggingFile.style.transform = `translateY(${this.mouseMovement + FILE_HEIGHT}px)`;
    this.updateTransforms(dragIndex + addToPosition);
    if (this.state.draggingIndex !== dragIndex) {
      this.setState({
        draggingIndex: dragIndex,
      });
    }
  }
  
  render() {
    const { files, onEditFileName, onUpdateOrder } = this.props;
    const { editFileIndex, draggingIndex, deleteIndex } = this.state;

    return (
      <ListWrapper innerRef={this.filesWrapperRef} draggingIndex={draggingIndex} initialPosition={this.initialPosition}>
        {files.map((file, index) => (
          <StyledFile
            key={file.path}
            delete={deleteIndex === index}
            onAnimationEnd={deleteIndex === index ? this.executeDeleteFile : undefined}
          >
            <div>
              {editFileIndex === index ? <InputForwardRef
                ref={this.filesWrapperRef}
                value={file.title}
                childIndex={index}
                type="text"
                placeholder="Oppgi et filnavn"
                onChange={e => {
                  this.props.onEditFileName(index, e.target.value)}
                }
                onKeyDown={e => {
                  if (e.key === 'Enter') {
                    e.target.blur();
                  }
                }}
                onBlur={this.exitEditFileName}
              /> : 
                <Fragment>
                  <Download />
                  <a
                    href={file.path}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {file.title}
                    {` `}
                    <span>({file.type})</span>
                  </a>
                </Fragment>
              }
            </div>
            {onEditFileName && onUpdateOrder && (<div>
              <Tooltip tooltip="Endre navn">
                <ButtonIcons tabIndex={-1} type="button" onClick={() => this.editFile(index)}>
                  <Pencil />
                </ButtonIcons>
              </Tooltip>
              {files.length > 1 && (
                draggingIndex === -1 ?
                  (
                    <Tooltip tooltip="Endre rekkefølge">
                      <ButtonIcons draggable tabIndex={-1} type="button" onMouseDown={e => this.onDragStart(e, index)} onMouseUp={this.onDragEnd}>
                        <DragHorizontal />
                      </ButtonIcons>
                    </Tooltip>
                  ) : (
                    <ButtonIcons draggable tabIndex={-1} type="button" onMouseDown={e => this.onDragStart(e, index)} onMouseUp={this.onDragEnd}>
                      <DragHorizontal />
                    </ButtonIcons>
                  )
              )}
              <Tooltip tooltip="Ta bort fil">
                <ButtonIcons tabIndex={-1} type="button" onClick={() => this.deleteFile(index)} delete>
                  <DeleteForever />
                </ButtonIcons>
              </Tooltip>
            </div>)}
          </StyledFile>
        ))}
      </ListWrapper>
    )
  }
};

FileListEditor.propTypes = {
  files: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.string,
  })),
  sortable: PropTypes.bool,
  onEditFileName: PropTypes.func,
  onUpdateOrder: PropTypes.func,
};

export default FileListEditor;
