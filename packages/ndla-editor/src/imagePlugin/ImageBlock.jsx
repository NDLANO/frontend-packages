/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
 /* eslint-disable jsx-a11y/no-static-element-interactions */


import React, { PropTypes, Component } from 'react';
import BEMHelper from 'react-bem-helper';

const classes = new BEMHelper({
  name: 'block',
  prefix: 'c-',
});

export default class ImageBlock extends Component {
  constructor(props) {
    super(props);

    this.handleCaptionChange = this.handleCaptionChange.bind(this);
    this.handleAltChange = this.handleAltChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleFocus() {
    this.props.blockProps.setReadOnly(true);
  }

  handleBlur() {
    this.props.blockProps.setReadOnly(false);
  }

  handleCaptionChange(event) {
    event.stopPropagation();
    const { blockProps } = this.props;
    blockProps.updateData({ caption: event.target.value });
  }

  handleAltChange(event) {
    event.stopPropagation();
    const { blockProps } = this.props;
    blockProps.updateData({ alt: event.target.value });
  }

  render() {
    const { className, contentState, block, onClick, direction } = this.props;
    const entity = contentState.getEntity(block.getEntityAt(0));
    const { src, alignment, alt, caption } = entity.getData();

    return (
      <div {...classes('image', alignment)} onBlur={this.handleBlur} onFocus={this.handleFocus} >
        {/* <button
          direction={direction}
          onClick={onClick}
          className={`c-button c-button--stripped ${className}`}
          >
          <img
          src={src}
          role="presentation"
          />
        </button> */}
        <img
          src={src}
          role="presentation"
          direction={direction}
          onClick={onClick}
          className={`${className}`}
        />
        <div {...classes('metadata')} >
          <input
            {...classes('input')}
            type="text"
            placeholder="Alternative text"
            value={alt}
            onChange={this.handleAltChange}
          />
          <input
            {...classes('input')}
            type="text"
            placeholder="Caption"
            value={caption}
            onChange={this.handleCaptionChange}
          />
        </div>
      </div>
    );
  }
}
ImageBlock.propTypes = {
  className: PropTypes.string,
  block: PropTypes.shape({
  }).isRequired,
  contentState: PropTypes.shape({
    getEntity: PropTypes.func.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  direction: PropTypes.string.isRequired,
  blockProps: PropTypes.shape({
    setReadOnly: PropTypes.func.isRequired,
    updateData: PropTypes.func.isRequired,
  }),
};
