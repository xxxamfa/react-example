import { useState } from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

function Parent2() {
  // 接收Child1資料用
  const [receivechild, setReceivechild] = useState('')

  return (
    <>
      {/* 將函數傳給Child1來接收Child1的資料 */}
      <Child1 setReceivechild={setReceivechild} />
      {/* 將接收的child1資料傳給Child2 */}
      <Child2 data={receivechild} />
    </>
  )
}

export default Parent2
