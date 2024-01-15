/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Figure } from "../Figure";

interface Props {
  title: string;
  url: string;
}

const PdfFile = ({ title, url }: Props) => {
  return (
    <Figure>
      <h2>{title}</h2>
      <iframe title={title} height="1050" src={url} />
    </Figure>
  );
};

export default PdfFile;
