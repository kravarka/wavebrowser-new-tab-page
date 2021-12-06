import React from 'react'
import Icon from '../Icon/Icon'
import ScrollFor from '../ScrollFor/ScrollFor';
import SideMenu from '../SideMenu/SideMenu';
import './style.css'

export default function Body() {
  return (
    <div className="mainBody">
      <div className="mainBody-container">
        <SideMenu />
        <ScrollFor className="mainBody-arrow-down-container" title="Scroll for Lolita News" href="#"/>
        <div>asd</div>

      </div>
    </div>
  )
}
