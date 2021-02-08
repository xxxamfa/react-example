import React, { useState } from 'react'

function CountFunc4() {
  const [total, setTotal] = useState(0)
  // 設成物件類型
  const [tObject, setTObject] = useState({ total: 0, test: false })

  return (
    <>
      <h1>{total}</h1>
      <button
        onClick={() => {
          // 這行寫N行都只算一個 
          setTotal(total + 1)
          setTotal(total + 1)
          setTotal(total + 1)
          //setTotal((prevTotal) => prevTotal + 1)
        }}
      >
        +1
      </button>
      <h1>{tObject.total}</h1>
      <button
        // 這寫法會導致其他值消失
        // onClick={() => {
        //   setTObject({
        //     total: tObject.total + 1
        //   })
        // }}
        // 用這寫法解決值消失 . 解釋多欄輸入為何所有值必填 . 此語法就是把之前的加上要改的
        onClick={() => {
          setTObject((prevState) => ({
            ...prevState,
            total: tObject.total + 1,
          }))
        }}
      >
        +1(totalObject)
      </button>
    </>
  )
}

export default CountFunc4
