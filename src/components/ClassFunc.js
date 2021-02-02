// 必引用 . 因用到Component
import React from 'react'

// class為react元件所以要繼承自React.Component
class ClassFunc extends React.Component {
  // 建構式
  constructor() {
    // 呼叫React.Component的建構式
    super()
    // 寫狀態
    this.state = {
      total: 0,
    }
  }

  render() {
    //   類別行元件設定狀態的名固定是setState.函式型元件設定狀態的名是自己取
    // setState : 繼承React.Component而來.()裡面只能放物件
    return (
      <h1
        onClick={() => {
          this.setState({ total: this.state.total + 1 })
        }}
      >
        {this.state.total}
      </h1>
    )
  }
}

export default ClassFunc
