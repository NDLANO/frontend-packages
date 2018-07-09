/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';

import { Portrait, SafeLink } from 'ndla-ui';

const classes = new BEMHelper({
  name: 'author-info',
  prefix: 'c-',
});

const AuthorInfo = ({ authorName, authorRole, email, image, phone }) => (
  <section {...classes('')}>
    {image && (
      <Portrait
        src={image}
        alt={authorName}
        modifier="large"
        {...classes('portrait-image')}
      />
    )}
    <div>
      <h1 {...classes('heading')}>{authorName}</h1>
      <p>{authorRole}</p>
      {phone && <p>{phone}</p>}
      {email && <SafeLink to={`mailto:${email}`}>{email}</SafeLink>}
    </div>
  </section>
);

AuthorInfo.propTypes = {
  authorName: PropTypes.string.isRequired,
  authorRole: PropTypes.string.isRequired,
  phone: PropTypes.string,
  email: PropTypes.string,
  image: PropTypes.string,
};

AuthorInfo.defaultProps = {
  phone: undefined,
  image: undefined,
  email: undefined,
};

export default AuthorInfo;
