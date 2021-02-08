import React from 'react'
function HelloWorldArray(props) {
  const { names } = props
  console.log('函式型父傳子', props)
  return (
    <>
      {/* 由此觀察{}內的陣列都會被轉成字串 . 效果如同{[1, 2, 3].join('')}*/}
      {names}
      {[1, 2, 3]}
      {/* 陣列裡面可以放react的元素 */}
      {[<button>按我</button>, <h2>123</h2>]}
      <ul>
        {/* 笨寫法 */}
        {/* <li>{names[0]},你好</li>
      <li>{names[1]},你好</li>
      <li>{names[2]},你好</li> */}

        {/* 聰明寫法 */}
        {/* 用map若沒加key會有警告 */}
        {/* map的第二個傳入參數為索引 . 可用索引當key */}
        {/* map會直接產生一個新陣列 */}
        {/* 不建議用style用classname */}
        {/* ??待解決 key沒效 */}
        {names.map((name, index) => {
          return (
            <li key={index} style={{ color: 'red' }}>
              {name},你好
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default HelloWorldArray
