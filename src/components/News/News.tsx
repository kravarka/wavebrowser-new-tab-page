import React, { useEffect, useState } from 'react'
import ScrollFor from '../ScrollFor/ScrollFor'
import { getRandomArbitrary, Styleable } from '../utils/utils'
import './style.css'
//@ts-ignore
import Masonry from "react-responsive-masonry"
import Icon from '../Icon/Icon'
import { request } from 'http'

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
  }, []);

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
          <img src={item.image} className="news-item-image" />
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
      <ScrollFor className="news-arrow-down-container" title="Scroll for Lolita News" href="#news" />
      <div className="news-container">

        <span />
        <div className="news-content">
          <Masonry columnsCount={2} gutter="20px">
            {renderMasonryGridItem()}
          </Masonry>
        </div>
        <span />
      </div>
    </div>
  )
}
