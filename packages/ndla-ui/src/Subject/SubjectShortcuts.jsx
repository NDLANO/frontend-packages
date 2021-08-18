import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup } from 'react-transition-group';
import BEMHelper from 'react-bem-helper';
import { Forward } from '@ndla/icons/common';
import SafeLink from '@ndla/safelink';
import { SubjectSectionTitle } from './Subject';
import Fade from '../Animation/Fade';

const classes = BEMHelper('c-subject-shortcuts');

class SubjectShortcuts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleCount: props.defaultVisableCount,
    };

    this.handleOnExpand = this.handleOnExpand.bind(this);
  }

  handleOnExpand(expanded) {
    const newVisibleCount = expanded ? this.props.links.length : this.props.defaultVisableCount;

    this.setState({
      visibleCount: newVisibleCount,
    });
  }

  render() {
    const { links, messages, defaultVisableCount } = this.props;
    const id = 'subject-shortcut';

    const showExpand = defaultVisableCount < links.length;
    let button = null;
    let filteredLinks = this.props.links;

    if (showExpand) {
      const isExpanded = this.state.visibleCount > defaultVisableCount;
      const buttonText = isExpanded ? messages.showLess : messages.showMore;

      button = (
        <button
          type="button"
          aria-expanded={isExpanded}
          aria-controls={id}
          onClick={() => this.handleOnExpand(!isExpanded)}
          {...classes('expand-button')}>
          <Forward />
          <span>{buttonText}</span>
        </button>
      );

      filteredLinks = this.props.links.filter((link, index) => index < this.state.visibleCount);
    }
    return (
      <section {...classes('')}>
        <SubjectSectionTitle>{messages.heading}</SubjectSectionTitle>
        <nav id={id}>
          <TransitionGroup className={classes('list').className} component="ul">
            {filteredLinks.map((link) => (
              <Fade key={link.url}>
                <li {...classes('item')}>
                  <SafeLink to={link.url}>{link.text}</SafeLink>
                </li>
              </Fade>
            ))}
          </TransitionGroup>
        </nav>
        {button}
      </section>
    );
  }
}

SubjectShortcuts.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ).isRequired,
  messages: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    showMore: PropTypes.string.isRequired,
    showLess: PropTypes.string.isRequired,
  }).isRequired,
  defaultVisableCount: PropTypes.number,
};

SubjectShortcuts.defaultProps = {
  defaultVisableCount: 6,
};

export default SubjectShortcuts;
