import React, { useEffect, useState } from 'react'
import News from '../News/News';
import './style.css'

export default function MainPage() {
  useEffect(() => {
  }, [])
  useEffect(() => {
    // Send height to parent
    window.onload = ()=>{
      window.parent.postMessage(document.body.clientHeight, '*');
    };
  }, [])
  return (
    <News />
  )
}
