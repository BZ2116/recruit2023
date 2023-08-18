// import Letter1 from '../../../Mask/Letter1'

import "./index.less";
import { useState, useContext } from "react";

import { useEffect } from "react";
import { Loaded, MusicLoad } from "../../../../App";
import { useNavigate } from "react-router-dom";
import Loading from "../../../Loading";
export default function Page1() {
  const [LoadedState, setLoadedState] = useContext(Loaded);
  const [musicLoaded, setmusicLoaded] = useContext(MusicLoad);

  const navigate = useNavigate();
  const [textCount, settextCount] = useState(1);
  function handleNext() {
    settextCount(textCount + 1)
  }
  useEffect(() => {
    setLoadedState(2);
  }, []); //确保手动从主页前进时点击继续消失

  useEffect(() => {
    if (textCount > 3) {
      navigate("/letter1");
    }
  }, [textCount]);

  return (<>
    {/* *************************测试时用，添加音乐加载判断功能时要改为musicLoaded == 0 ********************************/}
    {musicLoaded == 0 ? <Loading /> :
      <div id='page1'>

        {textCount == 1 &&
          <>
            <div id='text1'><p>纪元2264年，人类早已远航万年，驶向星空，建立了一个由数百个星系组成的星际帝国。由于帝国的扩张和人口的剧烈增长，能源稀缺问题已经成为了一个极其严峻的挑战。</p></div>
            <div><span id='next1' onClick={handleNext}>▽</span></div>
</>
        }
            {textCount == 2 &&
              <>
                <div id='text1'><p>而今出现了一种被称为“零点能源”的神秘物质，它是宇宙中无尽能源的源泉，因此各个星系闻讯而动，争相争夺。</p>
                </div>
                <div><span id='next1' onClick={handleNext}>▽</span></div>

              </>
            }
            {textCount == 3 &&
              <>
                <div id='text1'>
                  <p>深空之下，文明无数.....面对实力未知的的竞争对手们，红岩星系决定与艾克塔尔星系联盟，共同争夺零点能源。</p>
                </div>
                <div ><span onClick={handleNext}id='next1' >▽</span></div>
              </>
            }   </div>}
      </>
  )
}
