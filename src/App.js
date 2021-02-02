// 引用函式型元件範例 . from後面為路徑 . CountFunc設為同檔名
import CountFunc from './components/CountFunc'
// 引用類別型元件範例
import ClassFunc from './components/ClassFunc'

function App() {
  return (
    <>
      {/* 引用元件 : 自己結尾 */}
      <h2>引用函式型元件</h2>
      <CountFunc />
      <h2>引用類別型元件</h2>
      <ClassFunc />
    </>
  )
}
export default App
