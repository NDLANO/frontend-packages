/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ButtonV2 } from '@ndla/button';

interface Props {
  onClick?: () => void;
  buttonText?: string;
  text: string;
}

export const NoContentBox = ({ buttonText, text, onClick }: Props) => (
  <div>
    <span>
      <div>
        <p>{text}</p>
        {onClick && (
          <ButtonV2 variant="outline" onClick={onClick}>
            {buttonText}
          </ButtonV2>
        )}
      </div>
    </span>
  </div>
);

export default NoContentBox;
