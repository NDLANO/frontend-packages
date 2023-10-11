import { Table } from '@ndla/ui';

const markdownSyntax = [
  { md: '**Bold**', html: <b>Bold</b> },
  { md: '*Italics*', html: <i>Italics</i> },
  { md: 'super^script^', html: <sup>super^script^</sup> },
  { md: 'sub~script~', html: <sub>sub~script</sub> },
];

const Markdown = () => (
  <>
    <p>
      Markdown er et språk som brukes til å formatere tekst. Nedenfor er en tabell som viser den mest nyttige syntaksen.
      Fullstendig syntaks finnes <a href="https://commonmark.org/help/">her</a>.
    </p>
    <Table>
      <thead>
        <tr>
          <th>Syntaks</th>
          <th>Resultat</th>
        </tr>
      </thead>
      <tbody>
        {markdownSyntax.map((item) => (
          <tr key={item.md}>
            <td>{item.md}</td>
            <td>
              <span>{item.html}</span>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  </>
);

export default Markdown;
