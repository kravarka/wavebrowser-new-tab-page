import React from 'react'
import Icon from '../Icon/Icon'
import { getClassName, Styleable } from '../utils/utils'
import './style.css'

export interface ScrollForProps extends Styleable {
  title: string;
  href: string;
}
export default function ScrollFor(props: ScrollForProps) {
  return (
    <div className={getClassName("scrollFor-arrow-down-container", props)} style={props.style}>
      <div>{props.title}</div>
      <Icon src={require('../../assets/icons/Arrow down.svg').default} className="scrollFor-arrow-down" href={props.href} />
    </div>
  )
}
