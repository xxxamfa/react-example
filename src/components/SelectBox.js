import React, { useState } from 'react'

function SelectBox() {
  // '' : 預設值設空字串
  const [text, setText] = useState('')

  //   // e : event.表單元素本身會觸發的事件.可以用console.log看event內容
  //   const handleChange = (e) => {
  //     //   e.target.value : 要設定的值
  //     // 設定狀態
  //     setText(e.target.value)
  //     // 讀出狀態
  //     console.log(text)
  //   }

  //   異步解決辦法
  const handleChange = (e) => {
    // 先計算最後的更新值，建立一個新的值的變數(or常數)
    const newText = e.target.value
    // **後執行(非同步)** 給react設定狀態用(呈現畫面用)
    //   setXXX後面要做送資料到資料庫等事情要注意因setXXX執行較慢.以免資料錯誤
    setText(newText)
    // **先執行** 資料庫用的資料(真正)
    console.log(newText)
  }

  return (
    <>
      <select onChange={handleChange} value={text}>
        <option value="JavaScript" key={1}>
          JavaScript
        </option>
        <option value="Angular2" key={2}>
          Angular2
        </option>
        <option value="React" key={3}>
          React
        </option>
      </select>
      <h1>{text}</h1>
    </>
  )
}
export default SelectBox
