import React, { MouseEvent } from 'react'
import { getClassName, Styleable } from '../utils/utils'
import './style.css'

export interface IconProps extends Styleable{
  src: string;
  href?: string;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
}
export default function Icon(props: IconProps) {
  function renderIcon() {
    return <img className={getClassName('icon', props)} alt="icon" src={props.src} style={props.style}/>;
  }
  function renderLinkWithIcon() {
    return (
      <a href={props.href} onClick={props.onClick}>
        {renderIcon()}
      </a>
    );
  }
  return props.href ? renderLinkWithIcon() : renderIcon();
}
