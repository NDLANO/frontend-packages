/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@ndla/tabs';

const VideoTabs = ({ onSearchTypeChange, tabs }) => {
  const [selectedTab, setSelectedTab] = useState(undefined);

  const handleOnSelect = (value) => {
    setSelectedTab(value);
    onSearchTypeChange(value);
  };

  return <Tabs value={selectedTab} onValueChange={handleOnSelect} tabs={tabs} />;
};

VideoTabs.propTypes = {
  onSearchTypeChange: PropTypes.func.isRequired,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      id: PropTypes.string,
      content: PropTypes.node,
    }),
  ).isRequired,
};

export default VideoTabs;
