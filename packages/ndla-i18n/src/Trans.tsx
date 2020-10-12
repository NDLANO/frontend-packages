/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import PropTypes from 'prop-types';

interface Context {
  [key: string]: any;
}

interface Props {
  prefix?: string | '';
  [key: string]: any;
}

interface TFunctionValue {
  [key: string]: number | string;
}

const Trans = ({ children, prefix = '' }: Props, context: Context) =>
  children({
    t: (id: string, value: TFunctionValue = {}): string =>
      context.formatMessage(prefix + id, value),
  });

Trans.contextTypes = {
  formatMessage: PropTypes.func.isRequired,
};

export default Trans;
