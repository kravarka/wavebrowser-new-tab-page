import { CSSProperties } from "react";

export interface Styleable {
  className?: string;
  style?: CSSProperties;
}

export function getClassName(className: string, props: Styleable) {
  return `${className} ${props.className || ''}`;
}