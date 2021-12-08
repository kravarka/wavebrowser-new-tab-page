import React, { useEffect, useState } from 'react'
import Icon from '../Icon/Icon'
import SiteInfoRow from '../SiteInfoRow/SiteInfoRow'
import { WEATHER_INFO_API } from '../utils/constants'
import { getClassName, getFetchData, Styleable } from '../utils/utils'
import './style.css'

const updateTimeout = 60000;
const defaultWeatherInfo = {
  temp: '-',
  weather: 'sunny',
  iconUrl: require('../../assets/icons/Sun icon.svg').default,
  iconUrl2x: '',
  city: '--',
}
export interface WeatherInfoProps extends Styleable{
}
export default function WeatherInfo(props: WeatherInfoProps) {
  const [weatherInfo, setWeatherInfo] = useState(defaultWeatherInfo);
  function getCurrentTime() {
    const date = new Date();
    return date.toTimeString().substr(0, 5);
  }

  function getTemperature(temperature: number | string) {
    return `${temperature} ° C`;
  }

  function getSrcSet() {
    return `${weatherInfo.iconUrl} 1x, ${weatherInfo.iconUrl2x} 2x`;
  }

  useEffect(() => {
    // Load data
    const loadData = async ()=>{
      const response = await getFetchData(WEATHER_INFO_API);
      setWeatherInfo(response);
    };
    loadData();
    const loadDataInterval = setInterval(loadData, updateTimeout);
    return () => clearInterval(loadDataInterval);
  }, [])

  return (
    <div className={getClassName('weatherInfo', props)} style={props.style}>
      <Icon className="weatherInfo-icon" src={weatherInfo.iconUrl} srcSet={getSrcSet()} />
      <div className="weatherInfo-rightside-container">
        <SiteInfoRow text={getTemperature(weatherInfo.temp)} value={weatherInfo.city} valueSize={16} textSize={16} marginLeft={8}/>
        <div className="weatherInfo-separator"/>
        <div className="weatherInfo-current-time">{getCurrentTime()}</div>
      </div>
    </div>
  )
}
