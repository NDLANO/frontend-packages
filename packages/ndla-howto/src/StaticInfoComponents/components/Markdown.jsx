import React, { Fragment } from 'react';
import { Remarkable } from 'remarkable';
import { Table } from '@ndla/ui';

const md = new Remarkable();
md.inline.ruler.enable(['sub', 'sup']);

const markdownSyntax = ['**Bold**', '*Italics*', 'super^script^', 'sub~script~'];

const Markdown = () => (
  <Fragment>
    <p>
      Markdown er et språk som brukes til å formatere tekst. Nedenfor er en tabell som viser den mest nyttige syntaksen.
      Fullstendig syntaks finnes <a href="https://commonmark.org/help/">her</a>.
    </p>
    <Table
      messages={{
        dialogCloseButton: 'Lukk',
        expandButtonLabel: 'Vis stor versjon',
      }}>
      <thead>
        <tr>
          <th>Syntaks</th>
          <th>Resultat</th>
        </tr>
      </thead>
      <tbody>
        {markdownSyntax.map((item, i) => (
          <tr key={item}>
            <td>{item}</td>
            <td>
              <span
                dangerouslySetInnerHTML={{
                  __html: md.render(item),
                }}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  </Fragment>
);

export default Markdown;
