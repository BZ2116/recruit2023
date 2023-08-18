import React, { useEffect, useState } from "react";

import "./index.less";
// import { startAnimation } from "./Background";

function Background() {
  const [currentPath, setcurrentPath] = useState('second')
  useEffect(() => {
setcurrentPath(window.location.pathname)
  }, [currentPath])


  return<div className="Background" >
    <div id="Jupiter"></div>
    <div id="Venus"></div>
    {(currentPath=='/letter1'||currentPath=='/letter2'||currentPath=='/letter3')&& <div id="Centralstar"></div>}
    <div id="Star1"></div>
    <div id="Star2"></div>
    <div id="Star3"></div>
    <div id="meteor1"></div>
    <div id="meteor2"></div>
    <div id="meteor3"></div>
    <div id="meteor456"></div>

  </div>
}

export default Background;