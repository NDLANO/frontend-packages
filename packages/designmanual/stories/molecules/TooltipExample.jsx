import React from 'react';

import { Tooltip, Styleguide } from 'ndla-ui';

const TooltipExample = () => (
  <Styleguide
    reactCode={`
      <Tooltip
        align="right"
        delay={300}
      >
        {children}
      </Tooltip>
    `}
    usesPropTypes={[
      {
        name: 'children',
        type: 'Node',
        default: 'Required',
        description: '',
      },
      {
        name: 'align',
        type: 'String',
        default: 'top',
        description: `PropTypes.oneOf(['left', 'right', 'top', 'bottom'])`,
      },
      {
        name: 'delay',
        type: 'Number',
        default: 0,
        description: 'Tooltip er ikke tilgjengelig før X ms',
      },
    ]}
    status={2}
    messages="Sjekk Aria før lansering!">
    <p>
      Wrappes rundt elementer hvor man vil ha en enkel tooltip-tekst ved fokus /
      hover events. Skal tilpasse seg nettleservindu ved behov. Ignoreres av
      mobil / tablets
    </p>
    <h3>Vanlig tooltip:</h3>
    <Tooltip tooltip="Eksempel basic">
      <div className="c-button c-button--outline">Hover me!</div>
    </Tooltip>
    <h3>Delayed tooltip:</h3>
    <Tooltip tooltip="Eksempel basic" delay={500}>
      <div className="c-button c-button--outline">
        Vent 500ms før visning av tooltip!
      </div>
    </Tooltip>
    <h3>Plasseringsvalg for tooltip:</h3>
    <div className="c-styleguide__aslist">
      <Tooltip tooltip="Plasseres over" align="top">
        <div className="c-button c-button--outline">Topp</div>
      </Tooltip>
      <Tooltip tooltip="Plasseres til venstre" align="left">
        <div className="c-button c-button--outline">Venstre</div>
      </Tooltip>
      <Tooltip tooltip="Plasseres til høyre" align="right">
        <div className="c-button c-button--outline">Høyre</div>
      </Tooltip>
      <Tooltip tooltip="Plasseres under" align="bottom">
        <div className="c-button c-button--outline">Bunn</div>
      </Tooltip>
    </div>
  </Styleguide>
);

export default TooltipExample;
