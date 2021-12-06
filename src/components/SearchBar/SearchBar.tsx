import React from 'react'
import Icon from '../Icon/Icon'
import { getClassName, Styleable } from '../utils/utils'
import './style.css'

export interface SearchBarProps extends Styleable{

}
export default function SearchBar(props: SearchBarProps) {
  return (
    <div className={getClassName('searchBar', props)}>
      <Icon src={require("../../assets/icons/Search icon.svg").default}/>
      <input className="searchBar-input" placeholder="Search or type a URL"/>
      <Icon src={require("../../assets/icons/Microphone logo.svg").default}/>
    </div>
  )
}
