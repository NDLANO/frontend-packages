import { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
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
  Keyhole,
  Code,
  Concept,
  ListCircle,
} from '@ndla/icons/editor';
import { ArticleInModal } from '@ndla/howto';
import { VolumeUp, Download, InformationOutline } from '@ndla/icons/common';

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

const renderArticleInModal = (pageId) => (
  <ArticleInModal pageId={pageId} activateButton={<InformationOutline css={iconClass} />} />
);

const actions = [
  {
    data: { type: 'block', object: 'block' },
    label: 'Paragraf',
    icon: <Quote />,
    helpIcon: renderArticleInModal('Paragraph'),
  },
  {
    data: { type: 'aside', object: 'factAside' },
    label: 'Faktaboks',
    icon: <FactBoxMaterial />,
    helpIcon: renderArticleInModal('FactASide'),
  },
  {
    data: { type: 'table', object: 'table' },
    label: 'Tabell',
    icon: <TableMaterial />,
    helpIcon: renderArticleInModal('Table'),
  },
  {
    data: { type: 'bodybox', object: 'bodybox' },
    label: 'Tekst i ramme',
    icon: <Framed />,
    helpIcon: renderArticleInModal('BodyBox'),
  },
  {
    data: { type: 'details', object: 'details' },
    label: 'Ekspanderbar boks',
    icon: <ArrowExpand />,
    helpIcon: renderArticleInModal('Details'),
  },
  {
    data: { type: 'blueprint', object: 'blueprint' },
    label: 'Fasitboks',
    icon: <Keyhole />,
    helpIcon: renderArticleInModal('Blueprint'),
  },
  {
    data: { type: 'embed', object: 'image' },
    label: 'Bilde',
    icon: <Camera />,
    helpIcon: renderArticleInModal('Images'),
  },
  {
    data: { type: 'embed', object: 'video' },
    label: 'Video',
    icon: <PlayBoxOutline />,
    helpIcon: renderArticleInModal('Videos'),
  },
  {
    data: { type: 'embed', object: 'audio' },
    label: 'Lyd',
    icon: <VolumeUp />,
    helpIcon: renderArticleInModal('Audios'),
  },
  {
    data: { type: 'embed', object: 'h5p' },
    label: 'h5p',
    icon: <PresentationPlay />,
    helpIcon: renderArticleInModal('h5p'),
  },

  {
    data: { type: 'embed', object: 'url' },
    label: 'Ressurs fra lenke',
    icon: <LinkIcon />,
    helpIcon: renderArticleInModal('ResourceFromLink'),
  },
  {
    data: { type: 'file', object: 'file' },
    label: 'Fil',
    icon: <Download />,
    helpIcon: renderArticleInModal('File'),
  },
  {
    data: { type: 'related', object: 'related' },
    label: 'Relatert artikkel',
    icon: <RelatedArticle />,
    helpIcon: renderArticleInModal('RelatedArticle'),
  },
  {
    data: { type: 'related', object: 'related' },
    label: 'Kodeblokk',
    icon: <Code />,
    helpIcon: renderArticleInModal('CodeBlock'),
  },
  {
    data: { type: 'concept', object: 'concept' },
    label: 'Forklaring',
    icon: <Concept />,
    helpIcon: renderArticleInModal('Concept'),
  },
  {
    data: { type: 'concept-list', object: 'conceptList' },
    label: 'Forklaringsliste',
    icon: <ListCircle />,
    helpIcon: renderArticleInModal('ConceptList'),
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
      <div style={{ height: `${this.props.height}px` }}>
        <SlateBlockMenu
          isOpen={this.state.isOpen}
          heading="Legg til"
          actions={actions}
          onToggleOpen={this.onToggleOpen}
          clickItem={(data) => {
            console.log(data); // eslint-disable-line no-console
          }}
        />
      </div>
    );
  }
}

SlateBlockMenuExample.propTypes = {
  height: PropTypes.number,
};

SlateBlockMenuExample.defaultProps = {
  height: 700,
};

export default SlateBlockMenuExample;
