import { useEffect, useState } from 'react';
import './index.less'
import { useNavigate } from 'react-router-dom';

export default function Match() {
  const matchList = {
    teamName: ['前端', '后端', 'SRE','移动开发' , '视觉', '产品',],
    'om': {
      matchdgree: [72, 76, 100, 65, 20, 23]
    }, 'be': {
      matchdgree: [81, 100, 76, 78, 21, 22]
    }, 'fe': {
      matchdgree: [100, 81, 72, 88, 40, 20]
    }, 'vd': {
      matchdgree: [40, 21, 20, 34, 100, 80]
    }, 'md': {
      matchdgree: [88, 78, 65, 100, 34, 29]
    }, 'pp': {
      matchdgree: [20, 22, 23, 29, 80, 100]
    }
  }
  //从url中获取team和c（次数）
  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);
  const team = params.get('team')
  const c = params.get('c')
  const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1);
  useEffect(() => {
    const interval = setInterval(() => {
      setNumber(Math.floor(Math.random() * 90) + 10);
    }, 60);

    setTimeout(() => {
      clearInterval(interval);
      setNumber(matchList[team].matchdgree[parseInt(c) - 1])
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const navigate = useNavigate()
  const handleGiveup = function () {
    if (c == '6') {
      navigate('/end?r=3')
    } else {
      navigate(`/page2?team=${team}&c=${parseInt(c) + 1}`)
    }
  }
  const handlealign = function () {
    if (matchList[team].matchdgree[parseInt(c) - 1] >= 75) {
      navigate(`/end?r=1&team=${matchList.teamName[parseInt(c) - 1]}`)
    } else {
      navigate(`/end?r=2&team=${matchList.teamName[parseInt(c) - 1]}`)
    }

  }
  return (
    <div id='matchingPage'>
      <div id='matchBack'></div>
      <div id='matchMeteors'></div>
      <div id='shinningStars'></div>

      {c == '1' && <>
        <div id='match1' className='fe'>
          <p>当前为&nbsp;&nbsp;<p id='teamName'>前端星球战队</p></p>
          <p>与我方战队匹配度为:&nbsp;<p id='matchDgree'>{number}%</p></p>
          <div id='match13'>
            {matchList[team].matchdgree[parseInt(c) - 1] < 75 && <div id='match2'></div>}
          </div>
        </div>
        <div className='fecontent'></div>
      </>
      }
      {c == '2' && <>
        <div id='match1' className='be'>
          <p>当前为&nbsp;&nbsp;<p id='teamName'>后端星球战队</p></p>
          <p>与我方战队匹配度为:&nbsp;<p id='matchDgree'>{number}%</p></p>
          <div id='match13'>
            {matchList[team].matchdgree[parseInt(c) - 1] < 75 && <div id='match2'></div>}
          </div>
        </div>
        <div className='becontent'></div>
      </>
      }
      {c == '3' && <>
        <div id='match1' className='sre'>
          <p>当前为&nbsp;&nbsp;<p id='teamName'>SRE星球战队</p></p>
          <p>与我方战队匹配度为:&nbsp;<p id='matchDgree'>{number}%</p></p>
          <div id='match13'>
            {matchList[team].matchdgree[parseInt(c) - 1] < 75 && <div id='match2'></div>}
          </div>
        </div>
        <div className='srecontent'></div>
      </>
      }
      {c == '4' && <>
        <div id='match1' className='md'>
          <p>当前为&nbsp;&nbsp;<p id='teamName'>移动开发星球战队</p></p>
          <p>与我方战队匹配度为:&nbsp;<p id='matchDgree'>{number}%</p></p>
          <div id='match13'>
            {matchList[team].matchdgree[parseInt(c) - 1] < 75 && <div id='match2'className='match2Md'></div>}
          </div>
        </div>
        <div className='mdcontent'></div>
      </>
      }
      {c == '5' && <>
        <div id='match1' className='vd'>
          <p>当前为&nbsp;&nbsp;<p id='teamName'>视觉星球战队</p></p>
          <p>与我方战队匹配度为:&nbsp;<p id='matchDgree'>{number}%</p></p>
          <div id='match13'>
            {matchList[team].matchdgree[parseInt(c) - 1] < 75 && <div id='match2' ></div>}
          </div>
        </div>
        <div className='vdcontent'></div>
      </>
      }
      {c == '6' && <>
        <div id='match1' className='pp'>
          <p>当前为&nbsp;&nbsp;<p id='teamName'>产品星球战队</p></p>
          <p>与我方战队匹配度为:&nbsp;<p id='matchDgree'>{number}%</p></p>
          <div id='match13'>
            {matchList[team].matchdgree[parseInt(c) - 1] < 75 && <div id='match2'></div>}
          </div>
          <div id='match2last'></div></div>
        <div className='ppcontent'></div>
      </>
      }
      <div id='match5'><div onClick={handleGiveup}></div><div onClick={handlealign}></div></div>
    </div>
  )
}
