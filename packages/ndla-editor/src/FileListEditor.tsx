/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Component, MouseEvent as ReactMouseEvent, createRef, MutableRefObject } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { spacing, spacingUnit, fonts, colors, shadows, animations } from "@ndla/core";
import { CheckboxItem } from "@ndla/forms";
import { Pencil } from "@ndla/icons/action";
import { DragHorizontal, DeleteForever } from "@ndla/icons/editor";
import Tooltip from "@ndla/tooltip";
import FileNameInput from "./FileNameInput";

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
    padding: 0 ${spacing.small} 0 ${spacing.small};
    &:first-of-type {
      flex-basis: 0;
      flex-shrink: 1;
      min-width: 0;
      flex-grow: 1;
      padding-left: calc(${spacing.small} + ${spacing.xsmall});
    }
    &:last-of-type {
      padding-left: ${spacing.xsmall};
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

interface ListWrapperProps {
  draggingIndex: number;
}

const ListWrapper = styled.ul<ListWrapperProps>`
  overflow: visible;
  margin: 0 0 ${(props) => (props.draggingIndex > -1 ? `${FILE_HEIGHT + spacingUnit * 0.75}px` : "0")};
  padding: 0;
  position: relative;
  list-style: none;
`;

interface ButtonIconsProps {
  delete?: boolean;
  draggable?: boolean;
}
const ButtonIcons = styled.button<ButtonIconsProps>`
  border: 0;
  background: none;
  color: ${(props) => (props.delete ? colors.support.red : colors.brand.primary)};
  width: ${spacing.medium};
  height: ${spacing.medium};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  border-radius: 100%;
  transition: background 200ms ease;
  cursor: ${(props) => (props.draggable ? "grabbing" : "auto")};

  &:hover,
  &:focus {
    background: ${(props) => (props.delete ? colors.support.redLight : colors.brand.light)};
  }
`;

const fadeOutAnimation = css`
  ${animations.fadeOut()}
`;

const checkboxStyle = css`
  label > span {
    white-space: nowrap;
  }
`;

export interface File {
  path: string;
  title: string;
  type: string;
  display?: string;
  url: string;
}

export interface FileListMessages {
  placeholder: string;
  changeName: string;
  changeOrder: string;
  removeFile: string;
  missingFileTooltip: string;
  missingTitle: string;
  checkboxLabel: string;
  checkboxTooltip: string;
}

interface Props {
  files: File[];
  missingFilePaths: string[];
  sortable?: boolean;
  showRenderInlineCheckbox?: boolean;
  onEditFileName: (index: number, value: string) => void;
  onDeleteFile: (indexToDelete: number) => void;
  onMovedFile: (fromIndex: number, toIndex: number) => void;
  onToggleRenderInline: (index: number) => void;
  usePortal?: boolean;
  messages: FileListMessages;
}

interface State {
  editFileIndex: number;
  draggingIndex: number;
  deleteIndex: number;
}

class FileListEditor extends Component<Props, State> {
  filesWrapperRef: MutableRefObject<HTMLUListElement | null>;
  initialPosition: number;
  mouseMovement: number;
  DraggingFile: HTMLLIElement | undefined;
  constructor(props: Props) {
    super(props);
    this.state = {
      editFileIndex: -1,
      draggingIndex: -1,
      deleteIndex: -1,
    };
    this.mouseMovement = 0;
    this.initialPosition = -1;
    this.filesWrapperRef = createRef();
    this.exitEditFileName = this.exitEditFileName.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
    this.onDragging = this.onDragging.bind(this);
    this.executeDeleteFile = this.executeDeleteFile.bind(this);
  }

  deleteFile(deleteIndex: number) {
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

  editFile(e: ReactMouseEvent<HTMLButtonElement>, editFileIndex: number) {
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

  updateTransforms(dragIndex: number) {
    const childNodes = this.filesWrapperRef.current?.childNodes as NodeListOf<HTMLLIElement> | undefined;
    childNodes?.forEach((node, index) => {
      if (index !== this.initialPosition) {
        const value = index >= dragIndex ? FILE_HEIGHT : 0;
        node.style.transform = `translateY(${value}px)`;
      }
    });
  }

  onDragStart(e: ReactMouseEvent<HTMLButtonElement>, dragIndex: number) {
    e.preventDefault();
    this.mouseMovement = -FILE_HEIGHT + dragIndex * FILE_HEIGHT;
    this.initialPosition = dragIndex;
    this.updateTransforms(dragIndex);

    const childNodes = this.filesWrapperRef.current?.childNodes as NodeListOf<HTMLLIElement> | undefined;

    this.DraggingFile = childNodes?.[dragIndex];
    if (this.DraggingFile) {
      this.DraggingFile.style.width = `${this.DraggingFile.getBoundingClientRect().width}px`;
      this.DraggingFile.style.position = "absolute";
      this.DraggingFile.style.top = "0";
      this.DraggingFile.style.zIndex = "9999";
      this.DraggingFile.style.boxShadow = shadows.levitate1;
      this.DraggingFile.style.transform = `translateY(${this.mouseMovement + FILE_HEIGHT}px)`;
    }

    this.setState(
      {
        draggingIndex: dragIndex,
      },
      () => {
        // Add transitions
        childNodes?.forEach((node) => {
          node.style.transition = "transform 100ms ease";
        });
        if (this.DraggingFile) {
          this.DraggingFile.style.transition = "box-shadow 100ms ease";
        }
      },
    );

    window.addEventListener("mousemove", this.onDragging);
    window.addEventListener("mouseup", this.onDragEnd);
  }

  onDragEnd() {
    window.removeEventListener("mousemove", this.onDragging);
    window.removeEventListener("mouseup", this.onDragEnd);
    const childNodes = this.filesWrapperRef.current?.childNodes as NodeListOf<HTMLLIElement> | undefined;

    if (this.state.draggingIndex !== -1) {
      this.props.onMovedFile(this.initialPosition, this.state.draggingIndex);
    }

    this.setState({
      draggingIndex: -1,
    });

    childNodes?.forEach((node) => {
      node.style.transition = "none";
      node.style.transform = "none";
    });
    if (this.DraggingFile) {
      this.DraggingFile.style.width = "auto";
      this.DraggingFile.style.position = "static";
      this.DraggingFile.style.zIndex = "0";
      this.DraggingFile.style.boxShadow = "none";
    }
  }

  onDragging(e: MouseEvent) {
    this.mouseMovement += e.movementY;
    const currentPosition = Math.max(Math.ceil((this.mouseMovement + FILE_HEIGHT / 2) / FILE_HEIGHT), 0);
    const addToPosition = this.initialPosition < currentPosition ? 1 : 0;
    const dragIndex = Math.min(this.props.files.length, Math.max(currentPosition, 0));
    if (this.DraggingFile) {
      this.DraggingFile.style.transform = `translateY(${this.mouseMovement + FILE_HEIGHT}px)`;
    }
    this.updateTransforms(dragIndex + addToPosition);
    this.setState((prevState) => {
      if (prevState.draggingIndex !== dragIndex) {
        return {
          ...prevState,
          draggingIndex: dragIndex,
        };
      }
    });
  }

  render() {
    const {
      files,
      onEditFileName,
      usePortal,
      messages,
      missingFilePaths,
      showRenderInlineCheckbox,
      onToggleRenderInline,
    } = this.props;
    const { editFileIndex, draggingIndex, deleteIndex } = this.state;

    return (
      <ListWrapper
        ref={this.filesWrapperRef}
        draggingIndex={draggingIndex}
        aria-dropeffect={draggingIndex > -1 ? "move" : undefined}
      >
        {files.map((file, index) => {
          const isMissing = !!(missingFilePaths || []).find((mp) => mp === file.path);
          return (
            <li
              key={file.path}
              css={[
                fileCss,
                deleteIndex === index && fadeOutAnimation,
                editFileIndex !== index && file.title === "" && fileErrorCss,
              ]}
              onAnimationEnd={deleteIndex === index ? this.executeDeleteFile : undefined}
              aria-grabbed={draggingIndex === index}
            >
              <FileNameInput
                messages={messages}
                isMissing={isMissing}
                useRef={this.filesWrapperRef}
                file={file}
                editMode={editFileIndex === index}
                value={file.title}
                childIndex={index}
                usePortal={usePortal}
                type="text"
                placeholder={messages.placeholder}
                onChange={(e) => {
                  onEditFileName(index, e.currentTarget.value);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.currentTarget.blur();
                  }
                }}
                onBlur={this.exitEditFileName}
              />
              {showRenderInlineCheckbox && file.type === "pdf" && (
                <Tooltip css={checkboxStyle} tooltip={messages.checkboxTooltip}>
                  <CheckboxItem
                    label={messages.checkboxLabel}
                    checked={file.display === "block"}
                    value=""
                    id={index}
                    onChange={(i) => typeof i === "number" && onToggleRenderInline(i)}
                  />
                </Tooltip>
              )}
              <div>
                <Tooltip tooltip={messages.changeName}>
                  <ButtonIcons
                    tabIndex={-1}
                    type="button"
                    onClick={(e) => this.editFile(e, index)}
                    aria-label={messages.changeName}
                  >
                    <Pencil aria-hidden="true" />
                  </ButtonIcons>
                </Tooltip>
                {files.length > 1 &&
                  (draggingIndex === -1 ? (
                    <Tooltip tooltip={messages.changeOrder}>
                      <ButtonIcons
                        draggable
                        tabIndex={-1}
                        type="button"
                        onMouseDown={(e) => this.onDragStart(e, index)}
                        onMouseUp={this.onDragEnd}
                        aria-label={messages.changeOrder}
                      >
                        <DragHorizontal aria-hidden="true" />
                      </ButtonIcons>
                    </Tooltip>
                  ) : (
                    <ButtonIcons
                      draggable
                      tabIndex={-1}
                      type="button"
                      onMouseDown={(e) => this.onDragStart(e, index)}
                      onMouseUp={this.onDragEnd}
                    >
                      <DragHorizontal aria-hidden="true" />
                    </ButtonIcons>
                  ))}
                <Tooltip tooltip={messages.removeFile}>
                  <ButtonIcons
                    tabIndex={-1}
                    type="button"
                    onClick={() => this.deleteFile(index)}
                    delete
                    aria-label={messages.removeFile}
                  >
                    <DeleteForever aria-hidden="true" />
                  </ButtonIcons>
                </Tooltip>
              </div>
            </li>
          );
        })}
      </ListWrapper>
    );
  }
}

export default FileListEditor;
