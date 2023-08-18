import { useEffect, useState } from 'react';
import './index.less'
import { useNavigate } from 'react-router-dom';

export default function Page3() {
  //从url中获取team和c（次数）
  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);
  const team = params.get('team')
  const c = params.get('c')
  const [maskShow, setMaskShow] = useState(false)
  const [matchShow, setmatchShow] = useState(false)//记录“点击匹配按钮”是否出现
  const [appearState, setappearState] = useState(false)

  const handleMaskNext = function () {
    setmatchShow(true)
    setMaskShow(false)
  }
  const navigate = useNavigate()
  const handleMatchTest = function () {
    navigate(`/match?team=${team}&c=${parseInt(c)}`)
  }

  useEffect(() => {
    setTimeout(() => {
      setappearState(!appearState)
    }, 2000);
    if (c != 1) {
      setmatchShow(true)
    } else {
      setTimeout(() => {
        setMaskShow(true)
      }, 3000)
    }
  }, [])

  // useEffect(() => {
  //   setTimeout(() => {
  //     setappearState(!appearState)
  //   }, 2000);
  // }, [])


  return (
    <div id='page3'>
      <div id='STARS'>
        <div className='Stars1'></div>
        <div className='Stars2'></div>
        <div className='Stars3'></div>
        <div className={`${appearState==true?'shineSTAR1':''}`}></div>
        <div className={`${appearState==true?'shineSTAR2':''}`}></div>
        <div className={`${appearState==true?'liuxing':''}`}></div>
        <div className={`${(c=='2'||c!=='4'||c!=='1')&&'Stone6'} ${appearState==true?'Stone61':''}`} ></div>
        <div className={`${(c=='1'||c=='4')&&'Stone7'} ${appearState==true?'Stone71':''}`}></div>
        <div className={`${(c=='3'||c=='6')&&'Stone8'} ${appearState==true?'Stone81':''}`}></div>
        <div className={` ${c == '1' ? 'STAR1show' : 'disappear'}`} id={`${appearState==true?'STARFLOAT1':''}`}><span>前端星球</span></div>
        <div className={` ${c == '2' ? 'STAR2show' : 'disappear'}`} id={`${appearState==true?'STARFLOAT2':''}`}><span>后端星球</span></div>
        <div className={` ${c == '3' ? 'STAR3show' : 'disappear'}`} id={`${appearState==true?'STARFLOAT3':''}`}><span>运维星球</span></div>
        <div className={` ${c == '6' ? 'STAR4show' : 'disappear'}`} id={`${appearState==true?'STARFLOAT4':''}`}><span>产品星球</span></div>
        <div className={` ${c == '5' ? 'STAR5show' : 'disappear'}`} id={`${appearState==true?'STARFLOAT5':''}`}><span>视觉星球</span></div>
        <div className={` ${c == '4' ? 'STAR6show' : 'disappear'}`} id={`${appearState==true?'STARFLOAT6':''}`}><span>移动开发星球</span></div>
      </div>

      {maskShow == true &&
        <>
          <div id='MatchMask'></div>
          <div id='MatchMaskText'>
            <p id='MatchMaskText1'>尊敬的艾克塔尔星系战队总指挥官</p>
            <p id='MatchMaskText2'>当前为您遇到的第一支红岩星系的战队，请您测试我方战队与红岩星系战队的匹配度，从而判断两队是否适合联盟</p>
            <div><span onClick={handleMaskNext}></span></div>
          </div>
        </>}
      {
        matchShow == true &&
        <div id='matchButton' onClick={handleMatchTest}></div>
      }
    </div>
  )
}
