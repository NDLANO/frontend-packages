/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import PropTypes from 'prop-types';
import { Image } from '@ndla/ui';
import styled from '@emotion/styled';

const StylediFrame = styled.iframe`
  height: 100%;
  width: 100%;
  border: 0;
  margin: 0;
  padding: 0;
`;

const VisualElement = ({ visualElement }) => {
  switch (visualElement.type) {
    case 'image':
      return <Image src={visualElement.url} alt={visualElement.alt} />;
    case 'brightcove':
      return (
        <StylediFrame
          allowfullscreen="true"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          src={visualElement.url}
        />
      );
    default:
      return null;
  }
};

VisualElement.propTypes = {
  visualElement: PropTypes.shape({
    url: PropTypes.string,
    alt: PropTypes.string,
    type: PropTypes.string,
  }).isRequired,
};

export default VisualElement;
