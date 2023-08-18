import { useNavigate } from 'react-router-dom'
import './index.less'

export default function Letter2() {
  const navigate = useNavigate()
  function handleClick1() {
    navigate('/letter3')
  }
  return (
    <>
      <div id='letterMask'>
      </div>
      <div id='mailUp'></div>
      <div id='mailDown'></div>
      {/* <div id='screen'></div> */}
      <div id='screen'>
        {/* <div id='letterText'> */}
        <>
          <div id='letterText1'>
            <h1>紧急来信</h1>
            <h4></h4>
            <p id='hello'> 你好！</p>
            <p> 帝国硝烟弥漫，命运悬而不决，星际中的纷争愈演愈烈.....如今我方地处联盟辖区的边缘地带，诚邀您与我方星系「携手」，共同书写这一段雄伟壮观的合作篇章。我们将共同制定战略，共享胜利的荣耀，并肩承担战争的艰辛。让我们「团结一致」，共同迎来胜利的曙光吧！</p>

            <div id='next' onClick={handleClick1}><span></span></div>
          </div>

        </>
      </div></>
  )
}
