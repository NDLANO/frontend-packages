import React from 'react';

import Tooltip from '@ndla/tooltip';
import Button from '@ndla/button';
import ComponentInfo from '../ComponentInfo';

const TooltipExample = () => (
  <ComponentInfo
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
    messages={['Sjekk Aria før lansering!']}>
    <p>
      Wrappes rundt elementer hvor man vil ha en enkel tooltip-tekst ved fokus / hover events. Skal
      tilpasse seg nettleservindu ved behov. Ignoreres av mobil / tablets
    </p>
    <h3>Vanlig tooltip:</h3>
    <Tooltip tooltip="Eksempel basic">
      <Button appearance="outline">Hover me!</Button>
    </Tooltip>
    <h3>Delayed tooltip:</h3>
    <Tooltip tooltip="Eksempel basic" delay={500}>
      <Button appearance="outline">Vent 500ms før visning av tooltip!</Button>
    </Tooltip>
    <h3>Plasseringsvalg for tooltip:</h3>
    <div className="u-horisontal-list">
      <Tooltip tooltip="Plasseres over" align="top">
        <Button appearance="outline">Topp</Button>
      </Tooltip>
      <Tooltip tooltip="Plasseres til venstre" align="left">
        <Button appearance="outline">Venstre</Button>
      </Tooltip>
      <Tooltip tooltip="Plasseres til høyre" align="right">
        <Button appearance="outline">Høyre</Button>
      </Tooltip>
      <Tooltip tooltip="Plasseres under" align="bottom">
        <Button appearance="outline">Bunn</Button>
      </Tooltip>
    </div>
  </ComponentInfo>
);

export default TooltipExample;
