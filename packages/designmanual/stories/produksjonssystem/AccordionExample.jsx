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
      openTabs: [], // used by controlled example
      errorTabs: [2], // used by controlled example
    };
    this.handleTabToggle = this.handleTabToggle.bind(this);
    this.handleErrorTabs = this.handleErrorTabs.bind(this);
  }

  handleTabToggle(tabIndex) {
    this.setState(prevState => {
      const { openTabs } = prevState;
      if (openTabs.includes(tabIndex)) {
        openTabs.splice(openTabs.indexOf(tabIndex), 1);
      } else {
        openTabs.push(tabIndex);
      }
      return {
        openTabs,
      };
    });
  }

  handleErrorTabs(values) {
    this.setState({
      errorTabs: values,
    });
  }

  render() {
    const { errorTabs, openTabs } = this.state;
    return (
      <ComponentInfo
        reactCode={`
            <Accordion
              tabs={[
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
            name: 'tabs',
            type: `PropTypes.arrayOf(PropTypes.shape)`,
            default: 'Required',
            description: `Array med innhold for trekkspill.`,
          },
          {
            name: 'tabs[0].title',
            type: `PropTypes.string`,
            default: 'Required',
            description: `Tittel tab`,
          },
          {
            name: 'tabs[0].children',
            type: `PropTypes.node`,
            default: 'Required',
            description: `Tab content`,
          },
          {
            name: 'tabs[0].open',
            type: `PropTypes.bool`,
            default: 'false',
            description: `Påkrevd hvis trekkspill kontrolleres manuelt`,
          },
          {
            name: 'tabs[0].error',
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
              'Callback ved manuell kontrollering. Noter at tabs[x].open da blir påkrevd.',
          },
        ]}
        status={2}>
        <h2>Eksempel</h2>
        <Accordion
          tabs={[
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
          tabs={[
            {
              title: 'Tab 1',
              children: (
                <div>
                  <p>Innhold 1</p>
                  <p>Innhold 1</p>
                  <p>Innhold 1</p>
                  <p>Innhold 1</p>
                  <p>Innhold 1</p>
                  <p>Innhold 1</p>
                  <p>Innhold 1</p>
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
          values={this.state.errorTabs}
          onChange={this.handleErrorTabs}
        />
        <Accordion
          controlledCallback={this.handleTabToggle}
          tabs={[
            {
              title: 'Tab 1',
              children: (
                <div>
                  <p>Innhold 1</p>
                  <Button onClick={() => this.handleTabToggle(0)}>Lukk</Button>
                </div>
              ),
              error: errorTabs.includes(0),
              open: openTabs.includes(0),
            },
            {
              title: 'Tab 2',
              children: (
                <div>
                  <p>Innhold 2</p>
                  <Button onClick={() => this.handleTabToggle(1)}>Lukk</Button>
                </div>
              ),
              error: errorTabs.includes(1),
              open: openTabs.includes(1),
            },
            {
              title: 'Tab 3',
              children: (
                <div>
                  <p>Innhold 3</p>
                  <Button onClick={() => this.handleTabToggle(2)}>Lukk</Button>
                </div>
              ),
              error: errorTabs.includes(2),
              open: openTabs.includes(2),
            },
          ]}
        />
      </ComponentInfo>
    );
  }
}

export default AccordionExample;
