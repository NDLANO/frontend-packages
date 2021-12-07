import { useState } from 'react';
import { Switch } from '@ndla/switch';
import { StoryBody, StoryIntro } from '../wrappers';
import ComponentInfo from '../ComponentInfo';

const SwitchExample = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <>
      <StoryIntro title="Switch button">
        <p>Brukes istedet for checkbox når man ser endringen med engang og det kun er on/off state</p>
      </StoryIntro>
      <StoryBody>
        <ComponentInfo
          reactCode={`
            <Switch
              checked={true}
              label="Tilleggsstoff"
              id="uniqeId"
              onChange={() => {}}
            />
          `}
          usesPropTypes={[
            {
              name: 'checked',
              type: 'boolean',
              default: 'Required',
            },
            {
              name: 'label',
              type: 'string',
              default: 'Required',
            },
            {
              name: 'id',
              type: 'string',
              default: 'Required',
            },
            {
              name: 'onChange',
              type: 'Function',
              default: 'Required',
              description: '(val) => {}',
            },
            {
              name: 'disabled',
              type: 'boolean',
              default: 'optional',
            },
          ]}
          status={3}>
          <h2 className="u-heading">Switch eksempel</h2>
          <div className="u-margin-top">
            <Switch label="Tilleggstoff" id="exampleID" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
          </div>
        </ComponentInfo>
      </StoryBody>
    </>
  );
};

export default SwitchExample;
