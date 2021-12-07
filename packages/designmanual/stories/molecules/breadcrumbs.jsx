/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import PropTypes from 'prop-types';
import { Breadcrumb, BreadcrumbBlock as BreadcrumbBlockUI } from '@ndla/ui';

const items = [
  {
    name: 'Fag',
    to: '#1',
  },
  {
    name: 'Hovedemne tittel',
    to: '#2',
  },
  {
    name: 'Underemne tittel',
    to: '#3',
  },
  {
    name: 'Tittel på side/ressursen',
    to: '#4',
  },
];

export const BreadcrumbDefault = ({ onlySubject = false, invertedStyle }) => (
  <Breadcrumb items={onlySubject ? items.slice(0, 2) : items} invertedStyle={invertedStyle} />
);

BreadcrumbDefault.propTypes = {
  onlySubject: PropTypes.bool,
};

export default BreadcrumbDefault;

export const BreadcrumbBlock = () => <BreadcrumbBlockUI items={items} toTopic={() => '#'} />;
