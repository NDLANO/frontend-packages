import React from 'react';
import PropTypes from 'prop-types';
import { EditorState } from 'draft-js';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { getComponentName } from 'ndla-util';

const withStateHandler = (WrappedComponent) => {
  class EditorStateHandler extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: props.value ? props.value : EditorState.createEmpty(),
      };

      this.onChange = this.onChange.bind(this);
    }

    onChange(value) {
      this.setState({ value });
    }

    render() {
      const nextProps = { ...this.props,
        value: this.state.value,
        onChange: this.onChange,
      };

      return React.createElement(WrappedComponent, nextProps);
    }
  }

  EditorStateHandler.propTypes = {
    value: PropTypes.instanceOf(EditorState).isRequired,
  };
  EditorStateHandler.displayName = `EditorStateHandler(${getComponentName(WrappedComponent)})`;
  return hoistNonReactStatics(EditorStateHandler, WrappedComponent);
};

export default withStateHandler;
