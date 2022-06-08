export interface FolderStructureProps {
  id: string;
  name: string;
  isOpen?: boolean;
  data?: FolderStructureProps[];
  isFavorite?: boolean;
  status?: string;
  openAsDefault?: boolean;
}

export interface NewFolderProps {
  parentId?: string;
  idPaths: number[];
}

interface CommonFolderProps {
  data: FolderStructureProps[];
  editable?: boolean;
  loading?: boolean;
  openOnFolderClick?: boolean;
}

export interface FoldersProps extends CommonFolderProps {
  label: string;
  onNewFolder: (props: { value: string; parentId?: string; idPaths: number[] }) => Promise<string>;
}

export type onCreateNewFolderProp = ({
  idPaths,
  parentId,
}: {
  idPaths: number[];
  parentId: string | undefined;
}) => void;
type onSaveNewFolderProp = ({ value, cancel }: { value: string; cancel: boolean }) => void;

export interface FolderItemsProps extends CommonFolderProps {
  onToggleOpen: (id: string) => void;
  onSaveNewFolder: onSaveNewFolderProp;
  onCreateNewFolder: onCreateNewFolderProp;
  newFolder: NewFolderProps | undefined;
  openFolders: Set<string>;
  markedFolderId?: string;
  onMarkFolder: (id: string) => void;
  idPaths: number[];
  keyNavigationId: string | undefined;
  setKeyNavigationId: (id: string | undefined) => void;
  firstLevel: boolean;
}

export interface NewFolderOptionProp {
  editing: boolean;
  loading?: boolean;
  parentId?: string;
  idPaths: number[];
  onSaveNewFolder: onSaveNewFolderProp;
  onCreateNewFolder: onCreateNewFolderProp;
  withPadding?: boolean;
  tabIndex?: 0 | -1;
}
