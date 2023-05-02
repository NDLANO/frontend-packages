/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component, Fragment } from 'react';
import Accordion, { AccordionBar, AccordionPanel, AccordionWrapper } from '@ndla/accordion';
import { ButtonV2 } from '@ndla/button';
import { FilterList } from '@ndla/ui';

import ComponentInfo from '../ComponentInfo';
import TinyAccordionExample from '../molecules/TinyAccordionExample';

class AccordionExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorPanels: [2], // used by controlled example
    };
    this.handlePanelErrors = this.handlePanelErrors.bind(this);
  }

  handlePanelErrors(values) {
    this.setState({
      errorPanels: values,
    });
  }

  render() {
    const { errorPanels } = this.state;
    return (
      <ComponentInfo
        reactCode={`
          <Accordion openIndexes={[0]}>
            {({ getBarProps }) => (
              <AccordionWrapper>
                {['Innhold 1', 'Innhold 2', 'Innhold 3'].map((item, index) => (
                  <Fragment key={item}>
                    <AccordionBar
                      {...getBarProps(index)}
                      title={\`Panel \${index + 1}\`}>
                    </AccordionBar>
                    <AccordionPanel {...getPanelProps(index)}>
                      <div>
                        <p>{item}</p>
                      </div>
                    </AccordionPanel>
                  </Fragment>
                ))}
              </AccordionWrapper>
            )}
          </Accordion>
          `}
        usesPropTypes={[
          {
            name: 'children',
            type: `PropTypes.func`,
            default: 'Required',
            description: `Funksjon for rendering av paneler`,
          },
          {
            name: 'openIndexes',
            type: `PropTypes.array`,
            default: '[]',
            description: `Array med index til paneler som skal være åpne`,
          },
          {
            name: 'single',
            type: 'Boolean',
            default: 'false',
            description: 'Vis kun et panel omgangen',
          },
        ]}
        status={2}
      >
        <h2>Eksempel</h2>
        <Accordion openIndexes={[0]}>
          {({ getPanelProps, getBarProps }) => (
            <AccordionWrapper>
              {['Innhold 1', 'Innhold 2', 'Innhold 3'].map((item, index) => (
                <Fragment key={item}>
                  <AccordionBar {...getBarProps(index)} title={`Panel ${index + 1}`}>
                    <div>Children in bar</div>
                  </AccordionBar>
                  <AccordionPanel {...getPanelProps(index)}>
                    <div>
                      <p>{item}</p>
                    </div>
                  </AccordionPanel>
                </Fragment>
              ))}
            </AccordionWrapper>
          )}
        </Accordion>
        <h2>Eksempel 2, kun en tillatt åpen om gangen</h2>
        <Accordion single>
          {({ getPanelProps, getBarProps }) => (
            <AccordionWrapper>
              {['Innhold 1', 'Innhold 2', 'Innhold 3'].map((item, index) => (
                <Fragment key={item}>
                  <AccordionBar {...getBarProps(index)} title={`Panel ${index + 1}`} />
                  <AccordionPanel {...getPanelProps(index)}>
                    <p>{item}</p>
                  </AccordionPanel>
                </Fragment>
              ))}
            </AccordionWrapper>
          )}
        </Accordion>
        <h2>Eksempel 3, kontrollert trekkspill med eksempler for feilmelding(er)</h2>
        <FilterList
          label="Simuler feilmeldinger:"
          preid="filter-list"
          options={[
            { title: 'Tab 1', value: 0 },
            { title: 'Tab 2', value: 1 },
            { title: 'Tab 3', value: 2 },
          ]}
          values={this.state.errorPanels}
          onChange={this.handlePanelErrors}
        />
        <Accordion>
          {({ openIndexes, handleItemClick }) => (
            <AccordionWrapper>
              {['Innhold 1', 'Innhold 2', 'Innhold 3'].map((item, index) => (
                <Fragment key={item}>
                  <AccordionBar
                    panelId={`panel-${index}`}
                    title={`Panel ${index + 1}`}
                    onClick={() => handleItemClick(index)}
                    hasError={errorPanels.includes(index)}
                    isOpen={openIndexes.includes(index)}
                  >
                    Panel {index + 1}
                  </AccordionBar>
                  <AccordionPanel
                    id={`panel-${index}`}
                    hasError={errorPanels.includes(index)}
                    isOpen={openIndexes.includes(index)}
                  >
                    <div>
                      <p>{item}</p>
                      <ButtonV2 onClick={() => handleItemClick(index)}>Lukk</ButtonV2>
                    </div>
                  </AccordionPanel>
                </Fragment>
              ))}
              <AccordionBar
                panelId="panelWithSubAccordion"
                title="With tiny accordion inside"
                onClick={() => handleItemClick(3)}
                hasError={errorPanels.includes(3)}
                isOpen={openIndexes.includes(3)}
              >
                Accordion with tiny accordion inside
              </AccordionBar>
              <AccordionPanel
                id="panelWithSubAccordion"
                hasError={errorPanels.includes(3)}
                isOpen={openIndexes.includes(3)}
              >
                <TinyAccordionExample />
              </AccordionPanel>
            </AccordionWrapper>
          )}
        </Accordion>
      </ComponentInfo>
    );
  }
}

export default AccordionExample;
