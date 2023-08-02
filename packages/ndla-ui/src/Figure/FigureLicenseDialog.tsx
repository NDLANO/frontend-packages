/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

// N.B This component is used to render static markup serverside
// Any interactivty is added by scripts located in the ndla-article-scripts package

import { ReactNode } from 'react';
import Dialog from '../Dialog';
import { classLicenses, FigureLicenseByline, FigureLicenseCta } from './FigureLicense';
import { FigureLicense } from './Figure';
import { Contributor } from '../types';

export const FigureLicenseDialog = ({ children, messages, id, authors, origin, title, locale, license }: Props) => {
  const headingLabelId = `heading-${id}`;
  return (
    <Dialog id={id} labelledby={headingLabelId} messages={messages}>
      <div {...classLicenses()}>
        <h1 id={headingLabelId} {...classLicenses('title')}>
          {messages.rulesForUse}
        </h1>
        <FigureLicenseByline license={license} messages={messages} locale={locale} />
        <FigureLicenseCta authors={authors} title={title} origin={origin} messages={messages}>
          {children}
        </FigureLicenseCta>
      </div>
    </Dialog>
  );
};

interface Props {
  id: string;
  children?: ReactNode;
  origin?: string;
  authors?: Contributor[];
  messages: {
    modelPremission?: string;
    close: string;
    rulesForUse: string;
    source: string;
    learnAboutLicenses: string;
    title: string;
  };
  title?: string;
  license: FigureLicense;
  locale: string;
}
