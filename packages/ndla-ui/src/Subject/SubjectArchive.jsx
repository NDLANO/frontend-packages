import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { Forward } from 'ndla-icons/common';
import { Cross } from 'ndla-icons/action';
import SafeLink from '../common/SafeLink';
import SectionHeading from '../SectionHeading';

const classes = BEMHelper('c-subject-archive');

class SubjectArchive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      archiveOpen: false,
      minHeight: null,
    };

    this.handleToggleArchive = this.handleToggleArchive.bind(this);
    this.wrapperRef = null;
  }

  handleToggleArchive() {
    this.setState(prevState => {
      const newState = {
        archiveOpen: !prevState.archiveOpen,
      };

      if (!prevState.minHeight) {
        newState.minHeight = this.wrapperRef.offsetHeight;
      }

      return newState;
    });
  }

  render() {
    const {
      fixedWidth,
      featuringArticle,
      messages,
      sectionHeading,
      archiveArticles,
    } = this.props;

    const archiveId = 'subject-archive';

    const section = this.state.archiveOpen ? (
      <nav id={archiveId} {...classes('archive')}>
        <ul {...classes('archive-articles')}>
          {archiveArticles.map(article => (
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
            <SafeLink to={featuringArticle.url}>
              {featuringArticle.heading}
            </SafeLink>
          </h1>
          <p {...classes('description')}>{featuringArticle.description}</p>
        </div>
      </section>
    );

    const wrapperStyles = this.state.minHeight
      ? {
          minHeight: this.state.minHeight,
        }
      : null;

    return (
      <section
        style={wrapperStyles}
        {...classes('', {
          fixedWidth,
          animate: this.state.minHeight,
        })}
        ref={ref => {
          this.wrapperRef = ref;
        }}>
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
}

SubjectArchive.propTypes = {
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

SubjectArchive.defaultProps = {
  fixedWidth: false,
};

export default SubjectArchive;
