/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { createElement, Component } from 'react';
import PropTypes from 'prop-types';
import { copyTextToClipboard } from '@ndla/util';
import { Copy } from '@ndla/icons/action';
import { ButtonV2 } from '@ndla/button';

class IconItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    };
  }

  render() {
    const { hover } = this.state;
    const { icon, name, folder } = this.props;
    return (
      <li
        onMouseEnter={() => this.setState({ hover: true })}
        onMouseLeave={() => this.setState({ hover: false })}
        style={{
          listStyle: 'none',
          backgroundColor: '#EFF0F2',
          width: '210px',
          padding: '13px',
          margin: '13px',
          wordBreak: 'break-all',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', lineHeight: 1.5 }}>
          {createElement(icon, {
            className: 'c-icon--large',
          })}
          <strong style={{ marginLeft: '13px' }}>{name}</strong>
        </div>
        <div style={{ marginTop: '6.5px' }} title={`Kilde: ${icon().props['data-source']}`}>
          {icon().props['data-license']}
          {hover && (
            <ButtonV2
              variant="stripped"
              onClick={() => copyTextToClipboard(`import { ${name} } from '@ndla/icons/${folder}';`)}
              style={{ float: 'right' }}
              title="Kopier import kode"
            >
              <Copy />
            </ButtonV2>
          )}
        </div>
      </li>
    );
  }
}

IconItem.propTypes = {
  icon: PropTypes.string.isRequired, // eslint-disable-line react/forbid-prop-types
  folder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

const IconList = ({ icons, folder }) => (
  <ul style={{ display: 'flex', flexWrap: 'wrap' }}>
    {Object.keys(icons).map((key) => (
      <IconItem key={key} name={key} icon={icons[key]} folder={folder} />
    ))}
  </ul>
);

IconList.propTypes = {
  icons: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  folder: PropTypes.string.isRequired,
};

export default IconList;
