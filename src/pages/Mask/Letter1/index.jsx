
import './index.less'
import { useNavigate } from 'react-router-dom'

export default function Letter1() {
  // const [LetterStatus, setLetterStatus] = useState(0)
  // const [teamStatus, setteamStatus] = useState('')
  const navigate = useNavigate()

  function handleLetter() {
    navigate('/letter2')
  }

  return (
    <><div id='letterMask'>
    </div>
      <div id='Letter'>
        <p>你收到了一封紧急来信</p>
        <p> 打开看看吧</p>
        <div id='letter1' onClick={handleLetter}>
        </div></div>
    </>
  )
}
// `/page2?team=${team}`