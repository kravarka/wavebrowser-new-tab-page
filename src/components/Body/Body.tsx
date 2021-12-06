import React from 'react'
import ScrollFor from '../ScrollFor/ScrollFor';
import SideMenu from '../SideMenu/SideMenu';
import SideSocialLinks from '../SideSocialLinks/SideSocialLinks';
import './style.css'

export default function Body() {
  return (
    <div className="mainBody">
      <div className="mainBody-container">
        <SideMenu style={{ position: 'fixed', top: '50%', left: 64 }} />
        <SideSocialLinks style={{ position: 'fixed', top: '50%' , right: 64}} />
      </div>
    </div>
  )
}
