import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import {
  SubjectMaterialBadge,
  AssessmentResourcesBadge,
  TasksAndActivitiesBadge,
} from 'ndla-ui';
import SafeLink from '../common/SafeLink';
import * as contentTypes from '../model/ContentType';

const classes = new BEMHelper({
  name: 'topic-shortcuts',
  prefix: 'c-',
});

function getShortcutSymbol(type, index) {
  switch (type) {
    case contentTypes.SUBJECT_MATERIAL:
      return (
        <SubjectMaterialBadge
          size="x-small"
          key={`${contentTypes.SUBJECT_MATERIAL}-${index}`}
        />
      );
    case contentTypes.TASKS_AND_ACTIVITIES:
      return (
        <TasksAndActivitiesBadge
          size="x-small"
          key={`${contentTypes.TASKS_AND_ACTIVITIES}-${index}`}
        />
      );
    case contentTypes.ASSESSMENT_RESOURCES:
      return (
        <AssessmentResourcesBadge
          size="x-small"
          key={`${contentTypes.ASSESSMENT_RESOURCES}-${index}`}
        />
      );
    default:
      return (
        <SubjectMaterialBadge
          size="x-small"
          key={`${contentTypes.SUBJECT_MATERIAL}-${index}`}
        />
      );
  }
}

class ShortcutType extends Component {
  constructor(props) {
    super(props);
    this.state = { showtooltip: false };
  }

  render() {
    const { shortcut } = this.props;
    const { showtooltip } = this.state;
    return (
      <li {...classes('item')}>
        {showtooltip ? (
          <span {...classes('tooltip')}>{shortcut.tooltip}</span>
        ) : null}
        <span {...classes('icons')}>
          {shortcut.symbols.map((symbol, index) =>
            getShortcutSymbol(symbol, index),
          )}
        </span>
        <span
          {...classes('count')}
          onMouseEnter={() => this.setState({ showtooltip: true })}
          onMouseLeave={() => this.setState({ showtooltip: false })}>
          <SafeLink to={shortcut.linkTo}>{shortcut.count}</SafeLink>
        </span>
      </li>
    );
  }
}

ShortcutType.propTypes = {
  shortcut: PropTypes.shape(),
};

export default ShortcutType;
