/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useTranslation } from 'react-i18next';
import File from './File';

interface Props {
  id: string;
  title: string;
  url: string;
  fileExists: boolean;
  fileType: string;
}

const FileV2 = ({ title, url, id, fileExists, fileType }: Props) => {
  const { t } = useTranslation();
  const tooltip = `${t('download')} ${url.split('/').pop()}`;
  return (
    <File
      id={id}
      file={{
        title,
        fileExists,
        formats: [{ url, fileType, tooltip }],
      }}
    />
  );
};

export default FileV2;
