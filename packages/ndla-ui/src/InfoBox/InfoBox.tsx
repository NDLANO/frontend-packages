import React, { ReactNode } from 'react';
import BEMHelper from 'react-bem-helper';

const classes = BEMHelper('c-info-box');

interface Props {
  children?: ReactNode;
}
const InfoBox = ({ children }: Props) => <div {...classes()}>{children}</div>;

export default InfoBox;
