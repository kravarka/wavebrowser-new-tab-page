import React from 'react'
import { getClassName, Styleable } from '../utils/utils'
import './style.css'

export interface IconProps extends Styleable{
  src: string;
}
export default function Icon(props: IconProps) {
  return (
    <img className={getClassName('icon', props)} alt="icon" src={props.src} />
  )
}
