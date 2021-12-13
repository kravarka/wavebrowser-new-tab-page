import React, { useEffect, useState } from 'react'
import Icon from '../Icon/Icon';
import './style.css'

export interface MostVisitedItem {
  rid: number;
  faviconUrl: string;
}
export default function MostVisited() {
  const [mostVisitedSites, setMostVisitedSites] = useState<MostVisitedItem[]>([]);
  // Load most visited sites
  useEffect(() => {
    if((window as any).chrome instanceof Object) {
      if((window as any).chrome.embeddedSearch instanceof Object) {
        try {
          const mostVisited = (window as any).chrome.embeddedSearch.newTabPage.mostVisited as MostVisitedItem[];
          setMostVisitedSites(mostVisited);
        } catch (error) { }
      }
    }
  }, []);

  function renderItem(url: string, iconUrl: string) {
    return (
      <div className="mostVisitedItem">
        <Icon src={iconUrl} className="mostVisitedItemIcon"/>
        <iframe src={url} />
      </div>
    );
  }

  function renderMostVisitedSites() {
    return mostVisitedSites.map(item=>{
      const url = `chrome-search://most-visited/title.html?rid=${item.rid}&c=FFFFFF&f=mulish&fs=14`;
      return renderItem(url, item.faviconUrl);
    });
  }

  return (
    <div className="mostVisited">
      {renderMostVisitedSites()}
    </div>
  )
}
