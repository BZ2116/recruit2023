import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './index.less'


export default function Page2() {
  const [isLongTouch, setIsLongTouch] = useState(false);//记录是否长按超过2秒,两个状态：0表示为初始界面，1表示超过2秒没松手的动态界面
  const [isTouch, setIsTouch] = useState(false);//记录是否点击
  const [isTouchOver, setIsTouchOver] = useState(true);//记录是否松开
  const [isturn, setisturn] = useState(false)

  const navigate = useNavigate()
  let timer, timer1

  //从url中获取team和c（次数）
  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);
  const team = params.get('team')
  const c = params.get('c')

  const [pageCount, setPageCount] = useState(c);//记录次数

  const handleTouchStart = () => {
    setIsTouchOver(false)
    setIsTouch(true)
    // 长按时间阈值,超过2秒才有变化    

  };

  const handleTouchEnd = () => {
    clearTimeout(timer)
    // clearInterval(timer1)
    setIsTouch(false)
    setIsTouchOver(true)
  };

  useEffect(() => {
    if (isTouch) {
      timer = setTimeout(() => {
        if (!isTouchOver) {
          setIsLongTouch(true)
        }
      }, 2000)
      // timer1 = setInterval(() => {
      //   setstateRotate(stateRotate=>stateRotate+1);
      // }, 10);

    }
  }, [isTouch])
  useEffect(() => {
    if (isLongTouch && isTouchOver) {
      navigate(`/page3?team=${team}&c=${pageCount}`)
      setPageCount(pageCount + 1)

    }
    if (isLongTouch && !isTouchOver) {
      setisturn(true)
    }
  }, [isLongTouch, isTouchOver])



  return (
    <div id='page2'>
      {!isLongTouch &&
        <div id='page2start'>
          <div id="MaintitleBox"><div id='Maintitle1'></div>
            <div id="Maintitle2"></div></div>
          <div className="Centralstar2"></div>
          <div className="rightBottomStar11"></div>
          <div id='liuxing'></div>
          <div className='page2Stars'></div>
        </div>}
      {
        (isLongTouch && !isTouchOver) &&
        <>
          <div id='page3start'>
            {/* <div id='STARS'>
              <div id='shineSTAR1'></div>
              <div id='shineSTAR2'></div>
              <div id='liuxing'></div>
              <div id='Stone6'></div>
              <div id='Stone7'></div>
            </div> */}
            <div className='Centralstar22'></div>
          <div className="rightBottomStar22"></div>
            <div className={`${(c == '1' || c == '3' || c == "5") ? 'Star1' : ''}`}></div>
            <div className={`${(c == '5' || c == '4' || c == '2') ? 'Star2' : ''}`}></div>
            <div className={`${(c == '2' || c == '6' || c == "1") ? 'Star3' : ''}`}></div>
            <div className={`${(c == '5' || c == '3' || c == '2') ? 'Star4' : ''}`}></div>
            <div className={`${(c == '3' || c == '6' || c == '4') ? 'rightBottomStar12' : ''}`}></div>
            <div className='Stone1'></div>
            <div className='Stone2'></div>
            <div className='Stone3'></div>
            <div className='Stone4'></div>
            <div className='Stone5'></div>
            <div className='page3Stars'></div>
            <div id='page3Stars'></div>
            <div id='Stars1'></div>
            <div id='Stars2'></div>
            <div id='Stars3'></div>
            <div id='Stars4'></div>
            <div className='Stones'></div>
          </div>

        </>
      }

      {(!isLongTouch && c == '1') && <div className='page2BottomText11' ></div>}
      {!isLongTouch && c !== '1' && <div className='page2BottomText12' ></div>}
      {(isLongTouch && !isTouchOver) && <div id='page2BottomText2' ></div>}
      <div id='longTouchButton'
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}>
        <div id='rotateButtom' className={isTouch == true ? 'rolling' : ''}></div>
      </div>

    </div>

  )
}
