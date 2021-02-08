import { useState } from 'react'
import Child from './Child'

function Parent() {
  const innerData = '父元件要傳給子元件的內容'
  // 注意是[]不是{}
  const [receivechild, setReceivechild] = useState('')

  return (
    <>
      {/* data={innerData} : 父元件傳資料給子元件 . setReceive={setReceive} : 父元件透過丟狀態給子元件來接收子元件資料 */}
      <Child data={innerData} setReceivechild={setReceivechild} />
      {/* 收到的子元件資料 */}
      <h1>接收子元件資料 : {receivechild}</h1>
    </>
  )
}

export default Parent
