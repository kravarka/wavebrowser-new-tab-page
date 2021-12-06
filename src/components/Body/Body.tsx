import React from 'react'
import Icon from '../Icon/Icon'
import './style.css'

export default function Body() {
  function renderArrowDownContainer() {
    return (
      <div className="mainBody-arrow-down-container">
        <div>Scroll for Lolita News</div>
        <Icon src={require('../../assets/icons/Arrow down.svg').default} className="mainBody-arrow-down" href="#"/>
      </div>
    );
  }
  return (
    <div className="mainBody">
      {renderArrowDownContainer()}
    </div>
  )
}
