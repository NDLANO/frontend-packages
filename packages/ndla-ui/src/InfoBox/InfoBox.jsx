import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';

const classes = BEMHelper('c-info-box');

const InfoBox = ({ children }) => <div {...classes()}>{children}</div>;

InfoBox.propTypes = {
  children: PropTypes.node.isRequired,
};

export default InfoBox;
