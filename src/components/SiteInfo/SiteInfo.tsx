import React, { useEffect, useState } from 'react'
import SiteInfoRow from '../SiteInfoRow/SiteInfoRow'
import { SITE_INFO_API } from '../utils/constants';
import { getClassName, getFetchData, Styleable } from '../utils/utils'
import './style.css'

const defaultSiteInfo = {
  prefix: 'Over',
  count: '1/2',
  suffix: 'tree saved',
  trees: 0.6,
};
export interface SiteInfoProps extends Styleable{
}
export default function SiteInfo(props: SiteInfoProps) {
  const [siteInfo, setSiteInfo] = useState(defaultSiteInfo);
  useEffect(() => {
    const loadData = async () => {
      const response = await getFetchData(SITE_INFO_API);
      setSiteInfo(response);
    }
    loadData();
  }, [])
  return (
    <div className={getClassName('siteInfo', props)} style={props.style}>
      <div className="siteInfo-title">Lolita Mercedes</div>
      {/* <div className="siteInfo-container">
        <SiteInfoRow value="0" valueId="total-blocked-ads-10ce98f6-53f1-4d2c-b9de-4cda37d9e6cd" text=" ads blocked" valueFirst valueSize={30} textSize={20}/>
        <SiteInfoRow text={siteInfo.prefix} value={siteInfo.count} suffix={siteInfo.suffix} marginLeft={4} marginRight={4} valueSize={30} textSize={20}/>
      </div> */}
    </div>
  )
}
