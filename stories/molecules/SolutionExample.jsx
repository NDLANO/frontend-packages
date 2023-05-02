import React, { Component } from 'react';
import { Table } from '@ndla/ui';

import { initArticleScripts } from '@ndla/article-scripts';

class SolutionTableExample extends Component {
  componentDidMount = () => {
    initArticleScripts();
  };

  render = () => (
    <Table id="solutionTable">
      <caption>Tabelltittel</caption>
      <thead>
        <tr>
          <th>
            10<sup>n</sup>
          </th>
          <th>Prefiks</th>
          <th>Symbol</th>
          <th>Namn</th>
          <th>Eksempel</th>
          <th>Betydning</th>
          <th>Tatt inn</th>
          <th>Random data</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            10<sup>12</sup>
          </td>
          <td>tera</td>
          <td>T</td>
          <td>billion</td>
          <td>1000000000000</td>
          <td>Monster (gresk)</td>
          <td>1960</td>
          <td>1231233212355661</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default SolutionTableExample;
