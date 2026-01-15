/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useMemo } from "react";
import { Text } from "@ndla/primitives";
import type { ImageDimensionsDTO } from "@ndla/types-backend/image-api";
import { humanFileSize } from "@ndla/util";

interface Props {
  contentType: string;
  fileSize: number;
  imageDimensions?: ImageDimensionsDTO;
  locale: string;
}

export const ImageMeta = ({ contentType, fileSize, imageDimensions, locale }: Props) => {
  const prettySize = useMemo(() => {
    return humanFileSize(fileSize, locale);
  }, [fileSize, locale]);

  const dimensions = imageDimensions ? ` - ${imageDimensions.width}x${imageDimensions.height} px` : "";
  return <Text>{`${contentType} - ${prettySize}${dimensions}`}</Text>;
};
