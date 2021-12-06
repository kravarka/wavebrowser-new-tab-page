import React from 'react'
import ScrollFor from '../ScrollFor/ScrollFor'
import { Styleable } from '../utils/utils'
import './style.css'
//@ts-ignore
import Masonry from "react-responsive-masonry"
import Icon from '../Icon/Icon'
import { request } from 'http'

const items = [
  {
    title: 'Lorem ipsum dolor sit ame consectetur adipiscing elit.',
    image: 'https://i.picsum.photos/id/875/200/300.jpg?hmac=9NSoqXHP89pGlq4Sz3OgGxjx5c91YHJkcIOBFgNJ8xA'
  },
  {
    title: 'Lorem ipsum  adipiscing elit.',
    image: 'https://i.picsum.photos/id/1033/200/300.jpg?hmac=856_WOyaGXSjI4FWe3_NCHU7frPtAEJaHnAJja5TMNk'
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://i.picsum.photos/id/363/200/300.jpg?hmac=LvonEMeE2QnwxULuBZW5xHtdjkz844GnAPpEhDwGvMY'
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://i.picsum.photos/id/691/200/300.jpg?hmac=1nouilaOHm3p-SqXPrCLcCcFEtJ60GlDAwkLAHq4x-c'
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://i.picsum.photos/id/411/200/300.jpg?hmac=HAAfOgAOgDPvxb7JO5zY-aR9Q-mJoDxYkZqNpoadhbw'
  },
  {
    title: 'Lorem ipsum dolor s',
    image: 'https://i.picsum.photos/id/699/200/200.jpg?hmac=ueGvLUyOnWJ67372C4BTRRWlSCkroP0AtC9mSrj1Cis'
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://i.picsum.photos/id/1039/200/200.jpg?hmac=VpGJWDIq64ZdzDD5NAREaY7l5gX14vU5NBH84b5Fj-o'
  },
  {
    title: 'Lorem ipsu consectetur adipiscing elit.',
    image: 'https://i.picsum.photos/id/363/200/300.jpg?hmac=LvonEMeE2QnwxULuBZW5xHtdjkz844GnAPpEhDwGvMY'
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://i.picsum.photos/id/363/200/300.jpg?hmac=LvonEMeE2QnwxULuBZW5xHtdjkz844GnAPpEhDwGvMY'
  },
  {
    title: 'Lorem ipsum ',
    image: 'https://i.picsum.photos/id/875/200/300.jpg?hmac=9NSoqXHP89pGlq4Sz3OgGxjx5c91YHJkcIOBFgNJ8xA'
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://i.picsum.photos/id/363/200/300.jpg?hmac=LvonEMeE2QnwxULuBZW5xHtdjkz844GnAPpEhDwGvMY'
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://i.picsum.photos/id/363/200/300.jpg?hmac=LvonEMeE2QnwxULuBZW5xHtdjkz844GnAPpEhDwGvMY'
  },
  
]
export interface NewsProps extends Styleable {
}
export default function News(props: NewsProps) {
  function renderMasonryGridItem() {
    return items.map((item, i)=>{
      return (
        <div key={i} className="news-item">
          <img src={item.image} className="news-item-image" />
          <div className="news-item-info-container">
            {item.title}
            <div className="news-item-info-buttons">
              <Icon src={require('../../assets/icons/Heart icon.svg').default}/>
              <Icon src={require('../../assets/icons/Bookmarks icon.svg').default}/>
              <Icon src={require('../../assets/icons/dots.svg').default}/>
            </div>
          </div>
        </div>
      );
    })
  }
  return (
    <div id="news" className="news">
        <ScrollFor className="news-arrow-down-container" title="Scroll for Lolita News" href="#news" />
        <div className="news-content">
          <Masonry columnsCount={3} gutter="20px">
            {renderMasonryGridItem()}
          </Masonry>
        </div>
      </div>
  )
}
