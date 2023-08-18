
import { useEffect,useState } from 'react'
import End1 from './components/End1'
import End2 from './components/End2'
import End3 from './components/End3'


import './index.less'

export default function Ending() {
  const [matchDgree, setmatchDgree] = useState(3)
   //从url中获取team和r（结果）
   const queryString = window.location.search;
   const params = new URLSearchParams(queryString);
   const team = params.get('team')
   const r = params.get('r')
  useEffect(() => {
setmatchDgree(parseInt(r))
  }, [matchDgree])

  return (
    <div id='ending'>
      <div id='endBack'></div>
      <div id='endMeteors'></div>
      <div id='endStars'></div>
      {matchDgree == 1 ? <End1 team={team}/>
        : matchDgree == 2 ? <End2 team={team}/>
          : matchDgree == 3 && <End3 />
      }

      <div className={`savebutton ${matchDgree==3?'appearE':''}`}>长按保存到相册</div>
    </div>
  )
}
