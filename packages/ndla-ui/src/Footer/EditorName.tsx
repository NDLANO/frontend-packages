/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

type EditorNameProps = {
  title: string;
  name: string;
};

export const EditorName = ({ title, name }: EditorNameProps) => (
  <span>
    <strong>{title}</strong>
    {` ${name}`}
  </span>
);
