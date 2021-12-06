import React from 'react'
import ScrollFor from '../ScrollFor/ScrollFor'
import { Styleable } from '../utils/utils'
import './style.css'

export interface NewsProps extends Styleable {
}
export default function News(props: NewsProps) {
  return (
    <div id="news" className="news">
        <ScrollFor className="news-arrow-down-container" title="Scroll for Lolita News" href="#news" />
        <div className="news-content">

          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et suscipit est. Cras ut finibus dui, in vulputate neque. Nunc feugiat, nibh eu condimentum pharetra, lacus felis convallis nibh, nec imperdiet justo enim eu risus. Curabitur rutrum lorem sit amet lacus ultrices convallis. Quisque turpis arcu, hendrerit quis nisl eu, lobortis consequat lorem. Maecenas non velit neque. Sed suscipit felis a feugiat tristique. Morbi interdum orci vel condimentum venenatis. Nulla ut risus tincidunt, faucibus orci ac, facilisis quam. Praesent massa nunc, ullamcorper eget vulputate non, cursus ac nunc. Quisque lacus risus, pulvinar ut enim ac, lobortis congue velit. Morbi in risus sodales, tempor elit nec, auctor turpis. Etiam ante nunc, finibus non pulvinar ut, molestie ut dolor. Duis dapibus rhoncus sem id viverra.

          Etiam interdum convallis tincidunt. Proin non massa consectetur ex vehicula mollis in a mi. Nunc eu rutrum nibh. Cras auctor neque velit, et ullamcorper ligula fringilla vel. Pellentesque in tempor ipsum, ut suscipit nibh. Suspendisse potenti. Mauris placerat vulputate accumsan. Nam lacinia nulla a consequat consequat. Vestibulum nec lobortis enim, eu porttitor metus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed erat turpis, elementum in magna sit amet, porttitor placerat mauris.

          Donec quis est lectus. Nam ac sapien arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed euismod, ex ac euismod egestas, elit felis dictum libero, quis blandit justo magna sed sem. Sed mauris erat, luctus non elementum id, dapibus nec lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc eu vulputate eros. Nunc posuere pulvinar tincidunt. Proin sed dolor nec lectus rutrum lobortis ut a arcu. Sed rhoncus imperdiet arcu quis condimentum.

          Mauris a arcu quis nunc pretium pellentesque ac eu odio. Phasellus a eros nec leo luctus commodo vitae et odio. Quisque est ex, lobortis vitae feugiat non, luctus ac lacus. Nam convallis arcu nisi, eget feugiat mauris commodo a. Integer ornare orci aliquam dignissim facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent suscipit elementum vestibulum.

          Etiam consequat ut nulla quis lobortis. In vestibulum velit eget nisi suscipit, sit amet ultricies arcu ullamcorper. Vestibulum auctor tellus ac nibh maximus fermentum at quis massa. Quisque neque purus, venenatis vel elit placerat, tincidunt feugiat nibh. Donec aliquet blandit ullamcorper. Sed eu imperdiet dolor. Fusce sem metus, malesuada ut sem quis, suscipit sollicitudin elit. Phasellus eu hendrerit justo. Vestibulum non nisl in lectus tincidunt laoreet eget et ipsum.
        </div>
      </div>
  )
}
