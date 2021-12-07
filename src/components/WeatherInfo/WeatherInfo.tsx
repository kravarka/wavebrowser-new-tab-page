import React from 'react'
import Icon from '../Icon/Icon'
import SiteInfoRow from '../SiteInfoRow/SiteInfoRow'
import { getClassName, Styleable } from '../utils/utils'
import './style.css'

export interface WeatherInfoProps extends Styleable{
}
export default function WeatherInfo(props: WeatherInfoProps) {
  function getCurrentTime() {
    const date = new Date();
    return date.toTimeString().substr(0, 5);
  }
  return (
    <div className={getClassName('weatherInfo', props)} style={props.style}>
      <Icon className="weatherInfo-icon" src={require('../../assets/icons/Sun icon.svg').default}/>
      <div className="weatherInfo-rightside-container">
        <SiteInfoRow text="23 ° C" value=" Sofia" valueSize={16} textSize={16}/>
        <div className="weatherInfo-separator"/>
        <div className="weatherInfo-current-time">{getCurrentTime()}</div>
      </div>
    </div>
  )
}
