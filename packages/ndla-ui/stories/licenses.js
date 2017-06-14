import React from 'react';
import shortid from 'shortid';
import { getLicenseRightByAbbreviation } from 'ndla-licenses';
import { storiesOf } from '@storybook/react';

import { Center } from './helpers';

const licenses = ['by', 'sa', 'nc', 'nd', 'pd', 'cc0', 'cc', 'copy'].map(license => getLicenseRightByAbbreviation(license));
const uniqueId = () => shortid.generate();

storiesOf('Lisensgivning', module)
  .add('Lisenstekster', () => (
    <Center>
      <article className="o-wrapper--narrow">
        <section className="c-factbox">
          <h1 className="u-heading">Lisenstekster</h1>
        </section>
        <section>
          {licenses.map(license => (
            <article key={uniqueId()}>
              <h2>{license.title}</h2>
              <p>{license.description}</p>
            </article>
          ))}
        </section>
      </article>
    </Center>
  ));
