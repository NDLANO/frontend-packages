/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import Spinner from '@ndla/ui/lib/Spinner';
import { colors, spacing, fonts, misc, animations } from '@ndla/core';
import { CloudUploadOutline, AlertCircle } from '@ndla/icons/editor';

const SpinnerWrapper = styled.div`
  margin: -${spacing.small} 0;
  ${animations.fadeInScaled()};
`;

const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
  ${fonts.sizes(16, 1.3)};
  font-family: ${fonts.sans};
  font-weight: ${fonts.weight.normal};
  color: ${colors.text.primary};
  pointer-events: none;
  svg {
    width: ${spacing.large};
    height: ${spacing.large};
    color: ${colors.brand.tertiary};
    transition: transform 300ms cubic-bezier(0.2, 1.44, 0.53, 1),
      color 200ms ease;
  }
`;

const DropZone = styled.div`
  margin: 0;
  padding: ${spacing.large};
  border: 3px dashed ${colors.brand.tertiary};
  display: flex;
  width: 100%;
  position: relative;
  align-items: center;
  justify-content: center;
  border-radius: ${spacing.xsmall};

  input {
    content: '';
    display: block;
    position: absolute;
    background: red;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    cursor: pointer;
  }

  &:before {
    content: '';
    display: block;
    position: absolute;
    background: ${colors.brand.tertiary};
    top: ${spacing.small};
    right: ${spacing.small};
    left: ${spacing.small};
    bottom: ${spacing.small};
    border-radius: ${misc.borderRadius};
    opacity: ${props => (props.draggedOver ? '0.32' : '0.16')};
    transition: opacity 200ms ease;
  }
`;

const cssHover = css`
  ${DropZone} {
    &:before {
      opacity: 0.32;
    }
  }
  ${ContentWrapper} {
    color: ${colors.brand.primary};
    svg {
      color: ${colors.brand.primary};
      transform: scale(1.32) translateY(-3px);
    }
  }
`;

const cssLoading = css`
  ${DropZone} {
    &:before {
      opacity: 0.16 !important;
    }
  }
  ${ContentWrapper} {
    > {
      opacity: 0;
    }
  }
`;

const Wrapper = styled.div`
  margin: ${spacing.normal} 0 ${spacing.large};
  ${animations.fadeInBottom()};
  &:hover,
  &:focus-within {
    ${cssHover}
  }
`;

const InputField = styled.input`
  background: ${colors.brand.primary};
  border: 0;
  color: #fff;
`;

const AlertMessages = styled.div`
  margin: -${spacing.large} 0 0;
  height: ${spacing.large};
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  font-family: ${fonts.sans};
  color: ${colors.support.red};
  ${animations.fadeInBottom()};
  ${fonts.sizes(14, 1.1)};
`;

const getFiles = e => {
  const files = [];
  let i;
  if (e.dataTransfer.items) {
    for (i = 0; i < e.dataTransfer.items.length; i++) {
      if (e.dataTransfer.items[i].kind === 'file') {
        files.push(e.dataTransfer.items[i].getAsFile());
      }
    }
  } else {
    for (i = 0; i < e.dataTransfer.files.length; i++) {
      files.push(e.dataTransfer.files[i]);
    }
  }
  return files;
};

class UploadDropZone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropAllowed: true,
      draggedOver: false,
    };
    this.onChangeField = this.onChangeField.bind(this);
    this.onDragEnter = this.onDragEnter.bind(this);
    this.onDragLeave = this.onDragLeave.bind(this);
    this.onDrop = this.onDrop.bind(this);
    this.inputRef = React.createRef();
    this.dropZoneRef = React.createRef();
    this.errorTimer = null;
  }

  componentDidMount() {
    // update size of input.
    const dropZoneWidth =
      this.dropZoneRef.current.getBoundingClientRect().width - 6;
    this.inputRef.current.style.width = `${dropZoneWidth}px`;
  }

  componentWillUnmount() {
    clearTimeout(this.errorTimer);
  }

  illegalFormats(files) {
    return files.filter(file => {
      const typeToArray = file.type.split('/');
      const fileTypeAllowed =
        this.props.allowedFiles.includes(file.type) ||
        this.props.allowedFiles.includes(`${typeToArray[0]}/*`) ||
        this.props.allowedFiles.includes(`.${typeToArray[1]}`);

      return !fileTypeAllowed;
    });
  }

  onChangeField(e) {
    const files = [];
    for (let i = 0; i < e.target.files.length; i++) {
      files.push(e.target.files[i]);
    }
    // Impossible to select illegal files so skip check.
    this.props.onAddedFiles(files, e);
    e.target.value = '';
  }

  onDragEnter() {
    this.setState({
      dropAllowed: true,
      draggedOver: true,
    });
  }

  onDragLeave() {
    this.setState({
      draggedOver: true,
    });
  }

  onDrop(e) {
    const files = getFiles(e);
    const illegalFiles = this.illegalFormats(files);
    const hasIllegalFiles = illegalFiles.length > 0;
    let errorMessage;
    if (hasIllegalFiles) {
      const illegalFileTypes = files
        .map(file => file.type.substr(file.type.indexOf('/') + 1))
        .toString(', ');
      errorMessage = `Filetype(s) not supported: ${illegalFileTypes}`;
      clearTimeout(this.errorTimer);
      this.errorTimer = setTimeout(() => {
        this.setState({
          dropAllowed: true,
        });
      }, 5000);
      e.preventDefault();
    }
    this.setState({
      dropAllowed: !hasIllegalFiles,
      draggedOver: false,
      errorMessage: this.props.errorMessage || errorMessage,
    });
  }

  render() {
    const {
      name,
      allowedFiles,
      multiple,
      useIcon,
      children,
      ariaLabel,
      loading,
    } = this.props;
    const { dropAllowed, draggedOver, errorMessage } = this.state;
    return (
      <Fragment>
        <Wrapper css={[draggedOver && cssHover, loading && cssLoading]}>
          <DropZone dropAllowed={dropAllowed} ref={this.dropZoneRef}>
            <InputField
              type="file"
              name={name}
              aria-label={ariaLabel}
              accept={allowedFiles.toString()}
              multiple={multiple}
              onChange={this.onChangeField}
              onDrop={this.onDrop}
              onDragEnter={this.onDragEnter}
              onDragLeave={this.onDragLeave}
              ref={this.inputRef}
              disabled={loading}
            />
            <ContentWrapper>
              {loading ? (
                <SpinnerWrapper>
                  <Spinner />
                </SpinnerWrapper>
              ) : (
                <Fragment>
                  {useIcon || <CloudUploadOutline />}
                  {children}
                </Fragment>
              )}
            </ContentWrapper>
          </DropZone>
        </Wrapper>
        {!dropAllowed && (
          <AlertMessages>
            <AlertCircle />
            {errorMessage}
          </AlertMessages>
        )}
      </Fragment>
    );
  }
}

UploadDropZone.propTypes = {
  name: PropTypes.string.isRequired,
  allowedFiles: PropTypes.arrayOf(PropTypes.string).isRequired,
  onAddedFiles: PropTypes.func.isRequired,
  multiple: PropTypes.bool,
  useIcon: PropTypes.node,
  ariaLabel: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
  loading: PropTypes.bool,
};

export default UploadDropZone;
