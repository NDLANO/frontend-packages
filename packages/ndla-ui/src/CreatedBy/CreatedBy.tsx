/**
 * Copyright (c) 2020-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from "@emotion/styled";
import { colors, fonts } from "@ndla/core";
import { SafeLink } from "@ndla/safelink";
import Logo from "../Logo";

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Text = styled.div`
  color: ${colors.text.light};
  margin-right: 38px;
  font-family: ${fonts.sans};
  ${fonts.sizes("20px", "20px")};
`;

const StyledSafeLink = styled(SafeLink)`
  color: ${colors.text.light};
`;

type Props = {
  name: string;
  description: string;
  url?: string;
  target?: string;
};

const CreatedBy = ({ name, description, url, target = "_blank" }: Props) => (
  <Container>
    <Wrapper>
      <Text>
        {url ? (
          <StyledSafeLink to={url} target={target}>
            {name}
          </StyledSafeLink>
        ) : (
          name
        )}
        &nbsp;{description}&nbsp;
        <StyledSafeLink to={"https://ndla.no"} target={target}>
          NDLA
        </StyledSafeLink>
      </Text>
      <Logo label={"NDLA"} to={"https://ndla.no"} />
    </Wrapper>
  </Container>
);

export default CreatedBy;
