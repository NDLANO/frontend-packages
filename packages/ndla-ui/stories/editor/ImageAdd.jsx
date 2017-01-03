/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component, PropTypes } from 'react';

export default class ImageAdd extends Component {

  constructor(props) {
    super(props);
    this.state = {
      url: '',
    };

    this.addImage = this.addImage.bind(this);
    this.changeUrl = this.changeUrl.bind(this);
  }

  addImage() {
    const { editorState, onChange } = this.props;
    onChange(this.props.modifier(editorState, this.state.url));
  }

  changeUrl(evt) {
    this.setState({ url: evt.target.value });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Paste the image url …"
          onChange={this.changeUrl}
          value={this.state.url}
        />
        <button type="button" onClick={this.addImage} > Add </button>
      </div>
    );
  }
}


ImageAdd.propTypes = {
  onChange: PropTypes.func.isRequired,
  editorState: PropTypes.object.isRequired,
  modifier: PropTypes.func.isRequired,
};
