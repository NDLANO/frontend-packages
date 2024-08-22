/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Meta, StoryFn } from "@storybook/react";
import { CloseLine } from "@ndla/icons/action";
import { CheckLine } from "@ndla/icons/editor";
import {
  FieldErrorMessage,
  FieldInput,
  FieldLabel,
  FieldRoot,
  FieldHelper,
  IconButton,
  InputContainer,
  Spinner,
} from "@ndla/primitives";
import { HStack, styled } from "@ndla/styled-system/jsx";
import { IFolder } from "@ndla/types-backend/myndla-api";
import { flattenFolders } from "./helperFunctions";
import { TreeStructure, TreeStructureProps } from "./TreeStructure";

const Container = styled("div", {
  base: {
    display: "flex",
    maxWidth: "surface.large",
    maxHeight: "surface.small",
  },
});

const MY_FOLDERS_ID = "folders";

const targetResource: TreeStructureProps["targetResource"] = {
  id: "test-resource",
  resourceId: "123",
  resourceType: "concept",
  tags: [],
  path: "",
  created: "",
};

const STRUCTURE_EXAMPLE: IFolder[] = [
  {
    id: "1",
    name: "Mine favoritter",
    status: "private",
    breadcrumbs: [{ id: "1", name: "Mine Favoritter" }],
    resources: [targetResource],
    created: "2023-03-03T08:40:23.444Z",
    updated: "2023-03-03T08:40:23.444Z",
    subfolders: [
      {
        id: "2",
        name: "Eksamen",
        status: "shared",
        breadcrumbs: [
          { id: "1", name: "Mine Favoritter" },
          { id: "2", name: "Eksamen" },
        ],
        created: "2023-03-03T08:40:23.444Z",
        updated: "2023-03-03T08:40:23.444Z",
        resources: [],
        subfolders: [
          {
            id: "3",
            name: "Eksamens oppgaver",
            status: "shared",
            breadcrumbs: [
              { id: "1", name: "Mine Favoritter" },
              { id: "2", name: "Eksamen" },
              { id: "3", name: "Eksamens oppgaver" },
            ],
            resources: [],
            subfolders: [],
            created: "2023-03-03T08:40:23.444Z",
            updated: "2023-03-03T08:40:23.444Z",
          },
          {
            id: "4",
            name: "Eksamen 2022",
            status: "private",
            breadcrumbs: [
              { id: "1", name: "Mine Favoritter" },
              { id: "2", name: "Eksamen" },
              { id: "4", name: "Eksamen 2022" },
            ],
            resources: [],
            subfolders: [],
            created: "2023-03-03T08:40:23.444Z",
            updated: "2023-03-03T08:40:23.444Z",
          },
        ],
      },
      {
        id: "5",
        name: "Oppgaver",
        status: "shared",
        breadcrumbs: [
          { id: "1", name: "Mine Favoritter" },
          { id: "5", name: "Oppgaver" },
        ],
        resources: [],
        subfolders: [],
        created: "2023-03-03T08:40:23.444Z",
        updated: "2023-03-03T08:40:23.444Z",
      },
    ],
  },
];

const FOLDER_TREE_STRUCTURE: IFolder[] = [
  {
    id: MY_FOLDERS_ID,
    name: "Mine mapper",
    status: "private",
    breadcrumbs: [],
    resources: [],
    subfolders: [...STRUCTURE_EXAMPLE],
    created: "2023-03-03T08:40:23.444Z",
    updated: "2023-03-03T08:40:23.444Z",
  },
];

export default {
  title: "Components/TreeStructure",
  tags: ["autodocs"],
  component: TreeStructure,
  parameters: {
    inlineStories: true,
  },
  args: {
    defaultOpenFolders: [MY_FOLDERS_ID],
    targetResource: targetResource,
    label: "Velg mappe",
    maxLevel: 5,
    // eslint-disable-next-line no-console
    onSelectFolder: console.log,
  },
  argTypes: {
    folders: { control: false },
  },
} as Meta<typeof TreeStructure>;

export const Default: StoryFn<typeof TreeStructure> = ({ ...args }) => {
  const [structure, setStructure] = useState<IFolder[]>(FOLDER_TREE_STRUCTURE);

  return (
    <Container>
      <TreeStructure
        {...args}
        folders={structure}
        newFolderInput={({ parentId, onCancel, onCreate }) => (
          <NewFolder
            structure={structure}
            setStructure={setStructure}
            parentId={parentId}
            onCancel={onCancel}
            onCreate={onCreate}
          />
        )}
      />
    </Container>
  );
};

interface NewFolderProps {
  parentId: string;
  structure: IFolder[];
  setStructure: Dispatch<SetStateAction<IFolder[]>>;
  onCancel?: () => void;
  onCreate?: (folder: IFolder) => void;
}

const generateNewFolder = (name: string, id: string, breadcrumbs: { id: string; name: string }[]): IFolder => ({
  id,
  name,
  status: "private",
  subfolders: [],
  breadcrumbs: breadcrumbs.concat({ name, id }),
  resources: [],
  created: "2023-03-03T08:40:23.444Z",
  updated: "2023-03-03T08:40:23.444Z",
});

const NewFolder = ({ parentId, onCancel, structure, setStructure, onCreate }: NewFolderProps) => {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { t } = useTranslation();

  const inputRef = useRef<HTMLInputElement | null>(null);

  const onSave = async () => {
    if (error) {
      return;
    }
    if (name === "") {
      return;
    }
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    setLoading(false);
    const flattenedStructure = flattenFolders(structure);
    const targetFolder = flattenedStructure.find((folder) => folder.id === parentId);
    const newFolderId = (flattenedStructure.length + 1).toString();
    const newFolder = generateNewFolder(name, newFolderId, targetFolder?.breadcrumbs ?? []);
    if (targetFolder) {
      setStructure((oldStructure) => {
        targetFolder.subfolders.unshift(newFolder);
        return oldStructure;
      });
    } else {
      setStructure((old) => [newFolder].concat(old));
    }
    onCreate?.(newFolder);
  };

  useEffect(() => {
    if (name.length === 0) {
      setError("Navn er påkrevd");
    } else {
      setError("");
    }
  }, [name]);

  return (
    <FieldRoot required invalid={!!error}>
      <FieldLabel srOnly>Mine mapper</FieldLabel>
      <FieldErrorMessage>{error}</FieldErrorMessage>
      <InputContainer>
        <FieldInput
          autoComplete="off"
          disabled={loading}
          ref={inputRef}
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus
          name="name"
          placeholder="Skriv inn mappenavn"
          onChange={(e) => {
            if (!loading) {
              setName(e.currentTarget.value);
            }
          }}
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              e.preventDefault();
              onCancel?.();
            } else if (e.key === "Enter") {
              e.preventDefault();
              onSave();
            }
          }}
        />
        <HStack gap="3xsmall">
          {!loading ? (
            <>
              {!error && (
                <IconButton variant="tertiary" aria-label={t("save")} title={t("save")} onClick={onSave}>
                  <CheckLine />
                </IconButton>
              )}
              <IconButton aria-label={t("close")} title={t("close")} variant="tertiary" onClick={onCancel}>
                <CloseLine />
              </IconButton>
            </>
          ) : (
            <FieldHelper>
              <Spinner size="small" aria-label={t("loading")} />
            </FieldHelper>
          )}
        </HStack>
      </InputContainer>
    </FieldRoot>
  );
};
