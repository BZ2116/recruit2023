import { useNavigate } from "react-router-dom";
import { useState ,useContext} from "react";
import "./index.less";
import axios from "axios";
import { SiteHash} from '../../../App'

export default function Letter3() {
  const [teamStatus, setteamStatus] = useState("");
  const navigate = useNavigate();
  const [siteHash,setSiteHash] = useContext(SiteHash)

  const handleTeamChange = (e) => {
    setteamStatus(e.target.value);
  };
  function handleChoose1(team) {
    if (teamStatus) {
      navigate(`/page2?team=${team}&c=1`);
      // navigate(`/match?team=${team}&c=1`)
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
    } else {
      alert("请选择你的战队");
    }
  }
  return (
    <div id="letter3">
      <div id="letter3Back">
        <div id="letter3T">
          请您挑选一支战队，然后加入到红岩星系的一支战队中，完成联盟。若两支战队的匹配度高，不但可以缩短磨合期，而且能够发挥两支战队的最大潜能。
        </div>
        <div id="teamChoose">
          <div>
            <input
              type="radio"
              name="team"
              value="om"
              id="om"
              onChange={handleTeamChange}
            />
            <label htmlFor="om">战队一：擅长修复作战系统漏洞</label>
          </div>
          <div>
            <input
              type="radio"
              name="team"
              value="be"
              id="be"
              onChange={handleTeamChange}
            />
            <label htmlFor="be">战队二：擅长构建可靠的作战系统</label>
          </div>
          <div>
            <input
              type="radio"
              name="team"
              value="fe"
              id="fe"
              onChange={handleTeamChange}
            />
            <label htmlFor="fe">战队三：擅长打造完美的系统操作界面</label>
          </div>
          <div>
            <input
              type="radio"
              name="team"
              value="vd"
              id="vd"
              onChange={handleTeamChange}
            />
            <label htmlFor="vd">战队四：擅长绘制精细的作战地图</label>
          </div>
          <div>
            <input
              type="radio"
              name="team"
              value="md"
              id="md"
              onChange={handleTeamChange}
            />
            <label htmlFor="md">战队五：擅长构筑一切所需程序</label>
          </div>
          <div>
            <input
              type="radio"
              name="team"
              value="pp"
              id="pp"
              onChange={handleTeamChange}
            />
            <label htmlFor="pp">战队六：擅长制定出其不意的作战战略</label>
          </div>
        </div>
      </div>
      <button
        onClick={() => {
          handleChoose1(teamStatus);
        }}
      ></button>
    </div>
  );
}
