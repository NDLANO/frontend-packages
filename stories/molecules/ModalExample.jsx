import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Tooltip from '@ndla/tooltip';
import { FilterList } from '@ndla/ui';
import Modal, { ModalHeader, ModalBody, ModalCloseButton } from '@ndla/modal';
import { ButtonV2 } from '@ndla/button';
import { HelpCircle } from '@ndla/icons/common';

import ComponentInfo from '../ComponentInfo';

const ModalDemo = ({ title, size, animation, backgroundColor, headerColorModifier, position }) => (
  <Modal
    narrow
    size={size}
    animation={animation}
    backgroundColor={backgroundColor}
    position={position}
    activateButton={<ButtonV2 variant="outline">{title}</ButtonV2>}
  >
    {(onClose) => (
      <Fragment>
        <ModalHeader modifier={headerColorModifier}>
          <ModalCloseButton title="Lukk" onClick={onClose} />
        </ModalHeader>
        <ModalBody>
          <h1>Nice Modal!</h1>
          <hr />
          <p>Well done</p>
        </ModalBody>
      </Fragment>
    )}
  </Modal>
);

ModalDemo.propTypes = {
  title: PropTypes.string.isRequired,
  size: PropTypes.string,
  backgroundColor: PropTypes.string,
  headerColorModifier: PropTypes.string,
  animation: PropTypes.string,
};

class ModalExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: 'regular',
      backgroundColor: 'blue',
      headerColorModifier: 'blue',
      animation: 'zoom-in',
      position: 'center',
    };
  }

  render() {
    return (
      <ComponentInfo
        reactCode={`
  import Modal, { ModalHeader, ModalBody, ModalCloseButton } from '@ndla/modal';

  <Modal
    activateButton={<Button>Open modal</Button>}
  >
    {(onClose) => (
      <ModalHeader>
        <ModalCloseButton onClick={onClose} />
      </ModalHeader>
      <ModalBody>
        <h1>Modal example</h1>
        <hr />
        <p>Enkelt eksempel med ModalHeader og ModalBody samt ModalCloseButton. Disse er valgfrie hjelpe komponenter for å hjelpe til med styling/padding etc.</p>
      </ModalBody>
    )}
  </Modal>
        `}
        usesPropTypes={[
          {
            name: 'children',
            type: 'Function',
            default: 'Required',
            description:
              '{(onClose) => ( <button type="button" onClick={onClose}>Lukk modal</button> )}. Children rendres og onClose funksjon blir sendt som parameter.',
          },
          {
            name: 'activateButton',
            type: 'Node',
            default: 'Required',
            description: 'Node (knapp) som trigger modal open.',
          },
          {
            name: 'onOpen',
            type: 'Function',
            default: 'undefined',
            description: 'Trigges ved åpning av modal',
          },
          {
            name: 'onClose',
            type: 'Function',
            default: 'undefined',
            description: 'Callback funksjon ved lukking av modal.',
          },
          {
            name: 'narrow',
            type: 'Boolean',
            default: 'false',
            description: 'Justerer styling på modal og innhold. Mindre heading på <h1 />, paddinger m.m.',
          },
          {
            name: 'size',
            type: 'String',
            default: 'regular',
            description: `PropTypes.oneOf([
              'regular',
              'medium',
              'large',
              'fullscreen',
              'full-width',
              'custom',
            ])`,
          },
          {
            name: 'animation',
            type: 'String',
            default: 'zoom-in',
            description: `PropTypes.oneOf(['slide-down', 'zoom-in', 'subtle'])`,
          },
          {
            name: 'backgroundColor',
            type: 'String',
            default: 'blue',
            description: `PropTypes.oneOf(['blue', 'white', 'grey', 'grey-dark'])`,
          },
          {
            name: 'noBackdrop',
            type: 'Bool',
            default: 'false',
            description: 'Hindrer autorendring av gjennomsiktlig bakgrunn.',
          },
          {
            name: 'position',
            type: 'String',
            default: 'center',
            description: `PropTypes.oneOf(['center', 'top', 'bottom']),`,
          },
          {
            name: 'wrapperFunctionForButton',
            type: 'Function',
            default: 'undefined',
            description:
              'Wrapperfunction for activateButton. Fin å bruke når modal skal trigges av et element som også har <Tooltip />',
          },
        ]}
        status={2}
        messages={[
          'Kommer med 3 hjelpe komponenter; <ModalHeader>, <ModalBody> og <ModalCloseButton>',
          'Hjelpekomponentene er ment å hjelpe for å få et mer unisont design.',
          'Vil etterhvert erstatte <Dialog /> komponenten.',
        ]}
      >
        <p>
          Modal som håndterer åpne/lukke states og håndterer automatisk lås av pagescroll, scroll på content, focus-trap
          samt ESC-exit. Krever at minst ett child-element er focusable. Animasjon inn/ut, størrelser og bakgrunn kan
          enkelt endres ved behov. Tar også onOpen og onClose som functions via props.
        </p>
        <h3>Enkel versjon:</h3>
        <Modal narrow activateButton={<ButtonV2 variant="outline">Åpne modal</ButtonV2>}>
          {(onClose) => (
            <Fragment>
              <ModalHeader>
                <ModalCloseButton title="Lukk" onClick={onClose} />
              </ModalHeader>
              <ModalBody>
                <h1>Hva ønsker du å gjøre?</h1>
                <hr />
                <p>Lukk denne modal eller åpne en ny modal fra denne modalen</p>
                <div className="u-horisontal-list">
                  <Modal narrow size="fullscreen" activateButton={<ButtonV2>Åpne ny modal</ButtonV2>}>
                    {(onClose2ndModal) => (
                      <Fragment>
                        <ModalHeader>
                          <ModalCloseButton title="Lukk" onClick={onClose2ndModal} />
                        </ModalHeader>
                        <ModalBody>
                          <h1>En modal over modal!</h1>
                          <hr />
                          <p>
                            All logikk håndteres automagisk! Trykk lukk, trykk utenfor modal eller lukk med
                            ESCAPE-knappen
                          </p>
                        </ModalBody>
                      </Fragment>
                    )}
                  </Modal>
                  <ButtonV2 variant="outline" onClick={onClose}>
                    Lukk Modal
                  </ButtonV2>
                </div>
              </ModalBody>
            </Fragment>
          )}
        </Modal>
        <h3>Eksempel med wrapper</h3>
        <p>
          Noen ganger må vi wrappe modalen ved behov igjennom prop funksjonen wrapperFunctionForButton. Nyttig når man
          skal ha Modal på en komponent som feks {`<Tooltip />`}
        </p>
        <span>Trykk på ikon for å åpne:</span>
        <Modal
          narrow
          wrapperFunctionForButton={(activateButton) => <Tooltip tooltip="Trykk på meg!">{activateButton}</Tooltip>}
          activateButton={
            <ButtonV2 variant="stripped" tabIndex={-1}>
              <HelpCircle />
            </ButtonV2>
          }
        >
          {(onClose) => (
            <Fragment>
              <ModalHeader>
                <ModalCloseButton title="Lukk" onClick={onClose} />
              </ModalHeader>
              <ModalBody>
                <h1>Modal heading</h1>
                <hr />
                <p>Some modal content here..</p>
              </ModalBody>
            </Fragment>
          )}
        </Modal>
        <h3 className="u-heading">Prøv ulike varianter:</h3>
        <h4>Velg animasjon</h4>
        <FilterList
          labelNotVisible
          options={[
            { title: 'Zoom in (default)', value: 'zoom-in' },
            { title: 'Subtle', value: 'subtle' },
            { title: 'Slide down', value: 'slide-down' },
          ]}
          values={[this.state.animation]}
          onChange={(e) => {
            this.setState({
              animation: e.pop(),
            });
          }}
        />
        <h4>Velg Størrelse</h4>
        <FilterList
          labelNotVisible
          options={[
            { title: 'Vanlig', value: 'regular' },
            { title: 'Medium bred', value: 'medium' },
            { title: 'Bred', value: 'large' },
            { title: 'Fullskjerm', value: 'fullscreen' },
            {
              title: 'Fullbredde (eks søkefelt i header)',
              value: 'full-width',
            },
          ]}
          values={[this.state.size]}
          onChange={(e) => {
            this.setState({
              size: e.pop(),
            });
          }}
        />
        <h4>Velg Bakgrunnsfarge</h4>
        <FilterList
          labelNotVisible
          options={[
            { title: 'Standard', value: 'blue' },
            { title: 'Hvit', value: 'white' },
            { title: 'Grå', value: 'grey' },
            { title: 'Mørk-grå', value: 'grey-dark' },
          ]}
          values={[this.state.backgroundColor]}
          onChange={(e) => {
            this.setState({
              backgroundColor: e.pop(),
            });
          }}
        />
        <h4>Velg bakgrunnsfarge på header</h4>
        <FilterList
          labelNotVisible
          preid="header"
          options={[
            { title: 'Standard', value: 'blue' },
            { title: 'Hvit', value: 'white' },
            { title: 'Grå', value: 'grey' },
            { title: 'Mørk-grå', value: 'grey-dark' },
          ]}
          values={[this.state.headerColorModifier]}
          onChange={(e) => {
            this.setState({
              headerColorModifier: e.pop(),
            });
          }}
        />
        <h4>Velg posisjonering</h4>
        <FilterList
          labelNotVisible
          options={[
            { title: 'Midtstilt', value: 'center' },
            { title: 'Topp', value: 'top' },
            { title: 'Bunn', value: 'bottom' },
          ]}
          values={[this.state.position]}
          onChange={(e) => {
            this.setState({
              position: e.pop(),
            });
          }}
        />
        <br />
        <ModalDemo
          title="Åpne tilpasset modal"
          size={this.state.size}
          animation={this.state.animation}
          backgroundColor={this.state.backgroundColor}
          headerColorModifier={this.state.headerColorModifier}
          position={this.state.position}
        />
      </ComponentInfo>
    );
  }
}

export default ModalExample;
