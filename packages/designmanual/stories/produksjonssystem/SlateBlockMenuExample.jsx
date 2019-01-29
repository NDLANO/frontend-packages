import React, { Component } from 'react';
import { css } from 'react-emotion';
import { spacing, colors } from '@ndla/core';
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
  RelatedArticle,
} from '@ndla/icons/editor';
import { ArticleInModal, InfoIcon } from '@ndla/sanity';
import { VolumeUp, Download } from '@ndla/icons/common';
import { sanityConfig, client as sanityClient } from './sanityConfig';

const iconClass = css`
  color: ${colors.brand.tertiary};
  width: ${26 * 1.5}px;
  height: ${26 * 1.5}px;
  padding: ${spacing.xsmall};

  &:hover,
  &:focus {
    color: ${colors.brand.primary};
  }
`;

const renderArticleInModal = pageId => (
  <ArticleInModal
    sanityConfig={sanityConfig}
    sanityClient={sanityClient}
    pageId={pageId}
    inBeta
    activateButton={<InfoIcon className={iconClass} />}
  />
);

const actions = [
  {
    data: { type: 'block', object: 'block' },
    label: 'Paragraf',
    icon: <Quote />,
    helpIcon: renderArticleInModal('279f758d-6a42-45d2-a567-3e9085a610bf'),
  },
  {
    data: { type: 'aside', object: 'factAside' },
    label: 'Faktaboks',
    icon: <FactBoxMaterial />,
    helpIcon: renderArticleInModal('d1226523-17af-4355-b6f9-3d4f520b742c'),
  },
  {
    data: { type: 'table', object: 'table' },
    label: 'Tabell',
    icon: <TableMaterial />,
    helpIcon: renderArticleInModal('5759dc70-b625-4535-9914-967669799cb3'),
  },
  {
    data: { type: 'bodybox', object: 'bodybox' },
    label: 'Tekst i ramme',
    icon: <Framed />,
    helpIcon: renderArticleInModal('b636f731-305d-4887-8e96-b9b9eeb1ad1d'),
  },
  {
    data: { type: 'details', object: 'details' },
    label: 'Ekspanderende boks',
    icon: <ArrowExpand />,
    helpIcon: renderArticleInModal('d556e1c9-8ebd-42c9-af4c-301730559e3a'),
  },
  {
    data: { type: 'embed', object: 'image' },
    label: 'Bilde',
    icon: <Camera />,
    helpIcon: renderArticleInModal('20b5f85e-effc-478f-9e65-6606a1b34976'),
  },
  {
    data: { type: 'embed', object: 'video' },
    label: 'Video',
    icon: <PlayBoxOutline />,
    helpIcon: renderArticleInModal('d9bafd12-fda3-457f-a250-3b535fedd8df'),
  },
  {
    data: { type: 'embed', object: 'audio' },
    label: 'Lyd',
    icon: <VolumeUp />,
    helpIcon: renderArticleInModal('95f76a61-6573-4012-b00c-665f2fbb474b'),
  },
  {
    data: { type: 'embed', object: 'h5p' },
    label: 'H5P',
    icon: <PresentationPlay />,
    helpIcon: renderArticleInModal('3ca3b864-7340-4391-8330-40ca9baaaf4f'),
  },

  {
    data: { type: 'embed', object: 'url' },
    label: 'Ressurs fra lenke',
    icon: <LinkIcon />,
    helpIcon: renderArticleInModal('7ab40c19-ad2f-4e3b-88ca-7e8e1344fea4'),
  },
  {
    data: { type: 'file', object: 'file' },
    label: 'Fil',
    icon: <Download />,
    helpIcon: renderArticleInModal('14b64684-bb9a-4698-981d-cf4453625fc7'),
  },
  {
    data: { type: 'related', object: 'related' },
    label: 'Relatert artikkel',
    icon: <RelatedArticle />,
    helpIcon: renderArticleInModal('fcf97c96-1b3a-4d5b-afb1-f9d7c84dddb3'),
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
