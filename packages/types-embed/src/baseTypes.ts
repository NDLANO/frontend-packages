/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

interface BaseEmbedData {
  resource: string;
}

interface MetaDataFailure<T extends BaseEmbedData> {
  resource: T["resource"];
  embedData: T;
  status: "error";
  message?: string;
}

interface MetaDataSuccess<T extends BaseEmbedData, Data> {
  resource: T["resource"];
  embedData: T;
  data: Data;
  status: "success";
}

export type MetaData<Embed extends BaseEmbedData, Data> = MetaDataFailure<Embed> | MetaDataSuccess<Embed, Data>;
