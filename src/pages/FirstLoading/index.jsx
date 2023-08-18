
import { useRef, useEffect, useState, useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { Loaded } from '../../App'
import './index.less'
import axios from 'axios';
export default function Bar() {
  const elementRef = useRef(null);
  const [count, setcount] = useState(0);
  const loaderRef = useRef(null);
  const [loaderWidth, setLoaderWidth] = useState(0);
  const [LoadedState, setLoadedState] = useContext(Loaded)
  // const [siteHash,setSiteHash] = useContext(SiteHash)

  useEffect(() => {
    if (elementRef.current) {
      const observer = new ResizeObserver(entries => {
        for (let entry of entries) {
          const width = entry.contentRect.width;
          setcount(width)
        }
      });
      observer.observe(elementRef.current);
    }
    if (loaderRef.current) {
      const width = loaderRef.current.offsetWidth;
      setLoaderWidth(width);
    }
  }, []);
  useEffect(()=>{
    setTimeout(() => {
      setLoadedState(1)
      axios
      .get("https://be-dev.redrock.cqupt.edu.cn/site-statistics/sites/"+`${siteHash}`, {
        headers: { "User-Agent": navigator.userAgent }, // 设置User-Agent
      })
      .then(function (response) {
        // 处理响应
        console.log(JSON.parse(response));
      })
      .catch(function (error) {
        // 处理错误
      });
    }, 5000);
  },[])

  const [progress, setProgress] = useState(0);
  const length = useRef(0)
  const navigate = useNavigate()

useEffect(() => {
  let timer = setInterval(() => {
    if (length.current >= 50) {
      length.current = 50
      setProgress(length.current)
      clearInterval(timer)
    } else {
      length.current+1;
      setProgress(length.current)
    }
  }, 100);
  window.addEventListener("load",() => {
    clearInterval(timer)
    let timer2= setInterval(() => {
    if(length.current >= 100){
      length.current = 100
      setProgress(length.current)
      setLoadedState(true)
      clearInterval(timer2)
      setTimeout(() => {
        navigate('/main') 
      },2000)
    }else{
      length.current+=2.5;
      setProgress(length.current)
    }  }, 10);
})
}, [])


  /***************************** 方案一 ****************************************/
  // const elementRef = useRef(null);
  // const [count, setcount] = useState(0);
  // const loaderRef = useRef(null);
  // const [loaderWidth, setLoaderWidth] = useState(0);
  // const [LoadedState, setLoadedState] = useContext(Loaded)

  // useEffect(() => {

  //   if (elementRef.current) {
  //     const observer = new ResizeObserver(entries => {
  //       for (let entry of entries) {
  //         const width = entry.contentRect.width;
  //         setcount(width)
  //       }
  //     });
  //     observer.observe(elementRef.current);
  //   }
  //   if (loaderRef.current) {
  //     const width = loaderRef.current.offsetWidth;
  //     setLoaderWidth(width);
  //   }


  // }, []);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoadedState(1)
  //   }, 5000);
  // }, [])


  return (
    <div id='FlBack0'>
      <div id='FLBack'></div>
      <div id='FLBack2'></div>
      <div id='Stone'></div>
      <div id='Stone1'></div>
      <div id="Star11"></div>
      <div id="Star12"></div>
      <div id="Star13"></div>
      <div id="Star14"></div>
      <div id='firstLoading'>
        <div id='SpaceShip' className={`${LoadedState==true?"SpaceShipMove":''}`}><div id='spaceShipbody'></div><div id="tail"></div></div>
        <div id="num">{parseInt(progress)}%</div>
      </div>
    </div>
  )
}
