/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Fragment } from 'react';
import { render, fireEvent } from '@testing-library/react';

import Accordion, { AccordionBar, AccordionPanel, AccordionWrapper } from '../';

const AccordionExample = (props) => (
  <Accordion {...props}>
    {({ getPanelProps, handleItemClick }) => (
      <AccordionWrapper>
        {['Innhold 1', 'Innhold 2', 'Innhold 3'].map((item, index) => (
          <Fragment key={item}>
            <AccordionBar
              panelId={`panel-${index}`}
              title={`Panel ${index}`}
              onClick={() => handleItemClick(index)}
              data-testid={`bar-${index}`}
            >
              Panel {index}
            </AccordionBar>
            <AccordionPanel {...getPanelProps(index)} data-testid={`panel-${index}`}>
              <div>
                <p>{item}</p>
              </div>
            </AccordionPanel>
          </Fragment>
        ))}
      </AccordionWrapper>
    )}
  </Accordion>
);

test('Accordion provided openIndex are visible', () => {
  const { getByTestId } = render(<AccordionExample openIndexes={[0]} />);
  expect(getByTestId('panel-0')).toBeVisible();
  expect(getByTestId('panel-1')).not.toBeVisible();
  expect(getByTestId('panel-2')).not.toBeVisible();
});

test('Accordion provided openIndexes are visible', () => {
  const { getByTestId } = render(<AccordionExample openIndexes={[1, 2]} />);
  expect(getByTestId('panel-0')).not.toBeVisible();
  expect(getByTestId('panel-1')).toBeVisible();
  expect(getByTestId('panel-2')).toBeVisible();
});

test('Accordion opens and closes panel on bar click', () => {
  const { getByTestId, getByLabelText } = render(<AccordionExample openIndexes={[]} />);
  expect(getByTestId('panel-0')).not.toBeVisible();

  fireEvent.click(getByLabelText('Panel 0'));
  expect(getByTestId('panel-0')).toBeVisible();

  fireEvent.click(getByLabelText('Panel 0'));
  expect(getByTestId('panel-0')).not.toBeVisible();
});

test('Accordion opens multiple panels', () => {
  const { getByTestId, getByLabelText } = render(<AccordionExample />);

  fireEvent.click(getByLabelText('Panel 0'));
  fireEvent.click(getByLabelText('Panel 2'));
  expect(getByTestId('panel-0')).toBeVisible();
  expect(getByTestId('panel-2')).toBeVisible();
});

test('Accordion only opens one panel at a time', () => {
  const { getByTestId, getByLabelText } = render(<AccordionExample single />);

  fireEvent.click(getByLabelText('Panel 1'));
  expect(getByTestId('panel-0')).not.toBeVisible();
  expect(getByTestId('panel-1')).toBeVisible();
  expect(getByTestId('panel-2')).not.toBeVisible();

  fireEvent.click(getByLabelText('Panel 2'));
  expect(getByTestId('panel-0')).not.toBeVisible();
  expect(getByTestId('panel-1')).not.toBeVisible();
  expect(getByTestId('panel-2')).toBeVisible();
});
