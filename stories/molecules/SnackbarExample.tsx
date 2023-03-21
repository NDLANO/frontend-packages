/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { ButtonV2 } from '@ndla/button';
import { SnackbarProvider, useSnack } from '@ndla/ui';
import { uuid } from '@ndla/util';

const NewSnackbarExample = () => {
  return (
    <SnackbarProvider>
      <ExampleContent />
    </SnackbarProvider>
  );
};

const ExampleContent = () => {
  const { addSnack } = useSnack();

  const onClick = async () => {
    const quotes: { text: string; author: string }[] = await fetch('https://type.fit/api/quotes').then((res) =>
      res.json(),
    );
    const { text, author } = quotes[Math.floor(Math.random() * quotes.length)];

    addSnack({
      content: (
        <span>
          <strong>{author}: </strong> {text}
        </span>
      ),
      id: uuid(),
    });
  };

  return (
    <div>
      <ButtonV2 variant="outline" onClick={onClick}>
        Generate random snack
      </ButtonV2>
    </div>
  );
};

export default NewSnackbarExample;
