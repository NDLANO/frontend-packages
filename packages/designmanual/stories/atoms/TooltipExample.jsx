import React from 'react';

import Tooltip from '@ndla/tooltip';
import Button from '@ndla/button';
import ComponentInfo from '../ComponentInfo';

const TooltipExample = () => (
  <ComponentInfo
    reactCode={`
<Tooltip
  id="dinValgfrieId"
  tooltip="Tekst som skal vises som tips"
>
  {children}
</Tooltip>
    `}
    usesPropTypes={[
      {
        name: 'id',
        type: 'String',
        default: 'undefined',
        description: `Optional ID`,
      },
      {
        name: 'children',
        type: 'ReactNode',
        default: 'Required',
        description: 'Hva tooltip wrappes rundt',
      },
      {
        name: 'tooltip',
        type: 'String',
        default: 'Required',
        description: 'Teksten som skal vises frem',
      },
    ]}
    status={2}>
    <p>
      Wrappes rundt elementer hvor man vil ha en enkel tooltip-tekst ved fokus / hover events. Skal tilpasse seg
      nettleservindu ved behov. Ignoreres av mobil / tablets
    </p>
    <h3>Vanlig tooltip:</h3>
    <Tooltip tooltip="Bruk av tooltip på <Button>">
      <Button appearance="outline">Hover me!!!</Button>
    </Tooltip>
  </ComponentInfo>
);

export default TooltipExample;
