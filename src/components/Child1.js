function Child1(props) {
  const innerData = 'child1要給Child2元件的值'
  return (
    <>
      <button
        onClick={() => {
          props.setReceivechild(innerData)
        }}
      >
        點擊後傳資料給Child2
      </button>
    </>
  )
}
export default Child1
