import axios from 'axios';
import QR1 from '../../../../assets/EndPic/QRcode1.png'
import QR2 from '../../../../assets/EndPic/QRcode2.png'
import './index.less'
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { SiteHash } from "../../../../App";
export default function End2(props) {
  const [siteHash, setSiteHash] = useContext(SiteHash);
  const [ShareState, setShareState] = useState(false);
  let timer;
  const handleShareStart = function () {
    setShareState(true);
  };
  const handleShareEnd = function () {
    clearTimeout(timer);
    setShareState(false);
  };
  useEffect(() => {
    timer = setTimeout(() => {
      if (ShareState) {
        axios
          .get(
            "https://be-dev.redrock.cqupt.edu.cn/site-statistics/sites/" +`${siteHash}`,
            {
              headers: { "User-Agent": navigator.userAgent }, // 设置User-Agent
            }
          )
          .then(function (response) {
            // 处理响应
            console.log(JSON.parse(response));
          })
          .catch(function (error) {
            // 处理错误
          });
      }
    }, 1000);
  }, [ShareState]);
  return (
    <div id='endBack12'>
      <div id='end1Text'>
        <h4>匹配度在75%以<p id='down'>下</p>：</h4>
        <p id='endText2'>您已和<p id='endTeam'>{props.team}星球战队</p>联盟</p>
        <p>虽然匹配度不高，但是也无法阻碍你们前行的脚步，愿你们凭借勇气和坚毅，延续种族生存的希望！</p>
      </div>
      <div id='endLast'></div>
      <div id='endQRcode'>
      <img id='QRcode1' src={QR1} alt='招新1' onTouchStart={handleShareStart} onTouchEnd={handleShareEnd}/>
        <img id='QRcode2' src={QR2} alt='招新2' onTouchStart={handleShareStart} onTouchEnd={handleShareEnd}/>
      </div>

    </div>
  )
}

