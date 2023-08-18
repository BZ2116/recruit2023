import { useNavigate } from 'react-router-dom'
import './index.less'

export default function End3() {
  const navigate = useNavigate()

  function handleRechoose() {
    navigate('/letter3')
  }

  return (
    <>
      <div id='end3'>
        <div id='rechoose' onClick={handleRechoose}></div>
      </div></>
  )
}
// 很遗憾，因为不可抗力因素，本次联盟失败。但请坚信你绝不是孤军作战，亿万星辰将与你同行，只要满怀希望，定能突破困境，迎来胜利的曙光。