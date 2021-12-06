import React, { useEffect, useState } from 'react'
import Icon from '../Icon/Icon'
import { getClassName, map, Styleable } from '../utils/utils'
import './style.css'

const defaultPosition = 36;
const defaultHeaderPercentage = 20;
export interface SearchBarProps extends Styleable{

}
export default function SearchBar(props: SearchBarProps) {
  const [translateY, setTranslateY] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const scrollPosition = window.scrollY;
      const headerHeight = window.innerHeight * (defaultHeaderPercentage / 100);
      const _translateY = map(scrollPosition, 0, headerHeight, 0, defaultPosition);
      setTranslateY(_translateY * -1);
    };
    document.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      document.removeEventListener('scroll', onScroll);
    }
  }, [])

  function getTransform() {
    return {
      transform: `translateY(${translateY}px)`
    }
  }
  return (
    <div className={getClassName('searchBar', props)} style={getTransform()}>
      <Icon src={require("../../assets/icons/Search icon.svg").default}/>
      <input className="searchBar-input" placeholder="Search or type a URL"/>
      <Icon src={require("../../assets/icons/Microphone logo.svg").default}/>
    </div>
  )
}
