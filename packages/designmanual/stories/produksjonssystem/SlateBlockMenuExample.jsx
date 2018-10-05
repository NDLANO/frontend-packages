import React, { Component } from 'react';
import { SlateBlockMenu } from 'ndla-editor';
import { Camera } from 'ndla-icons/editor';
import { HelpCircleDual } from 'ndla-icons/common';

const actions = [
  {
    data: { type: 'block', object: 'block' },
    label: 'Paragraf',
    icon: <Camera />,
    helpIcon: <HelpCircleDual />,
  },
  {
    data: { type: 'aside', object: 'factAside' },
    label: 'Faktaboks',
    icon: <Camera /> /* icon: <FactBox />, */,
  },
  {
    data: { type: 'table', object: 'table' },
    label: 'Tabell',
    icon: <Camera /> /* icon: <Table />, */,
  },
  {
    data: { type: 'bodybox', object: 'bodybox' },
    label: 'Tekst i ramme',
    icon: <Camera /> /* icon: <TextInBox />, */,
  },
  {
    data: { type: 'details', object: 'details' },
    label: 'Ekspanderende boks',
    icon: <Camera /> /* icon: <ExpandableBox />, */,
  },
  {
    data: { type: 'embed', object: 'image' },
    label: 'Bilde',
    icon: <Camera /> /* icon: <Camera />, */,
  },
  {
    data: { type: 'embed', object: 'video' },
    label: 'Video',
    icon: <Camera /> /* icon: <Video /> */,
  },
  {
    data: { type: 'embed', object: 'audio' },
    label: 'Lyd',
    icon: <Camera /> /* icon: <Audio /> */,
  },
  {
    data: { type: 'embed', object: 'h5p' },
    label: 'H5P',
    icon: <Camera /> /* icon: <H5P /> */,
  },
  {
    data: { type: 'related', object: 'related' },
    label: 'Relatert artikkel',
    icon: <Camera /> /* icon: <RelatedArticle />, */,
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

  onToggleOpen() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
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
            console.log(data);
          }}
        />
      </div>
    );
  }
}

export default SlateBlockMenuExample;
