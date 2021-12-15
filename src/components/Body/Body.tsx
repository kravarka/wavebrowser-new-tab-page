import React, { useEffect, useState } from 'react'
import MostVisited from '../MostVisited/MostVisited';
import SideSocialLinks from '../SideSocialLinks/SideSocialLinks';
import { map } from '../utils/utils';
import './style.css'

const paddingBottom = 24;
export default function Body() {
  const [opacity, setOpacity] = useState(1);
  const [height, setHeight] = useState(0);
  const arrowDown = document.querySelector(".news-arrow-down-container");
  const arrowDownRect = arrowDown?.getBoundingClientRect();
  // Register scroll event
  useEffect(() => {
    const onScroll = () => {
      const scrollPosition = window.scrollY;
      const arrowDown = document.querySelector(".news-arrow-down-container");
      if (arrowDown) {
        var opacity = map(scrollPosition, 0, window.innerHeight / 4, 1, 0);
        opacity = Math.max(0, opacity);
        opacity = Math.min(1, opacity);
        setOpacity(opacity);
      }
    };
    document.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      document.removeEventListener('scroll', onScroll);
    }
  }, []);

  function getOpacity() {
    return { opacity };
  }

  return (
    <div className="mainBody">
        <SideSocialLinks className="mainBody-socialLinks" style={getOpacity()}/>
        <MostVisited className="mainBody-mostVisited" style={getOpacity()}/>
    </div>
  )
}
