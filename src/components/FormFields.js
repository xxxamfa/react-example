import { useState } from 'react'

function FormFields() {
  const [textfield, setTextfield] = useState('')
  const [textarea, setTextarea] = useState('')
  const [seletedOption, setSeletedOption] = useState('')
  const [gender, setGender] = useState('')
  // 多選盒 . { optionA: false, optionB: false }是物件
  const [like, setLike] = useState({ optionA: false, optionB: false })

  const [likeList, setLikeList] = useState([])

  return (
    <>
      <h3>文字輸入框</h3>
      <input
        type="text"
        value={textfield}
        onChange={(e) => {
          setTextfield(e.target.value)
        }}
      />
      <hr />
      <h3>文字區域</h3>
      {/* React中的文字區域是單個元素標記的 */}
      <textarea
        value={textarea}
        onChange={(e) => {
          setTextarea(e.target.value)
        }}
      />
      <hr />
      <h3>下拉選單</h3>
      <select
        // 預設值用這個決定 . 對應上面狀態目前是空字串.所以下方預設顯示 value="" 請選擇
        value={seletedOption}
        onChange={(e) => {
          setSeletedOption(e.target.value)
        }}
      >
        <option value="">請選擇</option>
        <option value="雞腿">雞腿</option>
        <option value="魯肉">魯肉</option>
        <option value="排骨">排骨</option>
        <option value="水果">水果</option>
      </select>
      <hr />
      <h3>單選盒</h3>
      <label>男</label>
      <input
        type="radio"
        value="男"
        // 用這個判斷是否被選中.而且是布林值
        checked={gender === '男'}
        onChange={(e) => {
          setGender(e.target.value)
        }}
      />
      <label>女</label>
      <input
        type="radio"
        value="女"
        checked={gender === '女'}
        onChange={(e) => {
          setGender(e.target.value)
        }}
      />
      <label>未定</label>
      <input
        type="radio"
        value="未定"
        checked={gender === '未定'}
        onChange={(e) => {
          setGender(e.target.value)
        }}
      />
      <hr />
      <h3>勾選盒(物件布林值)</h3>
      <label>雞腿</label>
      <input
        type="checkbox"
        value="optionA"
        onChange={(e) => {
          // e.target.value代表optionA
          const key = e.target.value
          setLike({
            ...like,
            // like[key]為布林值
            [key]: !like[key],
          })
        }}
        checked={like.optionA}
      />
      <label>排骨</label>
      <input
        type="checkbox"
        value="optionB"
        onChange={(e) => {
          const key = e.target.value
          setLike({
            ...like,
            [key]: !like[key],
          })
        }}
        // 判斷是否被選
        checked={like.optionB}
      />
      <hr />
      <h3>勾選盒(陣列值)</h3>
      <label>雞腿</label>
      <input
        type="checkbox"
        value="雞腿"
        onChange={(e) => {
          const value = e.target.value
          if (!likeList.includes(value))
            return setLikeList([...likeList, value])

          if (likeList.includes(value)) {
            const newLikeList = likeList.filter((v) => v !== value)
            setLikeList(newLikeList)
          }
        }}
        checked={likeList.includes('雞腿')}
      />
      <label>排骨</label>
      <input
        type="checkbox"
        value="排骨"
        onChange={(e) => {
          const value = e.target.value
          if (!likeList.includes(value))
            return setLikeList([...likeList, value])

          if (likeList.includes(value)) {
            const newLikeList = likeList.filter((v) => v !== value)
            setLikeList(newLikeList)
          }
        }}
        checked={likeList.includes('排骨')}
      />
    </>
  )
}

export default FormFields
