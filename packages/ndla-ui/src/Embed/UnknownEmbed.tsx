/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useTranslation } from "react-i18next";
import styled from "@emotion/styled";
import { colors } from "@ndla/core";
import { MetaData } from "@ndla/types-embed";

interface Props {
  embed: MetaData<any, any>;
}

const StyledSpan = styled.span`
  color: ${colors.support.red};
`;

const UnknownEmbed = ({ embed }: Props) => {
  const { t } = useTranslation();
  return <StyledSpan>{t("embed.unsupported", { type: embed.resource })}</StyledSpan>;
};

export default UnknownEmbed;
