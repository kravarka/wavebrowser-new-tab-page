import React, { KeyboardEvent, KeyboardEventHandler, useEffect, useState } from 'react'
import Icon from '../Icon/Icon'
import { getClassName, handleSearch, map, Styleable } from '../utils/utils'
import './style.css'

const defaultPosition = 95;
const defaultHeaderPercentage = 20;
export interface SearchBarProps extends Styleable {

}
export default function SearchBar(props: SearchBarProps) {
  const [translateY, setTranslateY] = useState(0);
  const [searchValue, setSearchValue] = useState('');
  useEffect(() => {
    const onScroll = () => {
      const scrollPosition = window.scrollY;
      const headerHeight = window.innerHeight * (defaultHeaderPercentage / 100);
      const _translateY = map(scrollPosition, 0, headerHeight, 0, defaultPosition, true);
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

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.code === 'Enter' || e.code === 'NumpadEnter') {
      e.preventDefault();
      handleSearch(searchValue);
    }
  }

  function handleButtonClick() {
    handleSearch(searchValue);
  }

  return (
    <div className={getClassName('searchBar', props)} style={getTransform()}>
      <Icon src={require("../../assets/icons/Search icon.svg").default} onClick={handleButtonClick} />
      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className="searchBar-input" placeholder="Search or type a URL"
        onKeyDown={handleKeyDown}
      />
      <Icon src={require("../../assets/icons/Microphone logo.svg").default} />
    </div>
  )
}
