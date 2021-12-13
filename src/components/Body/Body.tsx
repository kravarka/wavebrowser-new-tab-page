import React from 'react'
import MostVisited from '../MostVisited/MostVisited';
import SideMenu from '../SideMenu/SideMenu';
import SideSocialLinks from '../SideSocialLinks/SideSocialLinks';
import './style.css'

export default function Body() {
  return (
    <div className="mainBody">
      <div className="mainBody-container" id="main">
        <SideMenu className="mainBody-sideMenu"/>
        <SideSocialLinks className="mainBody-socialLinks" />
        <MostVisited />
      </div>
    </div>
  )
}
