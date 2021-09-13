import React, { ReactNode, Component, createRef, Fragment, RefObject } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { Forward } from '@ndla/icons/common';
import { Cross } from '@ndla/icons/action';
import SafeLink from '@ndla/safelink';
import SectionHeading from '../SectionHeading';

const classes = BEMHelper('c-subject-archive');

interface Props {
  featuringArticle: {
    media: ReactNode;
    heading: string;
    description: string;
    url: string;
  };
  archiveArticles: { url: string; heading: string }[];
  sectionHeading: string;
  fixedWidth?: boolean;
  messages: { archive: string; close: string };
}

interface State {
  archiveOpen: boolean;
  minHeight: number | null;
}

class SubjectArchive extends Component<Props, State> {
  wrapperRef: RefObject<HTMLElement> | null = createRef<HTMLElement>();
  constructor(props: Props) {
    super(props);
    this.state = {
      archiveOpen: false,
      minHeight: null,
    };

    this.handleToggleArchive = this.handleToggleArchive.bind(this);
  }

  handleToggleArchive() {
    this.setState((prevState) => {
      const newState: State = {
        archiveOpen: !prevState.archiveOpen,
        minHeight: null,
      };

      if (!prevState.minHeight) {
        newState.minHeight = this.wrapperRef?.current?.offsetHeight ?? null;
      }

      return newState;
    });
  }

  render() {
    const { fixedWidth = false, featuringArticle, messages, sectionHeading, archiveArticles } = this.props;

    const archiveId = 'subject-archive';

    const section = this.state.archiveOpen ? (
      <nav id={archiveId} {...classes('archive')}>
        <ul {...classes('archive-articles')}>
          {archiveArticles.map((article) => (
            <li key={article.heading}>
              <SafeLink to={article.url}>{article.heading}</SafeLink>
            </li>
          ))}
        </ul>
      </nav>
    ) : (
      <section {...classes('featuring')}>
        <div {...classes('media-wrapper')}>{featuringArticle.media}</div>
        <div {...classes('content')}>
          <h1 {...classes('heading')}>
            <SafeLink to={featuringArticle.url}>{featuringArticle.heading}</SafeLink>
          </h1>
          <p {...classes('description')}>{featuringArticle.description}</p>
        </div>
      </section>
    );

    const subClasses = Object.entries({ fixedWidth, animate: !!this.state.minHeight })
      .filter(([_, include]) => include)
      .map(([className, _]) => className);

    return (
      <section {...classes('', subClasses)} ref={this.wrapperRef}>
        <SectionHeading large className={classes('section-heading').className}>
          {sectionHeading}
        </SectionHeading>
        <div {...classes('wrapper')}>
          {section}
          <button
            type="button"
            aria-expanded={this.state.archiveOpen}
            aria-controls={archiveId}
            className={classes('archive-button').className}
            onClick={this.handleToggleArchive}>
            {this.state.archiveOpen ? (
              <Fragment>
                <Cross /> <span>{messages.close}</span>
              </Fragment>
            ) : (
              <Fragment>
                <Forward /> <span>{messages.archive}</span>
              </Fragment>
            )}
          </button>
        </div>
      </section>
    );
  }
  static propTypes = {
    featuringArticle: PropTypes.shape({
      media: PropTypes.node.isRequired,
      heading: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }).isRequired,
    archiveArticles: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string.isRequired,
        heading: PropTypes.string.isRequired,
      }),
    ).isRequired,
    sectionHeading: PropTypes.string.isRequired,
    fixedWidth: PropTypes.bool,
    messages: PropTypes.shape({
      archive: PropTypes.string.isRequired,
    }),
  };

  static defaultProps = {
    fixedWidth: false,
  };
}

export default SubjectArchive;
