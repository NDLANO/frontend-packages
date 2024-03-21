/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { IconButtonV2, ButtonV2 } from "@ndla/button";
import { DropdownMenu, DropdownTrigger, DropdownContent, DropdownItem } from "@ndla/dropdown-menu";
import { Pencil } from "@ndla/icons/action";
import { HorizontalMenu } from "@ndla/icons/contentType";
import { DeleteForever } from "@ndla/icons/editor";

export const resourceTypesArr = [
  { id: "urn:resourcetype:learningPath", name: "Læringssti" },
  { id: "urn:resourcetype:subjectMaterial", name: "Fagstoff" },
  {
    id: "urn:resourcetype:tasksAndActivities",
    name: "Oppgaver og aktiviteter",
  },
  { id: "urn:resourcetype:reviewResource", name: "Vurderingsressurs" },
  { id: "urn:resourcetype:externalResource", name: "Ekstern læringsressurs" },
  { id: "urn:resourcetype:SourceMaterial", name: "Kildemateriale" },
  { id: "folder", name: "folder" },
];

export const StoryResourceMenu = () => (
  <DropdownMenu>
    <DropdownTrigger>
      <IconButtonV2 aria-label="Show more" title="Show more" variant="ghost" colorTheme="light">
        <HorizontalMenu />
      </IconButtonV2>
    </DropdownTrigger>
    <DropdownContent>
      <DropdownItem>
        <ButtonV2 variant="ghost" colorTheme="light" shape="sharp" size="small" fontWeight="normal">
          <Pencil />
          Rediger
        </ButtonV2>
      </DropdownItem>
      <DropdownItem>
        <ButtonV2 variant="ghost" colorTheme="danger" shape="sharp" size="small" fontWeight="normal">
          <DeleteForever />
          Slett
        </ButtonV2>
      </DropdownItem>
    </DropdownContent>
  </DropdownMenu>
);
