// import React, { useState, createContext, useEffect, useRef } from "react";
// import { useRoutes, useNavigate } from "react-router-dom";
// import routes from "./routes";
// import MusicPlayer from "./pages/Mainpage/pages/MusicPlayer";
// import Background from './common/Background/index'
// import "./App.less";
// import axios from "axios";
// //异步加载组件
// // const FirstLoading = React.lazy(() => import('./pages/FirstLoading'));
// export const Loaded = createContext();
// export const MusicLoad = createContext();
// function App() {


//   const element = useRoutes(routes);
//   const [LoadedState, setLoadedState] = useState(false);
//   const [musicLoaded, setmusicLoaded] = useState(1);

//   //网络监测
//   const [onlineStatus, setOnlinStatus] = useState(true);
//   useEffect(() => {
//     const handleOfflineStatus = () => {
//       setOnlinStatus(false);
//     };

//     const handleOnlineStatus = () => {
//       setOnlinStatus(true);
//     };

//     window.addEventListener("offline", handleOfflineStatus);
//     window.addEventListener("online", handleOnlineStatus);

//     // 组件卸载时移除事件监听器
//     return () => {
//       window.removeEventListener("offline", handleOfflineStatus);
//       window.removeEventListener("online", handleOnlineStatus);
//     };
//   }, []);
//   //获取当前地址进行判断
//   const currentPath = window.location.pathname;

//   const navigate = useNavigate()
//   if (currentPath == '/main'&&LoadedState == false) {
//     setLoadedState(false)
//     navigate('/firstload')
//   } 
// axios
//   .get("https://be-dev.redrock.cqupt.edu.cn/site-statistics/sites", {
//     headers: { Authorization: "Bearer cLinyu" }, // 设置User-Agent
//   })
//   .then(function (response) {
//     // 处理响应
//     const res = JSON.parse(response);
//     const dataArray = res.data;
//     const foundObject = dataArray.find((obj) => obj.url === 'realurl');//realurl为真实网站url
//     if (foundObject) {
//       // 如果找到了匹配的对象，返回其 name 属性的值
//       setSiteHash(foundObject.hash)
//     }
//     //  else {
//     //   // 如果未找到匹配的对象，可以返回一个默认值或进行其他逻辑处理
//     //   return "Not found";
//     // }
//   })
//   .catch(function (error) {
//     // 处理错误
//   });
// }, [LoadedState]);

//   return (
//     <Loaded.Provider value={[LoadedState, setLoadedState]}>
//       {(currentPath=='/main'||currentPath=='/page1'||currentPath==`^/page2`||currentPath=='/letter1'||currentPath=='/letter2'||currentPath=='/letter3'||currentPath==`^/match`)&&<Background />}
//       <MusicLoad.Provider value={[musicLoaded, setmusicLoaded]}>
//         <MusicPlayer />
//         {element}
//         <div id="loadingPic">
//           <div id="loadingPic1"></div>
//           <div id="loadingPic2"></div>
//           <div id="loadingPic3"></div>
//           <div id="loadingPic4"></div>
//           <div id="loadingPic5"></div>
//           <div id="loadingPic6"></div>
//           <div id="loadingPic7"></div>
//           <div id="loadingPic8"></div>
//           <div id="loadingPic9"></div>
//           <div id="loadingPic10"></div>
//           <div id="loadingPic11"></div>
//           <div id="loadingPic12"></div>
//           <div id="loadingPic13"></div>
//           <div id="loadingPic14"></div>
//           <div id="loadingPic15"></div>
//           <div id="loadingPic16"></div>
//           <div id="loadingPic17"></div>
//         </div>
//       </MusicLoad.Provider >
//     </Loaded.Provider>
//   );
// }
// export default App;
import { useState, createContext, useEffect } from "react";
import { useRoutes, useNavigate } from "react-router-dom";
import axios from "axios";

import routes from "./routes";
import MusicPlayer from "./pages/Mainpage/pages/MusicPlayer";
import Background from "./common/Background/index";
import "./App.less";
import { json } from "react-router-dom";
//异步加载组件
// const FirstLoading = React.lazy(() => import('./pages/FirstLoading'));
export const Loaded = createContext();
export const MusicLoad = createContext();
export const SiteHash = createContext();
function App() {
  const element = useRoutes(routes);
  const [LoadedState, setLoadedState] = useState(0);
  const [musicLoaded, setmusicLoaded] = useState(1);
  const [siteHash,setSiteHash] = useState(null)

  //网络监测
  const [onlineStatus, setOnlinStatus] = useState(true);
  useEffect(() => {
    const handleOfflineStatus = () => {
      setOnlinStatus(false);
      navigate("/Error");
    };

    const handleOnlineStatus = () => {
      setOnlinStatus(true);
      navigate(-1);
    };

    window.addEventListener("offline", handleOfflineStatus);
    window.addEventListener("online", handleOnlineStatus);

    // 组件卸载时移除事件监听器
    return () => {
      window.removeEventListener("offline", handleOfflineStatus);
      window.removeEventListener("online", handleOnlineStatus);
    };
  }, []);
  //获取当前地址进行判断
  const currentPath = window.location.pathname;

  const navigate = useNavigate();
  useEffect(() => {
      if (currentPath == '/main'&&LoadedState == false) {
        setLoadedState(false)
        navigate('/firstload')
      } 
    axios
      .get("https://be-dev.redrock.cqupt.edu.cn/site-statistics/sites", {
        headers: { Authorization: "Bearer cLinyu" }, // 设置User-Agent
      })
      .then(function (response) {
        // 处理响应
        const res = JSON.parse(response);
        const dataArray = res.data;
        const foundObject = dataArray.find((obj) => obj.url === 'realurl');//realurl为真实网站url
        if (foundObject) {
          // 如果找到了匹配的对象，返回其 name 属性的值
          setSiteHash(foundObject.hash)
        }
        //  else {
        //   // 如果未找到匹配的对象，可以返回一个默认值或进行其他逻辑处理
        //   return "Not found";
        // }
      })
      .catch(function (error) {
        // 处理错误
      });
  }, [LoadedState]);
  return (
    <SiteHash.Provider value={[siteHash,setSiteHash]}>
    <Loaded.Provider value={[LoadedState, setLoadedState]}>
      {(currentPath == "/main" ||
        currentPath == "/page1" ||
        currentPath == `^/page2` ||
        currentPath == "/letter1" ||
        currentPath == "/letter2" ||
        currentPath == "/letter3" ||
        currentPath == `^/match`) && <Background />}
      <MusicLoad.Provider value={[musicLoaded, setmusicLoaded]}>
        <MusicPlayer />
        {element}
        <div id="loadingPic">
          <div id="loadingPic1"></div>
          <div id="loadingPic2"></div>
          <div id="loadingPic3"></div>
          <div id="loadingPic4"></div>
          <div id="loadingPic5"></div>
          <div id="loadingPic6"></div>
          <div id="loadingPic7"></div>
          <div id="loadingPic8"></div>
          <div id="loadingPic9"></div>
          <div id="loadingPic10"></div>
          <div id="loadingPic11"></div>
          <div id="loadingPic12"></div>
          <div id="loadingPic13"></div>
          <div id="loadingPic14"></div>
          <div id="loadingPic15"></div>
          <div id="loadingPic16"></div>
          <div id="loadingPic17"></div>
        </div>
      </MusicLoad.Provider>
    </Loaded.Provider>
    </SiteHash.Provider>
  );
}
export default App;
