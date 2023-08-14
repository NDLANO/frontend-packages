import { CSSProperties, ReactNode } from 'react';
import { uuid } from '@ndla/util';
import styled from '@emotion/styled';
import { spacing, colors, breakpoints, mq } from '@ndla/core';

interface CenterProps {
  children?: ReactNode;
  style?: CSSProperties;
}

export const Center = ({ children, style }: CenterProps) => (
  <div
    style={{
      margin: '0 auto',
      padding: '0 12px',
      maxWidth: '900px',
      ...style,
    }}
  >
    {children}
  </div>
);

interface ChildrenProps {
  children?: ReactNode;
}

export const GapHelper = ({ children }: ChildrenProps) => (
  <div style={{ gap: '12px', display: 'flex', alignItems: 'center' }}>{children}</div>
);

export const InlineContainer = ({ children }: ChildrenProps) => <div className="inline-container">{children}</div>;

export const DottedContainer = ({ children }: ChildrenProps) => <div className="dotted-container">{children}</div>;

export const articleUrl = (id: number | string) => (
  <span>
    Hentet fra <a href={`http://api.test.ndla.no:8082/article/${id}`}>{`http://api.test.ndla.no:8082/article/${id}`}</a>
  </span>
);

interface AnchorNavigationProps {
  links: ReactNode[];
}

export const AnchorNavigation = ({ links }: AnchorNavigationProps) => (
  <ul
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      listStyle: 'none',
      margin: 0,
      padding: 0,
    }}
  >
    {links.map((link) => (
      <li key={uuid()}>{link}</li>
    ))}
  </ul>
);

export const LayoutWithSidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.normal};
  ${mq.range({ from: breakpoints.tablet })} {
    display: grid;
    grid-template-columns: 260px auto;
    grid-template-areas: 'sidebar content';
    gap: ${spacing.normal};
  }
  ${mq.range({ from: breakpoints.desktop })} {
    grid-template-columns: 320px auto;
    gap: ${spacing.medium};
  }
`;

export const LayoutWithSidebarAside = styled.aside`
  grid-area: sidebar;
  border-bottom: 1px solid ${colors.brand.greyLight};
  padding-bottom: ${spacing.normal};
  ${mq.range({ from: breakpoints.tablet })} {
    padding-right: ${spacing.small};
    border-bottom: 0;
    padding-bottom: 0;
  }
  ${mq.range({ from: breakpoints.desktop })} {
    padding-right: ${spacing.medium};
  }
`;

export const LayoutWithSidebarMain = styled.main`
  grid-area: content;
  display: grid;
  align-items: start;
`;
