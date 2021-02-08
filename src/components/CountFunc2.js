import React from 'react'

function CountFunc2(props) {
  // 子元件不要有狀態容易有bug . 除非特殊狀況如子元件有使用者狀態輸入框或是跳出視窗型元件才會在子元件設狀態 . 這裡是解構{}不是狀態[]不要搞混
  const { resetTotal, setResetTotal } = props
  return (
    <>
      <h1>{resetTotal}</h1>
      <button
        onClick={() => {
          setResetTotal(resetTotal + 1)
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          setResetTotal(resetTotal - 1)
        }}
      >
        -1
      </button>
    </>
  )
}
export default CountFunc2
