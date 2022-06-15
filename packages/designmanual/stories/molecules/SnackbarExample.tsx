/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useState } from 'react';
import { SnackBar, SnackBarItemProp } from '@ndla/ui';
import Button from '@ndla/button';

const SnackBarExample = () => {
  const [snack, setSnack] = useState<SnackBarItemProp>({});
  const snackAriaId = 'snack-id';
  return (
    <div>
      <div>
        <p>
          Remember to use aria-controls for accessibilty. In this example that would be the 'snackAriaId'. Snackbar does
          not require any actions from the user to be closed.
        </p>
        <Button
          outline
          aria-controls={snackAriaId}
          onClick={async () => {
            const quotes: { text: string; author: string }[] = await fetch('https://type.fit/api/quotes').then((res) =>
              res.json(),
            );
            const { text, author } = quotes[Math.floor(Math.random() * quotes.length)];
            setSnack({
              snackbarItemId: Math.random().toString(),
              children: (
                <div>
                  <strong>{author}: </strong>"{text}"
                </div>
              ),
            });
          }}>
          Generate random snack
        </Button>
      </div>
      <SnackBar
        id={snackAriaId}
        key={snack.snackbarItemId}
        snackbarItemId={snack.snackbarItemId}
        actionButtons={[
          {
            text: 'Vis',
            ariaLabel: 'Console.log onClick event',
            onClick: () => {
              console.log('Vis'); // eslint-disable-line no-console
            },
          },
        ]}
        onKill={(id: string | undefined) => {
          // eslint-disable-next-line
          console.log(`snack with id ${id || 'unknown'} removed`); // eslint-disable-line no-console
          setSnack({});
        }}>
        {snack.children}
      </SnackBar>
    </div>
  );
};

export default SnackBarExample;
