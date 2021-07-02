// Add global types for @ndla/core here

export type Breakpoint = 'mobile' | 'mobileWide' | 'tablet' | 'tabletWide' | 'desktop' | 'wide' | 'ultraWide';

export type Breakpoints = { [key in Breakpoint]: string };
