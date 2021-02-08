import React from 'react'

// 統一按鈕外觀
function MyLink(props) {
  // target = '_blank':開新視窗 . 連接網址和按鈕文字由傳入值設定
  return (
    <>
      <a href={props.to} target="_blank" style={{ color: 'red' }}>
        {props.text}
      </a>
    </>
  )
}

export default MyLink
