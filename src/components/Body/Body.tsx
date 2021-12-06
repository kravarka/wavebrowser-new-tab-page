import React from 'react'
import ScrollFor from '../ScrollFor/ScrollFor';
import SideMenu from '../SideMenu/SideMenu';
import SideSocialLinks from '../SideSocialLinks/SideSocialLinks';
import './style.css'

export default function Body() {
  return (
    <div className="mainBody">
      <div className="mainBody-container">
        <SideMenu />
        <ScrollFor className="mainBody-arrow-down-container" title="Scroll for Lolita News" href="#"/>
        <SideSocialLinks />

      </div>
    </div>
  )
}
