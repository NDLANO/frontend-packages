import styled from '@emotion/styled';
import { colors, fonts, spacing } from '@ndla/core';
import File from './File';

export interface FileType {
  title: string;
  formats: FileFormat[];
  fileExists?: boolean;
}

export interface FileFormat {
  url: string;
  fileType: string;
  tooltip: string;
}

interface Props {
  id: string;
  heading: string;
  files: FileType[];
}

const FileListSection = styled.section`
  margin: ${spacing.large} 0;
  padding: ${spacing.small} 0 ${spacing.normal} ${spacing.normal};
  border-left: 2px solid ${colors.brand.greyLightest};
  font-family: ${fonts.sans};

  .c-icon {
    margin-top: 3px;
    flex-shrink: 0;
    margin-right: ${spacing.small};
    height: 18px;
    width: 18px;
  }
`;

const FileListHeading = styled.h1`
  ${fonts.sizes('16px', '18px')};
  letter-spacing: 0.05em;
  margin: 0 0 ${spacing.xsmall} 0;
  padding-bottom: ${spacing.xsmall};
  border-bottom: 2px solid ${colors.brand.greyLight};
  font-weight: ${fonts.weight.bold};
  text-transform: uppercase;
`;

const FilesList = styled.ul`
  margin: 0;
  padding: 0;
`;

const FileList = ({ files, heading, id }: Props) => (
  <FileListSection>
    <FileListHeading>{heading}</FileListHeading>
    <FilesList>
      {files.map((file) => (
        <File key={`file-${id}-${file.title}`} file={file} id={id} />
      ))}
    </FilesList>
  </FileListSection>
);

export default FileList;
