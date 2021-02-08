function Child(props) {
  const innerData = '要給父元件的值'
  return (
    <>
      <h1>父元件傳來的資料 : {props.data}</h1>
      <button
        onClick={() => {
          props.setReceivechild(innerData)
        }}
      >
        點擊後傳資料給父元件
      </button>
    </>
  )
}
export default Child
