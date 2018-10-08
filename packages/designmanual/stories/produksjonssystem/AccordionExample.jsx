/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component } from 'react';
import Accordion from 'ndla-accordion';
import Button from 'ndla-button';
import { FilterList } from 'ndla-ui';

import ComponentInfo from '../ComponentInfo';

class AccordionExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openedPanels: [], // used by controlled example
      errorPanels: [2], // used by controlled example
    };
    this.handlePanelToggle = this.handlePanelToggle.bind(this);
    this.handlePanelErrors = this.handlePanelErrors.bind(this);
  }

  handlePanelToggle(tabIndex) {
    this.setState(prevState => {
      const { openedPanels } = prevState;
      if (openedPanels.includes(tabIndex)) {
        openedPanels.splice(openedPanels.indexOf(tabIndex), 1);
      } else {
        openedPanels.push(tabIndex);
      }
      return {
        openedPanels,
      };
    });
  }

  handlePanelErrors(values) {
    this.setState({
      errorPanels: values,
    });
  }

  render() {
    const { errorPanels, openedPanels } = this.state;
    return (
      <ComponentInfo
        reactCode={`
            <Accordion
              panels={[
                {
                  title: 'Tab 1',
                  children: <div>Tab content 1</div>,
                  open: true,
                },
                {
                  title: 'Tab 2',
                  children: <div>Tab content 2</div>,
                },
              ]}
            />
          `}
        usesPropTypes={[
          {
            name: 'panels',
            type: `PropTypes.arrayOf(PropTypes.shape)`,
            default: 'Required',
            description: `Array med innhold for trekkspill.`,
          },
          {
            name: 'panels[0].title',
            type: `PropTypes.string`,
            default: 'Required',
            description: `Tittel tab`,
          },
          {
            name: 'panels[0].children',
            type: `PropTypes.node`,
            default: 'Required',
            description: `Tab content`,
          },
          {
            name: 'panels[0].open',
            type: `PropTypes.bool`,
            default: 'false',
            description: `Påkrevd hvis trekkspill kontrolleres manuelt`,
          },
          {
            name: 'panels[0].error',
            type: `PropTypes.bool`,
            default: 'false',
            description: `Markerer accordions som rød / har feil`,
          },
          {
            name: 'onlyOpenOne',
            type: 'Boolean',
            default: 'false',
            description: 'Kun i bruk hvis ved automatisk kontrollering',
          },
          {
            name: 'controlledCallback',
            type: 'Function',
            default: 'undefined',
            description:
              'Callback ved manuell kontrollering. Noter at panels[x].open da blir påkrevd.',
          },
        ]}
        status={2}>
        <h2>Eksempel</h2>
        <Accordion
          panels={[
            {
              title: 'Tab 1',
              children: (
                <div>
                  <p>Innhold 1</p>
                </div>
              ),
              open: true,
            },
            {
              title: 'Tab 2',
              children: (
                <div>
                  <p>Innhold 2</p>
                </div>
              ),
            },
            {
              title: 'Tab 3',
              children: (
                <div>
                  <p>Innhold 3</p>
                </div>
              ),
            },
          ]}
        />
        <h2>Eksempel 2, kun en tillatt åpen om gangen</h2>
        <Accordion
          onlyOpenOne
          panels={[
            {
              title: 'Tab 1',
              children: (
                <div>
                  <p>Innhold 1</p>
                </div>
              ),
              open: true,
            },
            {
              title: 'Tab 2',
              children: (
                <div>
                  <p>Innhold 2</p>
                </div>
              ),
            },
            {
              title: 'Tab 3',
              children: (
                <div>
                  <p>Innhold 3</p>
                </div>
              ),
            },
          ]}
        />
        <h2>
          Eksempel 3, kontrollert trekkspill med eksempler for feilmelding(er)
        </h2>
        <FilterList
          label="Simuler feilmeldinger:"
          options={[
            { title: 'Tab 1', value: 0 },
            { title: 'Tab 2', value: 1 },
            { title: 'Tab 3', value: 2 },
          ]}
          values={this.state.errorPanels}
          onChange={this.handlePanelErrors}
        />
        <Accordion
          controlledCallback={this.handlePanelToggle}
          panels={[
            {
              title: 'Tab 1',
              children: (
                <div>
                  <p>Innhold 1</p>
                  <Button onClick={() => this.handlePanelToggle(0)}>
                    Lukk
                  </Button>
                </div>
              ),
              error: errorPanels.includes(0),
              open: openedPanels.includes(0),
            },
            {
              title: 'Tab 2',
              children: (
                <div>
                  <p>Innhold 2</p>
                  <Button onClick={() => this.handlePanelToggle(1)}>
                    Lukk
                  </Button>
                </div>
              ),
              error: errorPanels.includes(1),
              open: openedPanels.includes(1),
            },
            {
              title: 'Tab 3',
              children: (
                <div>
                  <p>Innhold 3</p>
                  <Button onClick={() => this.handlePanelToggle(2)}>
                    Lukk
                  </Button>
                </div>
              ),
              error: errorPanels.includes(2),
              open: openedPanels.includes(2),
            },
          ]}
        />
      </ComponentInfo>
    );
  }
}

export default AccordionExample;
