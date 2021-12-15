import React, { KeyboardEvent, KeyboardEventHandler, useEffect, useRef, useState } from 'react'
import Icon from '../Icon/Icon'
import { getClassName, handleSearch, map, observer, Styleable } from '../utils/utils'
import './style.css'

const defaultPosition = 95;
const defaultHeaderPercentage = 20;
export interface SearchBarProps extends Styleable {

}
export default function SearchBar(props: SearchBarProps) {
  const [searchValue, setSearchValue] = useState('');

  useEffect(()=>{
    const searchBar = document.querySelector('.header');
    if(searchBar){
      observer.observe(searchBar);
    }
  }, []);

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
    <div className={getClassName('searchBar', props)}>
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
