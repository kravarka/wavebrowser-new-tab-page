import React, { MouseEvent } from 'react'
import { getClassName, Styleable } from '../utils/utils'
import './style.css'

export interface IconProps extends Styleable{
  src: string;
  srcSet?: string;
  href?: string;
  onClick?: (e: MouseEvent<HTMLImageElement>) => void;
}
export default function Icon(props: IconProps) {
  function renderIcon() {
    return <img onClick={props.onClick} className={getClassName('icon', props)} alt="icon" src={props.src} srcSet={props.srcSet} 
    style={{...props.style, cursor: (props.onClick || props.href ? 'pointer' : 'initial')}}/>;
  }
  function renderLinkWithIcon() {
    return (
      <a href={props.href}>
        {renderIcon()}
      </a>
    );
  }
  return props.href ? renderLinkWithIcon() : renderIcon();
}
