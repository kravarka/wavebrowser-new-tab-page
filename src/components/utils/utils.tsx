import { CSSProperties } from "react";

export interface Styleable {
  className?: string;
  style?: CSSProperties;
}

export function getClassName(className: string, props: Styleable) {
  return `${className} ${props.className || ''}`;
}

export function map(x: number, in_min: number, in_max: number, out_min: number, out_max: number) {
  let val = (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  if (val <= out_min)
    return out_min;
  if (val >= out_max)
    return out_max;
  return val;
}

export function getRandomArbitrary(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export async function getFetchData(url: string) {
  try {
    const options = {
      method: 'GET'
    }
    const response = await fetch(url, options);
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}