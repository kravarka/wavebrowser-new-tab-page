import React, { CSSProperties } from 'react'
import { getClassName, Styleable } from '../utils/utils'
import './style.css'

export interface SiteInfoRowProps extends Styleable {
  value: string;
  valueSize?: number;
  text: string;
  textSize?: number;
  suffix?: string;
  valueFirst?: boolean;
  margin?: number;
  marginRight?: number;
  marginLeft?: number;
}
export default function SiteInfoRow(props: SiteInfoRowProps) {
  function renderValue() {
    const margin = { marginLeft: props.marginLeft, marginRight: props.marginRight }
    return <span key={props.value + '-value'} className="siteInfoRow-value" style={{ fontSize: props.valueSize, ...margin }}>{props.value}</span>
  }
  function renderText() {
    return props.text
  }

  function renderSuffix() {
    return props.suffix || '';
  }

  function renderBody() {
    const body = [renderText(), renderValue()];
    if(props.valueFirst){
      body.reverse();
    }
    return [body, renderSuffix()];
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
