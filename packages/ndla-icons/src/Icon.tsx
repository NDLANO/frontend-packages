import React, { HTMLAttributes, ReactNode } from 'react';

export interface Props extends HTMLAttributes<SVGSVGElement> {
  id?: string;
  color?: string;
  title?: string;
  description?: string;
  className?: string;
  children?: ReactNode;
  size?: string;
  width?: string;
  height?: string;
  viewBox?: string;
  role?: string;
  onClick?: () => void;
  style?: {}; // eslint-disable-line
  ariaHidden?: boolean;
}
const IconBase = ({
  children,
  color,
  size,
  style,
  role,
  title,
  description,
  width,
  height,
  ariaHidden = true,
  className,
  ...props
}: Props) => {
  const computedSize = size || '1em';
  const classes = className ? `c-icon ${className}` : 'c-icon';

  return (
    <svg
      fill="currentColor"
      aria-hidden={ariaHidden}
      preserveAspectRatio="xMidYMid meet"
      height={height || computedSize}
      width={width || computedSize}
      className={classes}
      role={role}
      {...props}
      style={{
        verticalAlign: 'middle',
        color,
        ...style,
      }}
    >
      {title && <title>{title}</title>}
      {description && <desc>{description}</desc>}
      {children}
    </svg>
  );
};

export default IconBase;
