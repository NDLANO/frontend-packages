/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useTranslation } from "react-i18next";
import { getLicenseByAbbreviation, getLicenseCredits } from "@ndla/licenses";
import { EmbedBylineErrorProps, EmbedBylineTypeProps } from "./EmbedByline";
import LicenseLink from "./LicenseLink";

type LicenseAuthorsProps = {
  type: EmbedBylineErrorProps["type"];
  copyright: EmbedBylineTypeProps["copyright"];
};

const LicenseAuthors = ({ type, copyright }: LicenseAuthorsProps) => {
  const { t, i18n } = useTranslation();

  const license = copyright ? getLicenseByAbbreviation(copyright.license?.license ?? "", i18n.language) : undefined;
  const authors = getLicenseCredits(copyright);
  const captionAuthors = Object.values(authors).find((i) => i.length > 0) ?? [];

  return (
    <>
      {` ${t(`embed.type.${type}`)}${captionAuthors.length ? ": " : ""}`}
      {captionAuthors.map((author) => author.name).join(", ")}
      {license ? (
        <>
          {" / "}
          <LicenseLink license={license} />
        </>
      ) : null}
    </>
  );
};

export default LicenseAuthors;
