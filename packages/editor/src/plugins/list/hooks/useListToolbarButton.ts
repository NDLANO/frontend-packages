/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useSlate } from "slate-react";
import type { ListType } from "../listTypes";
import { isListElement } from "../queries/listElementQueries";
import { toggleList } from "../transforms/toggleList";
import { PARAGRAPH_ELEMENT_TYPE } from "../../paragraph/paragraphTypes";
import { HEADING_ELEMENT_TYPE } from "../../heading/headingTypes";

interface ListToolbarButtonStateOptions {
  type: ListType;
}

interface ListToolbarButtonState {
  pressed: boolean;
  ["data-state"]: "on" | "off";
  type: ListType;
}

export const useListToolbarButtonState = ({ type }: ListToolbarButtonStateOptions): ListToolbarButtonState => {
  const editor = useSlate();
  const [match] = editor.nodes({
    match: (n) => isListElement(n) && n.listType === type,
  });
  return { pressed: !!match, "data-state": match ? "on" : "off", type };
};

export const useListToolbarButton = (state: ReturnType<typeof useListToolbarButtonState>) => {
  const editor = useSlate();

  return {
    props: {
      "data-state": state["data-state"],
      onClick: () => {
        // TODO: We don't want options here
        toggleList(editor, state.type, {
          allowedListItemFirstChildTypes: [PARAGRAPH_ELEMENT_TYPE, HEADING_ELEMENT_TYPE] as const,
        });
      },
      onMouseDown: (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
      },
    },
  };
};
