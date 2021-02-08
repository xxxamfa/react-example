import { useState } from 'react'

function MoneyEx() {
  // 使用者輸入金額 . 因有小數點問題金額一般用字串處理
  const [money, setMoney] = useState('')
  // 顯示轉換結果 . 統一用字串
  const [exMoney, setExMoney] = useState('')

  return (
    <>
      {/* input為表單元素 . 跟一般DOM元素不太一樣 . 分為可控與不可控 . 不可控為脫離react控制最好別用如上傳檔案和預覽圖片*/}
      {/* 若要滿足可控有兩個條件 : 1.對應到值 value={money} . 2.對應到狀態 onChange=
      {(e) => {setMoney(e.target.value)}} 若不滿足就不能動*/}
      <input
        type="text"
        value={money}
        onChange={(e) => {
          setMoney(e.target.value)
        }}
      />
      <button
        onClick={() => {
          // toFixed回傳字串.(2)顯示小數點後兩位 . 加號會把字串轉數字才能運算
          setExMoney((+money / 28.53).toFixed(2))
        }}
      >
        新台幣轉美金
      </button>
      <button
        onClick={() => {
          setExMoney((+money * 28.53).toFixed(0))
        }}
      >
        {' '}
        美金轉新台幣
      </button>
      <h3>轉換過的金額是：{exMoney}</h3>
    </>
  )
}

export default MoneyEx
