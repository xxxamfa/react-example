// 引用JSX語法 . 新版會自動引用可不寫但建議寫因手機板還是要加
import React from "react";
// 函式元件引用使用狀態的鉤子 . "react"為放在node_modules裡的模組 . {}為部分導入
import { useState } from "react";

function App() {
  // 解構賦值 . total:獲得狀態用 . setTotal:設定狀態用 . useState(0):初始值為0. useState:會產生兩個值.一個是得到狀態一個是設定狀態.這是一個陣列 . 要改變total只能用setTotal . total必用小駝峰官方文件說的
  // 官方寫法:宣告一個新的狀態變數.名稱為total.這段式式陣列
  const [total, setTotal] = useState(0)

  // 這個h1是模仿html不是真正的h1 . onClickc後面接箭頭函式
  return (
    <h1
      onClick={() => {
        setTotal(total + 1)
      }}
    >
      {total}
    </h1>
  )
}

export default App;
