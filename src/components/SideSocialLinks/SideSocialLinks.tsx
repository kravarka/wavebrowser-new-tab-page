import React from 'react'
import Icon from '../Icon/Icon'
import { getClassName, Styleable } from '../utils/utils'
import './style.css'

export interface SideSocialLinksProps extends Styleable {
}
export default function SideSocialLinks(props: SideSocialLinksProps) {
  function renderSideMenuItem(icon: string, href: string) {
    return (
        <Icon src={icon} href={href}/>
    );
  }
  return (
    <div className={getClassName("sideSocialLinks", props)} style={props.style}>
      {renderSideMenuItem(require('../../assets/icons/facebook.svg').default, 'https://facebook.com')}
      {renderSideMenuItem(require('../../assets/icons/twitter.svg').default, 'https://twitter.com')}
      {renderSideMenuItem(require('../../assets/icons/youtube.svg').default, 'https://youtube.com')}
      {renderSideMenuItem(require('../../assets/icons/instagram.svg').default, 'https://instagram.com')}
      {renderSideMenuItem(require('../../assets/icons/linkedin.svg').default, 'https://linkedin.com')}
    </div>
  )
}
