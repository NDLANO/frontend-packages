/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';

type EditorNameProps = {
  title: string;
  name: string;
};

export const EditorName: React.FunctionComponent<EditorNameProps> = ({
  title,
  name,
}) => (
  <span>
    <strong>{title}</strong> {name}
  </span>
);
