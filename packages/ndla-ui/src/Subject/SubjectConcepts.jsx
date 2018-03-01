import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';

const classes = BEMHelper('c-subject-concepts');

import { Concept } from 'ndla-ui';

class SubjectConcept extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: false }
    this.showConceptDialog = this.showConceptDialog.bind(this)
    this.hideConceptDialog = this.hideConceptDialog.bind(this)
  }

  showConceptDialog() {
    const linkBounds = this.conceptLink.getBoundingClientRect();
    const viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    const dialogX = 250 + (linkBounds.left - linkBounds.width) + 500 > viewportWidth ? viewportWidth - (500 - linkBounds.width) : (250 + linkBounds.left);
    this.conceptDialog.style.top = (linkBounds.bottom + window.pageYOffset) + 'px';
    this.conceptDialog.style.left = dialogX + 'px';
    this.setState({ visible: true });
  }

  hideConceptDialog() {
    this.setState({ visible: false });
  }

  render() {
    const { concept } = this.props;
    return (
      <li {...classes('item')}>
        <Concept
          dialogRef={el => this.conceptDialog = el}
          content={ concept.content}
          authors={concept.authors}
          source={concept.source}
          title={ concept.title }
          messages={ concept.messages }
          license={ concept.license }
          id={concept.id}
          visible={this.state.visible}
          closeCallback={this.hideConceptDialog}>
          <span className='c-concept__link' onClick={this.showConceptDialog} ref={(btn) => {this.conceptLink = btn;}}>{concept.title}</span>
        </Concept>
      </li>
    );
  }
}

class SubjectConcepts extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { concepts } = this.props;
    return (
      <section {...classes('')}>
        <ul {...classes('list')}>
          { concepts.map((concept) => {
            return (
              <SubjectConcept  key={'subjectconcept-' + concept.id} concept={concept}/>
            );
          })}
        </ul>
      </section>
    );
  }
}

SubjectConcepts.propTypes = {
  concepts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      authors: PropTypes.arrayOf(PropTypes.string),
      source: PropTypes.string,
      content: PropTypes.string.isRequired,
      messages: PropTypes.shape({
        ariaLabel: PropTypes.string.isRequired,
        close: PropTypes.string.isRequired,
      }),
      license: PropTypes.string,
      children: PropTypes.string,
      visible: PropTypes.bool,
      closeCallback: PropTypes.func,
      dialogRef: PropTypes.func,
    })
  )
};

SubjectConcepts.defaultProps = {
  concepts: []
};

export default SubjectConcepts;
