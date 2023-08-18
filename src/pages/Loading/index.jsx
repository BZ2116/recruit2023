import { useEffect } from 'react'
import './index.less'

export default function Loading() {
  useEffect(() => { console.log(111); }, [])

  return <>

    <div id='loadingBack'>

      <div id='spaceShip'><div id='shipBody'></div><div id='shiptail'></div><div id='loadingMeteors'></div></div>
      
      <div className="spinner">
        <span>加</span>
        <span>载</span>
        <span>中</span>
      </div>
    </div>


  </>


}
//     <div className="loader0">
//       <div className="loader1">
//   <div></div>   
//   <div></div>    
//   <div></div>    
//   <div></div>    
//   <div></div>    
//   <div></div>    
//   <div></div>    
//   <div></div>    
//   <div></div>    
//   <div></div>    
// </div>

//     </div>
// )
// }    

{/* <span>L</span>
  <span>O</span>
  <span>A</span>
<span>D</span>
  <span>I</span>
  <span>N</span>
  <span>G</span> */}



// <div>
// <div data-js="astro" className="astronaut">
//   <div className="head"></div>
//   <div className="arm arm-left"></div>
//   <div className="arm arm-right"></div>
//   <div className="body">
//     <div className="panel"></div>
//   </div>
//   <div className="leg leg-left"></div>
//   <div className="leg leg-right"></div>
//   <div className="schoolbag"></div>

// </div><div>加载中</div></div>





//     <div className="loader">
//   <div className="blackhole">
//     <div className="blackhole-circle"></div>
//     <div className="blackhole-disc"></div>
//   </div>

//   <div className="curve">
//     <svg viewBox="0 0 500 500">
//       <path id="loading" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"></path>
//       <text width="500">
//         <textPath xlinkHref="#loading">
//           loading...
//         </textPath>
//       </text>
//     </svg>
//   </div>
// </div>



// {/* <div className="loader0">
//   <span></span>
// </div> */}
