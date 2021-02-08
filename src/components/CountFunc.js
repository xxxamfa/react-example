// 引用JSX語法 . 新版會自動引用可不寫但建議寫因手機板還是要加
// import React from 'react'
// 函式元件引用使用狀態的鉤子 . "react"為放在node_modules裡的模組 . {}為部分導入
// 這段可以合併上列寫成同一行
// import { useState } from 'react'
// 合併寫法 . { useState } : 為了不寫React.useState那麼長寫useState就好
//沒引入useState就不可用
import React, { useState } from 'react'

function CountFunc() {
  // 解構賦值 . total:狀態值 . setTotal:設定狀態用.自己取名 . useState(0):初始值為0. useState:會產生兩個值.一個是得到狀態一個是設定狀態.這是一個陣列 . 要改變total只能用setTotal . total必用小駝峰官方文件說的
  // 官方寫法:宣告一個新的狀態變數.名稱為total.這段是陣列的解構賦值.編譯後語法看筆記

  const [total, setTotal] = useState(0)

  // 這個h1是模仿html不是真正的h1 . onClickc後面接箭頭函式
  return (
    // 不只一個標籤就要用<></>包起來
    <>
      <h1
        onClick={() => {
          // setTotal: 類似class元件的setState. 但括弧裡的是值不是物件
          setTotal(total + 1)
        }}
      >
        {total}
      </h1>
      <button
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          setTotal(total - 1)
        }}
      >
        -1
      </button>
    </>
  )
}
export default CountFunc
