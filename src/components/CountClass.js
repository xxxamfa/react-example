// 必引用 . 因用到Component
import React from 'react'

// class為react元件所以要繼承自React.Component
class CountClass extends React.Component {
  // 建構式
  constructor() {
    // 呼叫React.Component的建構式
    super()
    // 寫狀態 . this.state : React.Component定義的
    this.state = {
      total: 0,
    }
    // function拉出來寫需要手動綁定 . 綁定法一 : 不要寫這邊太麻煩了
    this.handleClick = this.handleClick.bind(this)
  }

  // 把function拉出來寫需要手動綁定 . 這行搭配綁定法一
  // handleClick() {
  //   this.setState({ total: this.state.total + 1 })
  // }
  // 綁定法二 : 用箭頭函式會自己找周邊去綁定this
  handleClick = () => {
    // setState : React.Component定義的
    // setState: 類似func元件的setXXXX. 但括弧裡的是物件不是值
    this.setState(
      { total: this.state.total + 1 },
      // 解決異步問題 . 不建議學這個 . 只有class能用
      () => {
        console.log(this.state.total)
      }
    )
  }
  // subClick = () => {
  //   this.setState({ total: this.state.total - 1 })
  // }
  // 解決異步問題用這個 . func和class都可用
  subClick = () => {
    const newTotal = this.state.total - 1
    this.setState({ total: newTotal })
    console.log(newTotal)
  }

  render() {
    //   類別行元件設定狀態的名固定是setState.函式型元件設定狀態的名是自己取
    // setState : 繼承React.Component而來.()裡面只能放物件
    return (
      // 函式寫裡面
      // <h1
      //   onClick={() => {
      //     this.setState({ total: this.state.total + 1 })
      //   }}
      // >
      //   {this.state.total}
      // </h1>

      // 把函式拉出來寫
      <>
        <h1 onClick={this.handleClick}>{this.state.total}</h1>
        <button onClick={this.handleClick}>+1</button>
        <button onClick={this.subClick}>-1</button>
      </>
    )
  }
}

export default CountClass
