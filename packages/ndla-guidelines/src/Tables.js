/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  Table
} from '@ndla/ui';
import { uuid } from '@ndla/util';

import {
  addCloseDialogClickListeners,
  addShowDialogClickListeners,
  removeShowDialogClickListeners,
  initTableScript,
  removeTableEventListeners,
} from '@ndla/article-scripts';

class TableExample extends Component {
  constructor(props) {
    super(props);

    this.tableId = uuid();
  }

  componentDidMount() {
    if (this.props.runScripts) {
      initTableScript();
      addCloseDialogClickListeners();
      addShowDialogClickListeners();
    }
  }

  componentWillUnmount() {
    if (this.props.runScripts) {
      removeTableEventListeners();
      removeShowDialogClickListeners();
    }
  }

  render() {
    return (
      <Table
        id={this.tableId}
        messages={{
          dialogCloseButton: 'Lukk',
          expandButtonLabel: 'Vis stor versjon',
        }}>
        {this.props.children}
      </Table>
    );
  }
}

TableExample.propTypes = {
  runScripts: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

TableExample.defaultProps = {
  runScripts: false,
};



export const Tables = () => (
  <section>
    <h1>Tabeller</h1>
    <div>
    <p>Tabeller skal brukes til å presentere data (tabulære data), ikke til utforming. Det anbefales å holde tabellene så enkle som mulig. Ved mer kompleksitet kan data heller deles opp i flere tabeller.
</p><p>
Tekstformatering, høyrestilling av tekst osv. angis ikke i tabellens stilsett, men gjøres i redaktørgrensesnittet.</p>
  </div>
  <TableExample runScripts>
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
            </tr>
            <tr>
              <td>
                10<sup>9</sup>
              </td>
              <td>giga</td>
              <td>G</td>
              <td>milliard</td>
              <td>1000000000</td>
            </tr>
            <tr>
              <td>
                10<sup>6</sup>
              </td>
              <td>mega</td>
              <td>M</td>
              <td>million</td>
              <td>1000000</td>
            </tr>
            <tr>
              <td>
                10<sup>3</sup>
              </td>
              <td>kilo</td>
              <td>k</td>
              <td>tusen</td>
              <td>1000</td>
            </tr>
            <tr>
              <td>
                10<sup>2</sup>
              </td>
              <td>hekto</td>
              <td>h</td>
              <td>hundre</td>
              <td>100</td>
            </tr>
          </tbody>
        </TableExample>
        <h6>Eksempel med tittel på første kolonne:</h6>
        <TableExample>
          <tbody>
            <tr>
              <th scope="row">Tittel</th>
              <td>peta</td>
              <td>P</td>
              <td>billiard</td>
              <td>1000000000000000</td>
            </tr>
            <tr>
              <th scope="row">Tittel</th>
              <td>tera</td>
              <td>T</td>
              <td>billion</td>
              <td>1000000000000</td>
            </tr>
            <tr>
              <th scope="row">Tittel</th>
              <td>giga</td>
              <td>G</td>
              <td>milliard</td>
              <td>1000000000</td>
            </tr>
            <tr>
              <th scope="row">Tittel</th>
              <td>mega</td>
              <td>M</td>
              <td>million</td>
              <td>1000000</td>
            </tr>
            <tr>
              <th scope="row">Tittel</th>
              <td>kilo</td>
              <td>k</td>
              <td>tusen</td>
              <td>1000</td>
            </tr>
          </tbody>
        </TableExample>

        <h6>
          Eksempel med tittel på første kolonne og øverste rad{' '}
        </h6>
        <TableExample>
          <thead>
            <tr>
              <th />
              <th scope="col">Prefiks</th>
              <th scope="col">Symbol</th>
              <th scope="col">Namn</th>
              <th scope="col">Eksempel</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Tittel</th>
              <td>peta</td>
              <td>P</td>
              <td>billiard</td>
              <td>1000000000000000</td>
            </tr>
            <tr>
              <th scope="row">Tittel</th>
              <td>tera</td>
              <td>T</td>
              <td>billion</td>
              <td>1000000000000</td>
            </tr>
            <tr>
              <th scope="row">Tittel</th>
              <td>giga</td>
              <td>G</td>
              <td>milliard</td>
              <td>1000000000</td>
            </tr>
            <tr>
              <th scope="row">Tittel</th>
              <td>mega</td>
              <td>M</td>
              <td>million</td>
              <td>1000000</td>
            </tr>
            <tr>
              <th scope="row">Tittel</th>
              <td>kilo</td>
              <td>k</td>
              <td>tusen</td>
              <td>1000</td>
            </tr>
          </tbody>
        </TableExample>
        <h6>Eksempel med bilde</h6>
        <TableExample>
          <caption>Caption</caption>
          <thead>
            <tr>
              <th />
              <th style={{ textAlign: 'center' }} scope="col">
                Fly
              </th>
              <th style={{ textAlign: 'center' }} scope="col">
                Buss
              </th>
              <th style={{ textAlign: 'center' }} scope="col">
                Sykkel
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Bilde</th>
              <td>
                <img
                  alt="Fly"
                  src="https://images.pexels.com/photos/249581/pexels-photo-249581.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=187&w=315"
                />
              </td>
              <td>
                <img
                  alt="Buss"
                  src="https://images.pexels.com/photos/34729/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=187&w=315"
                />
              </td>
              <td>
                <img
                  alt="Sykkel"
                  src="https://images.pexels.com/photos/326678/pexels-photo-326678.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=187&w=315"
                />
              </td>
            </tr>
            <tr>
              <th scope="row">Symbol</th>
              <td style={{ textAlign: 'center' }}>
                <svg
                  style={{ width: '24px', height: '24px' }}
                  viewBox="0 0 24 24">
                  <path
                    fill="#6F6F6F"
                    d="M21,16V14L13,9V3.5A1.5,1.5 0 0,0 11.5,2A1.5,1.5 0 0,0 10,3.5V9L2,14V16L10,13.5V19L8,20.5V22L11.5,21L15,22V20.5L13,19V13.5L21,16Z"
                  />
                </svg>
              </td>
              <td style={{ textAlign: 'center' }}>
                <svg
                  style={{ width: '24px', height: '24px' }}
                  viewBox="0 0 24 24">
                  <path
                    fill="#6F6F6F"
                    d="M18,11H6V6H18M16.5,17A1.5,1.5 0 0,1 15,15.5A1.5,1.5 0 0,1 16.5,14A1.5,1.5 0 0,1 18,15.5A1.5,1.5 0 0,1 16.5,17M7.5,17A1.5,1.5 0 0,1 6,15.5A1.5,1.5 0 0,1 7.5,14A1.5,1.5 0 0,1 9,15.5A1.5,1.5 0 0,1 7.5,17M4,16C4,16.88 4.39,17.67 5,18.22V20A1,1 0 0,0 6,21H7A1,1 0 0,0 8,20V19H16V20A1,1 0 0,0 17,21H18A1,1 0 0,0 19,20V18.22C19.61,17.67 20,16.88 20,16V6C20,2.5 16.42,2 12,2C7.58,2 4,2.5 4,6V16Z"
                  />
                </svg>
              </td>
              <td style={{ textAlign: 'center' }}>
                <svg
                  style={{ width: '24px', height: '24px' }}
                  viewBox="0 0 24 24">
                  <path
                    fill="#6F6F6F"
                    d="M5,20.5A3.5,3.5 0 0,1 1.5,17A3.5,3.5 0 0,1 5,13.5A3.5,3.5 0 0,1 8.5,17A3.5,3.5 0 0,1 5,20.5M5,12A5,5 0 0,0 0,17A5,5 0 0,0 5,22A5,5 0 0,0 10,17A5,5 0 0,0 5,12M14.8,10H19V8.2H15.8L13.86,4.93C13.57,4.43 13,4.1 12.4,4.1C11.93,4.1 11.5,4.29 11.2,4.6L7.5,8.29C7.19,8.6 7,9 7,9.5C7,10.13 7.33,10.66 7.85,10.97L11.2,13V18H13V11.5L10.75,9.85L13.07,7.5M19,20.5A3.5,3.5 0 0,1 15.5,17A3.5,3.5 0 0,1 19,13.5A3.5,3.5 0 0,1 22.5,17A3.5,3.5 0 0,1 19,20.5M19,12A5,5 0 0,0 14,17A5,5 0 0,0 19,22A5,5 0 0,0 24,17A5,5 0 0,0 19,12M16,4.8C17,4.8 17.8,4 17.8,3C17.8,2 17,1.2 16,1.2C15,1.2 14.2,2 14.2,3C14.2,4 15,4.8 16,4.8Z"
                  />
                </svg>
              </td>
            </tr>
            <tr>
              <th scope="row">Ord</th>
              <td style={{ textAlign: 'center' }}>Fly</td>
              <td style={{ textAlign: 'center' }}>Buss</td>
              <td style={{ textAlign: 'center' }}>Sykkel</td>
            </tr>
          </tbody>
        </TableExample>
        <h6>Eksempel med scrollbar</h6>
        <TableExample>
          <thead>
            <tr>
              <th>Id</th>
              <th>Fornavn</th>
              <th>Etternavn</th>
              <th>Epost</th>
              <th>Adresse</th>
              <th>Land</th>
              <th>Språk</th>
              <th>Brukernavn</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Rogers</td>
              <td>Hearson</td>
              <td>rhearson0@nifty.com</td>

              <td className="u-no-wrap">34704 Duke Circle</td>
              <td>Brazil</td>
              <td>Fijian</td>
              <td>rhearson0</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Lucie</td>
              <td>Jikylls</td>
              <td>ljikylls1@csmonitor.com</td>
              <td className="u-no-wrap">9824 Swallow Place</td>
              <td>Sweden</td>
              <td>Italian</td>
              <td>ljikylls1</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Kippie</td>
              <td>Reeveley</td>
              <td>kreeveley2@ebay.com</td>
              <td className="u-no-wrap">1 Stephen Court</td>
              <td>Namibia</td>
              <td>West Frisian</td>
              <td>kreeveley2</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Klarrisa</td>
              <td>Minghetti</td>
              <td>kminghetti3@163.com</td>
              <td className="u-no-wrap">7 Truax Point</td>
              <td>Greece</td>
              <td>Luxembourgish</td>
              <td>kminghetti3</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Trefor</td>
              <td>Lambregts</td>
              <td>tlambregts4@youtu.be</td>
              <td className="u-no-wrap">61 Monica Center</td>
              <td>Sweden</td>
              <td>Northern Sotho</td>
              <td>tlambregts4</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Aridatha</td>
              <td>Kuhnt</td>
              <td>akuhnt5@sitemeter.com</td>
              <td className="u-no-wrap">2898 Wayridge Terrace</td>
              <td>China</td>
              <td>Latvian</td>
              <td>akuhnt5</td>
            </tr>
            <tr>
              <td>7</td>
              <td>Kalie</td>
              <td>Olander</td>
              <td>kolander6@loc.gov</td>
              <td className="u-no-wrap">554 Maywood Parkway</td>
              <td>China</td>
              <td>Czech</td>
              <td>kolander6</td>
            </tr>
          </tbody>
        </TableExample>
  </section>
);