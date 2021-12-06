import React, { CSSProperties } from 'react'
import { getClassName, Styleable } from '../utils/utils'
import './style.css'

export interface SiteInfoRowProps extends Styleable {
  value: string;
  valueSize?: number;
  text: string;
  textSize?: number;
  valueFirst?: boolean;
}
export default function SiteInfoRow(props: SiteInfoRowProps) {
  function renderValue() {
    return <span className="siteInfoRow-value" style={{ fontSize: props.valueSize }}>{props.value}</span>
  }
  function renderText() {
    return props.text
  }
  function renderBody() {
    const body = [renderText(), renderValue()];
    if(props.valueFirst){
      body.reverse();
    }
    return body;
  }
  const customStyle: CSSProperties = {
    fontSize: props.textSize,
    ...props.style,
  }
  return (
    <p className={getClassName('siteInfoRow-text', props)} style={customStyle}>
      {renderBody()}
    </p>
  )
}
