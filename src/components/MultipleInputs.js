import { useEffect, useState } from 'react'

function MultipleInputs(props) {
  const [inputs, setInputs] = useState({
    // 都先定義成字串 . 若要運算再另外轉數字運算
    name: '',
    email: '',
    username: '',
    password: '',
    birth: '',
    price: '',
  })

  // 精華
  const onChangeForField = (fieldName) => (event) => {
    setInputs((state) => ({ ...state, [fieldName]: event.target.value }))
  }

  // 觀察值 . 沒其他功能
  //   useEffect(() => {
  //     console.log(inputs)
  //   }, [inputs])

  return (
    <>
      <input
        type="text"
        value={inputs.name}
        // 每一個輸入框一定要加名稱name判斷哪個欄位，和定義的欄位狀態值最好一樣 . 多欄位寫法專用
        name="name"
        onChange={onChangeForField('name')}
      />
      <input
        type="text"
        value={inputs.email}
        name="email"
        onChange={onChangeForField('email')}
      />
      <input
        type="text"
        value={inputs.username}
        name="username"
        onChange={onChangeForField('username')}
      />
      <input
        type="password"
        value={inputs.password}
        name="password"
        onChange={onChangeForField('password')}
      />
      <input
        type="date"
        value={inputs.birth}
        name="birth"
        onChange={onChangeForField('birth')}
      />
      <input
        type="range"
        value={inputs.price}
        name="price"
        onChange={onChangeForField('price')}
      />
    </>
  )
}

export default MultipleInputs
