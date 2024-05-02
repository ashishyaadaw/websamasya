import React from "react";

export default function Svg({
  className,
  width,
  height,
  path,
  viewBox,
  color,
}) {
  return (
    <svg
      width={width}
      height={height}
      fill={color}
      className={className}
      viewBox={viewBox}
    >
      <path d={path} />
    </svg>
  );
}
