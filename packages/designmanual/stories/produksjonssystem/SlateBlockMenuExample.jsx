import React, { Component } from 'react';
import { SlateBlockMenu } from 'ndla-editor';

const actions = [{ data: { type: 'type', object: 'object' }, label: 'teser' }];

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
      <SlateBlockMenu
        isOpen={this.state.isOpen}
        heading="Legg til"
        actions={actions}
        onToggleOpen={this.onToggleOpen}
        clickItem={data => {
          console.log(data);
        }}
      />
    );
  }
}

export default SlateBlockMenuExample;
