import React from 'react';
import PropTypes from 'prop-types';

const IconBase = ({
  children,
  color,
  size,
  style,
  title,
  description,
  width,
  height,
  className,
  ...props
}) => {
  const computedSize = size || '1em';
  const classes = className ? `c-icon ${className}` : 'c-icon';
  return (
    <svg
      fill="currentColor"
      preserveAspectRatio="xMidYMid meet"
      height={height || computedSize}
      width={width || computedSize}
      className={classes}
      {...props}
      style={{
        verticalAlign: 'middle',
        color,
        ...style,
      }}>
      {title && <title>{title}</title>}
      {description && <desc>{description}</desc>}
      {children}
    </svg>
  );
};

IconBase.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  style: PropTypes.object, // eslint-disable-line
};

export default IconBase;
