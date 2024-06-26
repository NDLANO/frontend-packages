/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { HTMLAttributes, ReactNode } from "react";
import styled from "@emotion/styled";
import { breakpoints, colors, mq, spacing, spacingUnit } from "@ndla/core";
import {
  ASSESSMENT_RESOURCES,
  SOURCE_MATERIAL,
  SUBJECT,
  SUBJECT_MATERIAL,
  TASKS_AND_ACTIVITIES,
  CONCEPT,
} from "../model/ContentType";

const StyledDiv = styled.div`
  background-repeat: repeat;
  background-size: ${spacing.normal};
  background-color: ${colors.brand.greyLightest};

  ${mq.range({ from: breakpoints.tablet })} {
    min-height: 246px;
    padding-bottom: ${spacingUnit * 6.5}px;
  }

  &[data-contenttype="subject-material"] {
    background-color: ${colors.subjectMaterial.light};
  }

  &[data-contenttype="tasks-and-activities"] {
    background-color: ${colors.tasksAndActivities.background};
  }

  &[data-contenttype="assessment-resources"] {
    background-color: ${colors.assessmentResource.background};
  }

  &[data-contenttype="subject"] {
    background-color: ${colors.subject.light};
  }

  &[data-contenttype="source-material"] {
    background-color: ${colors.sourceMaterial.light};
  }

  &[data-contenttype="beta"] {
    background-color: ${colors.brand.primary};
  }

  &[data-contenttype="frontpage-article"] {
    min-height: unset;
    padding-bottom: unset;
    background-color: ${colors.background.lightBlue};
  }

  &[data-contenttype="concept"] {
    background-color: ${colors.concept.light};
  }

  &[data-contenttype="ndla-film has-image"],
  &[data-contenttype="ndla-film"] {
    background: ${colors.ndlaFilm.filmColor};

    ${mq.range({ from: breakpoints.tablet })} {
      height: 2000px;
      margin-bottom: -1910px;
    }

    &[data-contenttype="ndla-film has-image"] {
      ${mq.range({ from: breakpoints.tablet })} {
        margin-bottom: -1800px;
        @media (min-height: 720px) {
          margin-bottom: -1750px;
        }
        @media (min-height: 1020px) {
          margin-bottom: -1700px;
        }
      }
    }

    ${mq.range({ until: breakpoints.tablet })} {
      + div article[data-ndla-article] {
        background: ${colors.white};
        margin: 0 -${spacing.normal};
        padding: ${spacing.large} ${spacing.normal} ${spacing.normal} ${spacing.normal};
      }
    }
  }
`;

export type HeroContentType =
  | "subject-material"
  | "tasks-and-activities"
  | "assessment-resources"
  | "subject"
  | "source-material"
  | "learning-path"
  | "topic"
  | "beta"
  | "ndla-film"
  | "ndla-film has-image"
  | "frontpage-article"
  | "concept";

interface HeroProps extends HTMLAttributes<HTMLDivElement> {
  contentType?: HeroContentType;
}

export const Hero = ({ children, contentType }: HeroProps) => (
  <StyledDiv data-contenttype={contentType}>{children || null}</StyledDiv>
);
interface Props {
  children?: ReactNode;
  hasImage?: boolean;
}
export const SubjectMaterialHero = (props: Props) => <Hero contentType={SUBJECT_MATERIAL} {...props} />;
export const TasksAndActivitiesHero = (props: Props) => <Hero contentType={TASKS_AND_ACTIVITIES} {...props} />;
export const AssessmentResourcesHero = (props: Props) => <Hero contentType={ASSESSMENT_RESOURCES} {...props} />;
export const SubjectHero = (props: Props) => <Hero contentType={SUBJECT} {...props} />;
export const SourceMaterialHero = (props: Props) => <Hero contentType={SOURCE_MATERIAL} {...props} />;
export const ConceptHero = (props: Props) => <Hero contentType={CONCEPT} {...props} />;
export const NdlaFilmHero = ({ hasImage, ...rest }: Props) => (
  <Hero {...rest} contentType={hasImage ? "ndla-film has-image" : "ndla-film"} />
);
