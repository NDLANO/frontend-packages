import React, { Component, Fragment } from 'react';
import { css } from 'react-emotion';
import { colors } from '@ndla/core';
import Button from '@ndla/button';
import { SlateBlockMenu } from '@ndla/editor';
import {
  Quote,
  Camera,
  FactBoxMaterial,
  Link as LinkIcon,
  TableMaterial,
  ArrowExpand,
  Framed,
  PlayBoxOutline,
  PresentationPlay,
} from '@ndla/icons/editor';
import { VolumeUp, HelpCircleDual } from '@ndla/icons/common';
import Modal, { ModalBody, ModalHeader, ModalCloseButton } from '@ndla/modal';

const dualIconCSS = css`
  // dual coloured icon..
  #HelpCircleDual-background {
    fill: ${colors.brand.light};
  }
  #HelpCircleDual-symbol {
    fill: ${colors.brand.dark};
  }
  &:hover,
  &:focus {
    #HelpCircleDual-background {
      fill: ${colors.brand.primary};
    }
    #HelpCircleDual-symbol {
      fill: #fff;
    }
  }
`;

const ExampleHelpIcon = () => (
  <Modal
    activateButton={
      <Button stripped tabIndex={-1} className={dualIconCSS}>
        <HelpCircleDual className="c-icon--22" />
      </Button>
    }>
    {onClose => (
      <Fragment>
        <ModalHeader>
          <ModalCloseButton onClick={onClose} title="Lukk" />
        </ModalHeader>
        <ModalBody>Some tekst..</ModalBody>
      </Fragment>
    )}
  </Modal>
);

const actions = [
  {
    data: { type: 'block', object: 'block' },
    label: 'Paragraf',
    icon: <Quote />,
    helpIcon: <ExampleHelpIcon />,
  },
  {
    data: { type: 'aside', object: 'factAside' },
    label: 'Faktaboks',
    icon: <FactBoxMaterial />,
    helpIcon: <ExampleHelpIcon />,
  },
  {
    data: { type: 'table', object: 'table' },
    label: 'Tabell',
    icon: <TableMaterial />,
    helpIcon: <ExampleHelpIcon />,
  },
  {
    data: { type: 'bodybox', object: 'bodybox' },
    label: 'Tekst i ramme',
    icon: <Framed />,
    helpIcon: <ExampleHelpIcon />,
  },
  {
    data: { type: 'details', object: 'details' },
    label: 'Ekspanderende boks',
    icon: <ArrowExpand />,
    helpIcon: <ExampleHelpIcon />,
  },
  {
    data: { type: 'embed', object: 'image' },
    label: 'Bilde',
    icon: <Camera />,
    helpIcon: <ExampleHelpIcon />,
  },
  {
    data: { type: 'embed', object: 'video' },
    label: 'Video',
    icon: <PlayBoxOutline />,
    helpIcon: <ExampleHelpIcon />,
  },
  {
    data: { type: 'embed', object: 'audio' },
    label: 'Lyd',
    icon: <VolumeUp />,
    helpIcon: <ExampleHelpIcon />,
  },
  {
    data: { type: 'embed', object: 'h5p' },
    label: 'H5P',
    icon: <PresentationPlay />,
    helpIcon: <ExampleHelpIcon />,
  },
  {
    data: { type: 'related', object: 'related' },
    label: 'Relatert artikkel',
    icon: <LinkIcon />,
    helpIcon: <ExampleHelpIcon />,
  },
];

class SlateBlockMenuExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.onToggleOpen = this.onToggleOpen.bind(this);
  }

  onToggleOpen(isOpen) {
    this.setState({
      isOpen,
    });
  }

  render() {
    return (
      <div style={{ height: '700px' }}>
        <SlateBlockMenu
          isOpen={this.state.isOpen}
          heading="Legg til"
          actions={actions}
          onToggleOpen={this.onToggleOpen}
          clickItem={data => {
            console.log(data); // eslint-disable-line no-console
          }}
        />
      </div>
    );
  }
}

export default SlateBlockMenuExample;
