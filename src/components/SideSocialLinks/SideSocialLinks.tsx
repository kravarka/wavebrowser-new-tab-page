import React, { MouseEvent, MouseEventHandler } from 'react'
import Icon from '../Icon/Icon'
import { getClassName, Styleable } from '../utils/utils'
import './style.css'

export interface SideSocialLinksProps extends Styleable {
}
export default function SideSocialLinks(props: SideSocialLinksProps) {
  function renderSideMenuItem(icon: string) {
    return (
        <Icon src={icon}/>
    );
  }
  return (
    <div className={getClassName("sideSocialLinks", props)} style={props.style}>
      {renderSideMenuItem(require('../../assets/icons/facebook.png').default)}
      {renderSideMenuItem(require('../../assets/icons/youtube logo.svg').default)}
      {renderSideMenuItem(require('../../assets/icons/instagram logo.svg').default)}
      {renderSideMenuItem(require('../../assets/icons/linkedin logo.png').default)}
    </div>
  )
}
