

import { useContext } from "react";

import { useEffect } from 'react'
import { Loaded } from "../../App";
import './index.less'

export default function Mainpage() {
  const [LoadedState, setLoadedState] = useContext(Loaded);
  useEffect(() => {
    setLoadedState(1)
  }, [])//确保手动从首页一返回时点击继续也出现


  return (
    <div id="mainpage">
      <div id="MaintitleBox"><div id='Maintitle1'></div>
      <div id="Maintitle2"></div></div>
          <div className="Centralstar"></div>
      <div id="Maintitle3"></div>
      </div>
  )
}
