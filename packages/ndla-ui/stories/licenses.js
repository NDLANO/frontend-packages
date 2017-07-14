import React from 'react';
import { uuid } from 'ndla-util';
import { getLicenseRightByAbbreviation } from 'ndla-licenses';
import { storiesOf } from '@storybook/react';

import { Center } from './helpers';

const licenses = [
  'by',
  'sa',
  'nc',
  'nd',
  'pd',
  'cc0',
  'cc',
  'copy',
].map(license => getLicenseRightByAbbreviation(license));

storiesOf('Lisensgivning', module).add('Lisenstekster', () =>
  <Center>
    <article className="o-wrapper--narrow">
      <section className="c-factbox">
        <h1 className="u-heading">Lisenstekster</h1>
      </section>
      <section>
        {licenses.map(license =>
          <article key={uuid()}>
            <h2>
              {license.title}
            </h2>
            <p>
              {license.description}
            </p>
          </article>,
        )}
      </section>
    </article>
  </Center>,
);
