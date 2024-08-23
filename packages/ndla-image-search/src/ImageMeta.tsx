/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import prettyBytes from "pretty-bytes";
import { Text } from "@ndla/primitives";
import { IImageDimensions } from "@ndla/types-backend/image-api";

interface Props {
  contentType: string;
  fileSize: number;
  imageDimensions?: IImageDimensions;
}

const ImageMeta = ({ contentType, fileSize, imageDimensions }: Props) => {
  const dimensions = imageDimensions ? ` - ${imageDimensions.width}x${imageDimensions.height} px` : "";
  return <Text>{`${contentType} - ${prettyBytes(fileSize)}${dimensions}`}</Text>;
};

export default ImageMeta;
