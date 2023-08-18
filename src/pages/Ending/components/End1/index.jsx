import { useState, useEffect ,useContext} from "react";
import QR1 from "../../../../assets/EndPic/QRcode1.png";
import QR2 from "../../../../assets/EndPic/QRcode2.png";
import "./index.less";
import { SiteHash } from "../../../../App";
import axios from "axios";

export default function End1(props) {
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
            "https://be-dev.redrock.cqupt.edu.cn/site-statistics/sites/" +
              `${siteHash}`,
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
    <div id="endBack12">
      <div id="end1Text">
        <h4>
          匹配度在75%以<p id="up">上</p>：
        </h4>
        <p id="endText2">
          您已和<p id="endTeam">{props.team}星球战队</p>联盟
        </p>
        <p>
          愿你们不再被生存所束缚，能够仰望星空，延续希望。纵然现在身处黑暗，相信你们也能成为一束耀眼的光，照亮前行的道路。
        </p>
      </div>
      <div id="endLast"></div>
      <div id="endQRcode">
        <img
          id="QRcode1"
          src={QR1}
          alt="招新1"
          onTouchStart={handleShareStart}
          onTouchEnd={handleShareEnd}
        />
        <img
          id="QRcode2"
          src={QR2}
          alt="招新2"
          onTouchStart={handleShareStart}
          onTouchEnd={handleShareEnd}
        />
      </div>
    </div>
  );
}
