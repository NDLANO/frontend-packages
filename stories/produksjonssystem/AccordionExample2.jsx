/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component, Fragment } from 'react';
import { Accordions, AccordionSection } from '@ndla/accordion';
import { ButtonV2 } from '@ndla/button';
import { FilterList } from '@ndla/ui';

import ComponentInfo from '../ComponentInfo';
import TinyAccordionExample from '../molecules/TinyAccordionExample';

const PanelComponent = ({ tekst, setIsOpen }) => {
  return (
    <div>
      <p>{tekst}</p>
      <ButtonV2 onClick={() => setIsOpen(false)}>Lukk</ButtonV2>
    </div>
  );
};

class AccordionExample2 extends Component {
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
        <AccordionSection id="panel1" title="hi panel" startOpen>
          <>hi</>
        </AccordionSection>
        <AccordionSection id="panel2" title="hi panel2">
          <>hi2</>
        </AccordionSection>
        <AccordionSection id="panel3" title="hi panel3">
          <>hi3</>
        </AccordionSection>
          `}
        usesPropTypes={[
          {
            name: 'children',
            type: `PropTypes.func`,
            default: 'Required',
            description: `Funksjon for rendering av paneler`,
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
        <AccordionSection id="panel1" title="Panel 1" startOpen barChildren={<div>Children in bar</div>}>
          <p>Innhold 1</p>
        </AccordionSection>
        <AccordionSection id="panel2" title="Panel 2" barChildren={<div>Children in bar</div>}>
          <p>Innhold 2</p>
        </AccordionSection>
        <AccordionSection id="panel3" title="Panel 3" barChildren={<div>Children in bar</div>}>
          <p>Innhold 3</p>
        </AccordionSection>

        <h2>Eksempel med åpne/lukke alle knapp</h2>
        <Accordions>
          <AccordionSection id="panel1" title="hi panel" startOpen>
            <>hi</>
          </AccordionSection>
          <AccordionSection id="panel2" title="hi panel2">
            <>hi2</>
          </AccordionSection>
          <AccordionSection id="panel3" title="hi panel3">
            <>hi3</>
          </AccordionSection>
        </Accordions>

        <h2>Eksempel 2, kun en tillatt åpen om gangen</h2>
        <Accordions single>
          <AccordionSection id="panel1" title="Panel 1">
            <p>Innhold 1</p>
          </AccordionSection>
          <AccordionSection id="panel2" title="Panel 2">
            <p>Innhold 2</p>
          </AccordionSection>
          <AccordionSection id="panel3" title="Panel 3">
            <p>Innhold 3</p>
          </AccordionSection>
        </Accordions>

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

        <AccordionSection id="panel1" title="Panel 1" barChildren="Panel 1" hasError={errorPanels.includes(0)}>
          <PanelComponent tekst="Innhold 1" />
        </AccordionSection>
        <AccordionSection id="panel2" title="Panel 2" barChildren="Panel 2" hasError={errorPanels.includes(1)}>
          <PanelComponent tekst="Innhold 2" />
        </AccordionSection>
        <AccordionSection id="panel3" title="Panel 3" barChildren="Panel 3" hasError={errorPanels.includes(2)}>
          <PanelComponent tekst="Innhold 3" />
        </AccordionSection>
        <AccordionSection
          id="accPanel"
          title="With tiny accordion inside"
          hasError={errorPanels.includes(3)}
          barChildren="Accordion with tiny accordion inside"
        >
          <TinyAccordionExample />
        </AccordionSection>
      </ComponentInfo>
    );
  }
}

export default AccordionExample2;
