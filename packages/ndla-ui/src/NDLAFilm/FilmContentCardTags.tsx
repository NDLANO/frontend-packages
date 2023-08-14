import { spacing, spacingUnit, colors, fonts, misc } from '@ndla/core';
import styled from '@emotion/styled';
import { MovieResourceType } from './types';

const StyledWrapperDiv = styled.div`
  transition: opacity 200ms ease;
  padding: ${spacing.xsmall} ${spacing.xsmall};
  opacity: 0;
  display: relative;
  z-index: 1;
`;

const StyledMovieTags = styled.span`
  ${fonts.sizes('14px', '16px')};
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
    <StyledWrapperDiv id={id}>
      {Object.keys(resources).map((resourceName) => (
        <StyledMovieTags key={resourceName}>{resourceName}</StyledMovieTags>
      ))}
    </StyledWrapperDiv>
  );
};

export default FilmContentCardTags;
