import React, { CSSProperties } from 'react'
import { getClassName, Styleable } from '../utils/utils'
import './style.css'

export interface SiteInfoRowProps extends Styleable {
  value: string;
  valueSize?: number;
  text: string;
  textSize?: number;
  valueFirst?: boolean;
  margin?: number;
}
export default function SiteInfoRow(props: SiteInfoRowProps) {
  function renderValue() {
    const key = props.valueFirst ? 'marginRight' : 'marginLeft';
    const margin = { [key]: props.margin };
    return <span key={props.value + '-value'} className="siteInfoRow-value" style={{ fontSize: props.valueSize, ...margin }}>{props.value}</span>
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
    <p key={props.value + '-text'} className={getClassName('siteInfoRow-text', props)} style={customStyle}>
      {renderBody()}
    </p>
  )
}
