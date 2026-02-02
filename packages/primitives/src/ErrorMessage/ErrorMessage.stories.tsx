/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { Meta, StoryObj } from "@storybook/react";
import { LoginBoxLine, PresentationLine } from "@ndla/icons";
import { SafeLink } from "@ndla/safelink";
//@ts-expect-error - It exists.
import Oops from "../../../../images/oops.gif";
import { Button } from "../Button";
import {
  ErrorMessageActions,
  ErrorMessageContent,
  ErrorMessageDescription,
  ErrorMessageRoot,
  ErrorMessageTitle,
} from "./ErrorMessage";

export default {
  title: "Primitives/ErrorMessage",
  component: ErrorMessageRoot,
  tags: ["autodocs"],
  parameters: {
    inlineStories: true,
  },
  render: (args) => (
    <ErrorMessageRoot {...args}>
      <img src={Oops} alt="Systemfeil" />
      <ErrorMessageContent>
        <ErrorMessageTitle>Oisann, her gikk noe galt</ErrorMessageTitle>
        <ErrorMessageDescription>En kort beskrivelse av feilen som oppsto.</ErrorMessageDescription>
      </ErrorMessageContent>
      <ErrorMessageActions>
        <Button variant="link" onClick={() => window.history.back()}>
          Gå tilbake
        </Button>
        <SafeLink to="/">Gå til forsiden</SafeLink>
      </ErrorMessageActions>
    </ErrorMessageRoot>
  ),
} satisfies Meta<typeof ErrorMessageRoot>;

export const Default: StoryObj<typeof ErrorMessageRoot> = {};

export const AccessDenied: StoryObj<typeof ErrorMessageRoot> = {
  render: (args) => (
    <ErrorMessageRoot {...args}>
      <PresentationLine css={{ width: "surface.xsmall", height: "surface.xsmall" }} />
      <ErrorMessageContent>
        <ErrorMessageTitle>Vi beklager, men denne ressursen er bare for lærere innlogget med Feide.</ErrorMessageTitle>
      </ErrorMessageContent>
      <ErrorMessageActions>
        <Button>
          Logg inn med Feide
          <LoginBoxLine />
        </Button>
        <Button variant="link" onClick={() => window.history.back()}>
          Gå tilbake
        </Button>
        <SafeLink to="/">Gå til forsiden</SafeLink>
      </ErrorMessageActions>
    </ErrorMessageRoot>
  ),
};
