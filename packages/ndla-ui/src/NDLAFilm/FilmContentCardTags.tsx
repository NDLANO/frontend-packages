/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from "@emotion/styled";
import { spacing, spacingUnit, colors, fonts, misc, stackOrder } from "@ndla/core";
import { MovieResourceType } from "./types";

const StyledWrapperDiv = styled.div`
  transition: opacity 200ms ease;
  padding: ${spacing.xsmall} ${spacing.xsmall};
  opacity: 0;
  position: absolute;
  bottom: 0px;
  left: 0px;
  z-index: ${stackOrder.offsetSingle};
`;

const StyledMovieTags = styled.span`
  ${fonts.sizes("14px", "16px")};
  font-weight: ${fonts.weight.semibold};
  background: ${colors.brand.greyLight};
  padding: calc(${spacing.xsmall} / 2) ${spacing.xsmall};
  border-radius: ${misc.borderRadius};
  color: ${colors.text.primary};
  margin-right: ${spacingUnit / 4}px;
  margin-bottom: ${spacingUnit / 8}px;
`;

interface Props {
  id: string;
  movieResourceTypes: MovieResourceType[];
  resourceTypes: MovieResourceType[];
}
const FilmContentCardTags = ({ movieResourceTypes, resourceTypes, id }: Props) => {
  const resources: Record<string, boolean> = {};
  movieResourceTypes.forEach((movieResourceType) => {
    const resource = resourceTypes.find((resourceType) => resourceType.id === movieResourceType.id);
    if (resource) {
      resources[resource.name] = true;
    }
  });
  return (
    // data-content-cards is used to set the opacity of tags on hover/focus
    <StyledWrapperDiv id={id} data-content-cards="">
      {Object.keys(resources).map((resourceName) => (
        <StyledMovieTags key={resourceName}>{resourceName}</StyledMovieTags>
      ))}
    </StyledWrapperDiv>
  );
};

export default FilmContentCardTags;
