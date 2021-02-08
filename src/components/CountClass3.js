import React from 'react'

class CountClass3 extends React.Component {
  constructor() {
    super()
    // 類別行元件狀態是一個物件
    this.state = {
      total: 0,
      test: false,
    }
    console.log('constructor')
  }

  render() {
    console.log('render')
    return (
      <>
        <h1>{this.state.total}</h1>

        <button
          onClick={() => {
            // 這行寫N行都只算一個 
            this.setState({ total: this.state.total + 1 })
            //this.setState({ test: true })

            // 若變動多個狀態合併寫一行
            //this.setState({ total: this.state.total + 1, test: true })
          }}
        >
          +1
        </button>
      </>
    )
  }
}

export default CountClass3
