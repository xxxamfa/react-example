import React from 'react'

class HelloWorldClass extends React.Component {
  //   constructor() {
  //     super()
  // 若要把值代入state
  constructor(props) {
    super(props)
    this.state = {}
    console.log('類別型父傳子', props)
  }
  render() {
    //   若帶入值要解構賦值寫在這
    const { hello, world } = this.props
    return (
      <>
        <h1>
          {/* 類別型不需像func要帶入參數就可直接引用 */}
          {/* {this.props.hello},{this.props.world} */}
          {/* 解構後寫法 */}
          類別型父傳子,
          {hello},{world}
        </h1>
      </>
    )
  }
}

// 若要給傳入參數預設值放這 . 若父沒傳值給子就會用到
HelloWorldClass.defaultProps = {
  hello: '嗨嗨嗨',
  world: '嘿嘿嘿',
}
export default HelloWorldClass
