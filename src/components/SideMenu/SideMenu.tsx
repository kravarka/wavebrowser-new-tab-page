import React from 'react'
import Icon from '../Icon/Icon'
import { getClassName, Styleable } from '../utils/utils'
import './style.css'

export interface SideMenuProps extends Styleable {
}
export default function SideMenu(props: SideMenuProps) {
  function renderSideMenuItem(name: string, icon: string) {
    return (
      <div className="sideMenu-item">
        <Icon src={icon}/>
        <span className="sideMenu-item-name">{name}</span>
      </div>
    );
  }
  return (
    <div className={getClassName("sideMenu", props)} style={props.style}>
      {renderSideMenuItem('Home', require('../../assets/icons/Home icon.svg').default)}
      {renderSideMenuItem('Media', require('../../assets/icons/Media icon.svg').default)}
      {renderSideMenuItem('Links', require('../../assets/icons/Links icon.svg').default)}
    </div>
  )
}
