import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { Concept } from 'ndla-ui';

const classes = BEMHelper('c-subject-concepts');

class SubjectConcept extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
    this.showConceptDialog = this.showConceptDialog.bind(this);
    this.hideConceptDialog = this.hideConceptDialog.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleKeyUp() {
    this.showConceptDialog();
  }

  showConceptDialog() {
    const linkBounds = this.conceptLink.getBoundingClientRect();
    const viewportWidth = Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0,
    );
    const dialogX =
      250 + (linkBounds.left - linkBounds.width) + 500 > viewportWidth
        ? viewportWidth - (500 - linkBounds.width)
        : 250 + linkBounds.left;
    this.conceptDialog.style.top = `${linkBounds.bottom +
      window.pageYOffset}px`;
    this.conceptDialog.style.left = `${dialogX}px`;
    setTimeout(() => {
      this.setState({ visible: true });
    });
  }

  hideConceptDialog() {
    this.setState({ visible: false });
  }

  render() {
    const { concept } = this.props;
    return (
      <li {...classes('item')}>
        <Concept
          dialogRef={el => {
            this.conceptDialog = el;
          }}
          content={concept.content}
          authors={concept.authors}
          source={concept.source}
          title={concept.title}
          messages={concept.messages}
          license={concept.license}
          id={concept.id}
          visible={this.state.visible}
          closeCallback={this.hideConceptDialog}>
          <span
            className="c-concept__link"
            role="button"
            tabIndex={0}
            onClick={this.showConceptDialog}
            onKeyUp={this.handleKeyUp}
            ref={btn => {
              this.conceptLink = btn;
            }}>
            {concept.title}
          </span>
        </Concept>
      </li>
    );
  }
}

SubjectConcept.propTypes = {
  concept: PropTypes.shape(),
};

export default SubjectConcept;
