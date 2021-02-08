import React from 'react'

class CountClass2 extends React.Component {
  constructor() {
    super()
    this.state = {
      total: 0,
    }
    this.handleClick = this.handleClick.bind(this)

    // 顯示constructor . 執行順序1
    console.log('constructor')
  }

  // 顯示componentDidMount . 執行順序3 . JQ只能寫在這
  componentDidMount() {
    console.log('componentDidMount')
    document.getElementById('clickme').addEventListener('click', function () {
      alert('你按到我了')
    })
  }
  // 顯示componentDidMount . 執行順序 : 執行卸載才會執行.在app.js下 . 與componentDidMount成對做移除事件
  componentWillUnmount() {
    console.log('componentWillUnmount')
    document
      .getElementById('clickme')
      .removeEventListener('click', function () {
        alert('你按到我了')
      })
  }

  // 顯示componentDidMount . 可解決之前說的setXXXX異步問題
  componentDidUpdate() {
    console.log('componentDidUpdate')
    console.log('目前的狀態值是 :', this.state.total)
  }

  handleClick = () => {
    this.setState({ total: this.state.total + 1 }, () => {
      console.log(this.state.total)
    })
  }

  subClick = () => {
    const newTotal = this.state.total - 1
    this.setState({ total: newTotal })
    console.log(newTotal)
  }

  render() {
    // 顯示render . 執行順序2
    console.log('render')

    return (
      <>
        <button id="clickme">使用JQ</button>
        <h1 onClick={this.handleClick}>{this.state.total}</h1>
        <button onClick={this.handleClick}>+1</button>
        <button onClick={this.subClick}>-1</button>
      </>
    )
  }
}

export default CountClass2
