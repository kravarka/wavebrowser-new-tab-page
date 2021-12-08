import React, { useEffect, useState } from 'react'
import Body from '../Body/Body';
import Header from '../Header/Header'
import News from '../News/News';
import { map } from '../utils/utils';
import './style.css'

export default function MainPage() {
  const [blur, setBlur] = useState(0);

  //Register scroll event
  useEffect(() => {
    const onScroll = () => {
      const scrollPosition = window.scrollY;
      const _blur = map(scrollPosition, 0, window.innerHeight * 2, 0, 8);
      setBlur(_blur);
    };
    document.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      document.removeEventListener('scroll', onScroll);
    }
  }, [])

  // Update blur effect on background
  useEffect(() => {
    document.documentElement.style.setProperty('--blur-value', `${blur}px`);
  }, [blur])

  return (
    <div className="mainPage">
      <Header />
      <Body />
      <News />
    </div >
  )
}
