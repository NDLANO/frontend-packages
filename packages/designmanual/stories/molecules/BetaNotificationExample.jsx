import React, { Component } from 'react';
import { BetaNotification } from '@ndla/ui';

const betaMessages = {
  heading: 'Hei!',
  text: `Du har nå kommet inn på de nye nettsidene våre.
    Vi prøver ut en ny løsning i utvalgte fag og vil
    forsikre oss om at alt virker som det skal før skolestart.
    Får du problemer på sidene, setter vi pris på om du sender
    oss en melding. Kontakt oss på "Spør NDLA" nederst til
    venstre på sidene.`,
  readmoreText: 'Les mer på om.ndla.no',
  readmoreLink: 'http://www.om.ndla.no',
  buttonText: 'Ok, nå vet jeg det',
};

class BetaNotificationExample extends Component {
  constructor(props) {
    super(props);
    this.state = { showInfo: true };
    this.onAccept = this.onAccept.bind(this);
  }

  onAccept() {
    this.setState({ showInfo: false });
  }

  render() {
    if (!this.state.showInfo) {
      return null;
    }
    return (
      <BetaNotification messages={betaMessages} onAccept={this.onAccept} />
    );
  }
}

export default BetaNotificationExample;
