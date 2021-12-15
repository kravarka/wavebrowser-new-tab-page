import React, { useEffect, useState } from 'react'
import ScrollFor from '../ScrollFor/ScrollFor'
import { getRandomArbitrary, map, Styleable } from '../utils/utils'
import './style.css'
//@ts-ignore
import Masonry from "react-responsive-masonry"
import Icon from '../Icon/Icon'

const defaultItems = [
  {
    title: 'Lorem ipsum dolor sit ame consectetur adipiscing elit.',
    image: 'https://picsum.photos'
  },
  {
    title: 'Lorem ipsum  adipiscing elit.',
    image: 'https://picsum.photos'
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://picsum.photos'
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://picsum.photos'
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://picsum.photos'
  },
  {
    title: 'Lorem ipsum dolor s',
    image: 'https://picsum.photos'
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://picsum.photos'
  },
  {
    title: 'Lorem ipsu consectetur adipiscing elit.',
    image: 'https://picsum.photos'
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://picsum.photos'
  },
  {
    title: 'Lorem ipsum ',
    image: 'https://picsum.photos'
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://picsum.photos'
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://picsum.photos'
  },

]
export interface NewsProps extends Styleable {
}
export default function News(props: NewsProps) {
  const [items, setItems] = useState(defaultItems);
  const [waypointOffset, setWaypointOffset] = useState({ offsetBottom: 0, height: 0, offsetTop: 0 });
  const [arrowDownOpacity, setArrowDownOpacity] = useState(1);

  useEffect(() => {
    const newItems: { title: string, image: string }[] = [];
    items.forEach((item, i) => {
      const width = Math.floor(getRandomArbitrary(200, 300));
      const height = Math.floor(getRandomArbitrary(200, 300));
      const urlPath = `/${width}/${height}`;
      const imageUrl = `${item.image}${urlPath}?random=${getRandomArbitrary(1, 50)}`;
      newItems.push({
        title: item.title,
        image: imageUrl,
      });
    });
    setItems(newItems);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Get waypoint offset
  useEffect(() => {
    const arrowDown = document.querySelector(".news-arrow-down-container");
    if (arrowDown) {
      const rect = arrowDown.getBoundingClientRect();
      const waypoint = {
        offsetBottom: window.innerHeight - rect.bottom,
        offsetTop: window.innerHeight - rect.top,
        height: rect.height,
      }
      setWaypointOffset(waypoint);
    }
  }, []);

  // Register scroll event
  useEffect(() => {
    const onScroll = () => {
      const scrollPosition = window.scrollY;
      const arrowDown = document.querySelector(".news-arrow-down-container");
      if (arrowDown) {
        var opacity = map(scrollPosition, waypointOffset.offsetBottom, waypointOffset.offsetBottom + waypointOffset.height, 1, 0);
        opacity = Math.max(0, opacity);
        opacity = Math.min(1, opacity);
          setArrowDownOpacity(opacity);
      }
    };
    document.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      document.removeEventListener('scroll', onScroll);
    }
  }, [waypointOffset])

  function renderMasonryGridItemButtons() {
    return (
      <div className="news-item-info-buttons">
        <Icon src={require('../../assets/icons/Heart icon.svg').default} />
        <Icon src={require('../../assets/icons/Bookmarks icon.svg').default} />
        <Icon src={require('../../assets/icons/dots.svg').default} />
      </div>
    );
  }
  function renderMasonryGridItem() {
    return items.map((item, i) => {
      return (
        <div key={i} className="news-item">
          <Icon src={require('../../assets/icons/Close icon.svg').default} className="news-item-close-icon" />
          <img src={item.image} alt="" className="news-item-image" />
          <div className="news-item-info-container">
            <span>{item.title}</span>
            {renderMasonryGridItemButtons()}
          </div>
        </div>
      );
    })
  }
  return (
    <div id="news" className="news">
      <ScrollFor className="news-arrow-down-container" style={{ opacity: arrowDownOpacity }} title="Scroll for Lolita News" />
      <div className="news-container">
        <span />
        <div className="news-content">
          <Masonry columnsCount={1} gutter="20px">
            {renderMasonryGridItem()}
          </Masonry>
        </div>
        <span />
      </div>
    </div>
  )
}
