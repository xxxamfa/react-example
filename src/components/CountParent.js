import React, { useState } from 'react'
import CountFunc2 from './CountFunc2'

function CountParent() {
  // 設定狀態用[] . 解構用{}
  const [resetTotal, setResetTotal] = useState(0)

  return (
    <>
      {/* 傳初始值0和狀態過去子元件 */}
      <CountFunc2 resetTotal={resetTotal} setResetTotal={setResetTotal} />
      {/* 按下回到10 */}
      <button
        onClick={() => {
          // 按下resetTotal回到10
          setResetTotal(10)
        }}
      >
        回到初始10
      </button>
      <button
        onClick={() => {
          // 按下resetTotal回到100
          setResetTotal(100)
        }}
      >
        回到初始100
      </button>
    </>
  )
}
export default CountParent
