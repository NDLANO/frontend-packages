/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Component, Children, Validator } from 'react';
import PropTypes from 'prop-types';
import IntlMessageFormat, { Formats, Options } from 'intl-messageformat';
import { MessageFormatElement } from 'intl-messageformat-parser';
import memoizeIntlConstructor from 'intl-format-cache';
import localFormatMessage from './formatMessage';

type GetMessageFormat = (
  message: string | MessageFormatElement[],
  locales?: string | string[] | undefined,
  overrideFormats?: Partial<Formats> | undefined,
  opts?: Options | undefined,
) => any;

interface Context {
  getMessageFormat?: GetMessageFormat;
  formatMessage: Function;
}

interface State {
  getMessageFormat: GetMessageFormat;
}

interface Props {
  locale: string;
  messages: { [key: string]: string };
}

export default class IntlProvider extends Component<Props, State> {
  static contextTypes: {
    formatMessage: (...args: any[]) => any;
    getMessageFormat: (...args: any[]) => any;
  };
  static childContextTypes: {
    formatMessage: Validator<NonNullable<(...args: any[]) => any>>;
    getMessageFormat: Validator<NonNullable<(...args: any[]) => any>>;
  };
  constructor(props: Props, context: Context = {} as Context) {
    super(props, context);

    const { getMessageFormat } = context;

    this.state = {
      getMessageFormat: getMessageFormat || memoizeIntlConstructor(IntlMessageFormat),
    };
  }

  getChildContext() {
    const { getMessageFormat } = this.state;
    const { locale, messages } = this.props;
    const formatMessage = localFormatMessage.bind(null, locale, messages, getMessageFormat);

    return {
      getMessageFormat,
      formatMessage,
    };
  }

  render() {
    return Children.only(this.props.children);
  }
}

IntlProvider.contextTypes = {
  getMessageFormat: PropTypes.func,
  formatMessage: PropTypes.func,
};

IntlProvider.childContextTypes = {
  getMessageFormat: PropTypes.func.isRequired,
  formatMessage: PropTypes.func.isRequired,
};
