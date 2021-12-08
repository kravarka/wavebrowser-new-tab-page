import React, { MouseEvent } from 'react'
import Icon from '../Icon/Icon'
import { getClassName, Styleable } from '../utils/utils'
import './style.css'

export interface SideMenuProps extends Styleable {
}
export default function SideMenu(props: SideMenuProps) {

  function handleClick(e: MouseEvent<HTMLDivElement>) {
    const items = document.querySelectorAll('.sideMenu-item');
    items.forEach(item => item.classList.remove('sideMenu-item-selected'));
    e.currentTarget.classList.toggle('sideMenu-item-selected');
  }

  function renderSideMenuItem(name: string, icon: string, selected?: boolean) {
    return (
      <div className={`sideMenu-item ${selected && 'sideMenu-item-selected'}`} onClick={handleClick}>
        <Icon className={name.toLowerCase() + "-icon"} src={icon}/>
        <span className="sideMenu-item-name">{name}</span>
      </div>
    );
  }
  return (
    <div className={getClassName("sideMenu", props)} style={props.style}>
      {renderSideMenuItem('Home', require('../../assets/icons/Home icon.svg').default, true)}
      {renderSideMenuItem('Media', require('../../assets/icons/Media icon.svg').default)}
      {renderSideMenuItem('Links', require('../../assets/icons/Links icon.svg').default)}
    </div>
  )
}
