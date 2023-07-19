import React, { ReactNode, SVGAttributes, useMemo } from 'react';

export interface Props extends SVGAttributes<SVGSVGElement> {
  title?: string;
  description?: string;
  children?: ReactNode;
  size?: string;
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
  const computedSize = useMemo(() => size || '1em', [size]);
  const classes = useMemo(() => (className ? `c-icon ${className}` : 'c-icon'), [className]);
  const styleObj = useMemo(() => ({ verticalAlign: 'middle', color, ...style }), [color, style]);

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
      style={styleObj}
    >
      {title && <title>{title}</title>}
      {description && <desc>{description}</desc>}
      {children}
    </svg>
  );
};

export default IconBase;
