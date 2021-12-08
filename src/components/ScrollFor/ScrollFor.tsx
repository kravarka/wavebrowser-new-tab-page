import React, { MouseEvent, useState } from 'react'
import Icon from '../Icon/Icon'
import { getClassName, Styleable } from '../utils/utils'
import './style.css'

const anchorMap = {
  top: '#news',
  down: '#main',
}

export interface ScrollForProps extends Styleable {
  title: string;
  // href?: string;
}
export default function ScrollFor(props: ScrollForProps) {
  // const [anchorDirection, setAnchorDirection] = useState<'top' | 'down'>('down');
  // function handleToggle(e: MouseEvent<HTMLAnchorElement>) {
  //   const target = e.currentTarget
  //   e.preventDefault();
  //   target.classList.toggle('scrollFor-arrow-clicked');
  //   const direction = anchorDirection === 'top' ? 'down' : 'top';
  //   setAnchorDirection(direction);
  //   const href = anchorMap[direction];
  //   document.querySelector(href)?.scrollIntoView({
  //     behavior: 'smooth'
  //   });
  // }
  // const anchorHref = anchorMap[anchorDirection];
  return (
    <div className={getClassName("scrollFor-arrow-down-container", props)} style={props.style}>
      <div>{props.title}</div>
      <Icon 
        src={require('../../assets/icons/Arrow down.svg').default}
        className="scrollFor-arrow-down"
      />
    </div>
  )
}
