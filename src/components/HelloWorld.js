// props : 為父元件傳給子元件的值 . 利用函式傳入參數
function HelloWorld(props) {
  // 可觀察props為一個物件有兩個屬性
  // 可以先做解構賦值來省略打props.XXX
  const { hello, world, clickMethod } = props
  console.log('函式型父傳子', props)
  return (
    <h1 onClick={clickMethod}>
      {/* 未解構寫法 */}
      {/* {props.hello},{props.world} */}
      {/* 解構後寫法 */}
      函式型父傳子
      {hello},{world}
    </h1>
  )
}

// 若要給傳入參數預設值 . 若父沒傳值給子就會用到
HelloWorld.defaultProps = {
  hello: '嗨嗨嗨',
  world: '嘿嘿嘿',
}

export default HelloWorld
