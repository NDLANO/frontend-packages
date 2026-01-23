/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Text } from "@ndla/primitives";
import { styled } from "@ndla/styled-system/jsx";
import type { FootNote as FootNoteType } from "../types";

const citeDetailString = (description: string | undefined) => (description ? `${description}. ` : "");

type FootNoteProps = {
  footNote: FootNoteType;
};

const StyledCite = styled("cite", {
  base: {
    display: "flex",
    alignItems: "center",
    gap: "xsmall",
  },
});

const FootNote = ({ footNote }: FootNoteProps) => (
  <li>
    <Text id={`note${footNote.ref}`} asChild consumeCss textStyle="body.medium" tabIndex={-1}>
      <StyledCite>
        <a href={`#ref${footNote.ref}`} target="_self">
          {footNote.ref}
        </a>
        {`«${footNote.title}». ${footNote.authors.join(" ")}. ${citeDetailString(footNote.edition)}${citeDetailString(
          footNote.publisher,
        )}${footNote.year}. `}
        {footNote.url ? (
          <a href={footNote.url}>
            {footNote.url}
            {"."}
          </a>
        ) : null}
      </StyledCite>
    </Text>
  </li>
);

type ArticleFootNotesProps = {
  footNotes: Array<FootNoteType>;
};

const FootnoteList = styled("ol", {
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "medium",
    listStyle: "none",
  },
});

export const ArticleFootNotes = ({ footNotes }: ArticleFootNotesProps) => (
  <FootnoteList>
    {footNotes.map((footNote) => (
      <FootNote key={footNote.ref} footNote={footNote} />
    ))}
  </FootnoteList>
);
