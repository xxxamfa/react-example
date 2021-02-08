import React, { useState, useEffect } from 'react'

function CountFunc3() {
  const [total, setTotal] = useState(0)
  // 旗標狀態，代表使用者已經開始在更新狀態資料了
  // 增加此狀態解決一componentDidMount就執行componentDidUpdate問題
  const [isUserStartToClick, setIsUserStartToClick] = useState(false)

  // 模擬出componentDidMount
  useEffect(() => {
    console.log('component did mount')
  }, [])

  // 模擬出componentDidUpdate
  // 但也有componentDidMount的執行過程
  // [total] : 必須要有相依性對應.[total, setTotal]對應這個
  // 意即要針對哪個狀態或傳入props作更新才呼叫
  // useEffect(() => {
  //   console.log('component did update')
  //   console.log(total)
  // }, [total])
  // 解決一componentDidMount就執行componentDidUpdate問題
  useEffect(() => {
    if (isUserStartToClick) {
      console.log('component did update')
      console.log(total)
    }
  }, [total, isUserStartToClick])

  // 用return () => {}模擬出componentWillUnmount .
  useEffect(() => {
    return () => {
      console.log('component will unmount')
    }
  }, [])

  return (
    <>
      <h1>{total}</h1>
      <button
        onClick={() => {
          setIsUserStartToClick(true)

          setTotal(total + 1)
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          setIsUserStartToClick(true)

          setTotal(total - 1)
        }}
      >
        -1
      </button>
    </>
  )
}

export default CountFunc3
