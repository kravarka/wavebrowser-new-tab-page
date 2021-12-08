import React, { useEffect, useState } from 'react'
import Icon from '../Icon/Icon'
import SiteInfoRow from '../SiteInfoRow/SiteInfoRow'
import { WEATHER_INFO_API } from '../utils/constants'
import { getClassName, getFetchData, Styleable } from '../utils/utils'
import './style.css'

const defaultWeatherInfo = {
  temp: 23,
  weather: 'sunny',
  iconUrl: require('../../assets/icons/Sun icon.svg').default,
  city: 'Sofia',
}
export interface WeatherInfoProps extends Styleable{
}
export default function WeatherInfo(props: WeatherInfoProps) {
  const [weatherInfo, setWeatherInfo] = useState(defaultWeatherInfo);
  function getCurrentTime() {
    const date = new Date();
    return date.toTimeString().substr(0, 5);
  }

  function getTemperature(temperature: number) {
    return `${temperature} ° C`;
  }

  useEffect(() => {
    // Load data
    const loadData = async ()=>{
      const response = await getFetchData(WEATHER_INFO_API);
      setWeatherInfo(response);
    };
    loadData();
    const loadDataInterval = setInterval(loadData, 10000);
    return () => clearInterval(loadDataInterval);
  }, [])

  return (
    <div className={getClassName('weatherInfo', props)} style={props.style}>
      <Icon className="weatherInfo-icon" src={weatherInfo.iconUrl}/>
      <div className="weatherInfo-rightside-container">
        <SiteInfoRow text={getTemperature(weatherInfo.temp)} value={weatherInfo.city} valueSize={16} textSize={16} margin={8}/>
        <div className="weatherInfo-separator"/>
        <div className="weatherInfo-current-time">{getCurrentTime()}</div>
      </div>
    </div>
  )
}
