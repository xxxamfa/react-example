// 觀念


// 引用函式型元件範例 . from後面為路徑 . CountFunc設為同檔名
import CountFunc from './components/CountFunc'
// 引用類別型元件範例
import CountClass from './components/CountClass'
import SelectBox from './components/SelectBox'
import SingleMapDetail from './components/SingleMapDetail'
import HelloWorld from './components/HelloWorld'
import HelloWorldClass from './components/HelloWorldClass'
import HelloWorldArray from './components/HelloWorldArray'
import MyLink from './components/MyLink'
import MyLinkpro from './components/MyLinkpro'
import Parent from './components/Parent'
import Parent2 from './components/Parent2'
import CountParent from './components/CountParent'
import CountClass2 from './components/CountClass2'
import CountFunc3 from './components/CountFunc3'
import { useState } from 'react'

function App() {
  // componentWillUnmount狀態設定-類別用
  const [show, setShow] = useState(true)
  // componentWillUnmount狀態設定-函式用
  const [show2, setShow2] = useState(true)

  return (
    <>
      {/* 引用元件 : 自己結尾 */}
      <h2>引用函式型元件</h2>
      <CountFunc />
      <h2>引用類別型元件 . 含異步解決</h2>
      <CountClass />
      <h2>下拉選單</h2>
      <SelectBox />
      <h2>函式型-內建單向資料流父傳子</h2>
      {/* 藍色變數為自行設定要傳的值 */}
      <HelloWorld hello="嗨" world="這世界" />
      <h2>函式型-內建單向資料流父傳子-若父未給值用預設值+父傳子函式</h2>
      <HelloWorld clickMethod={() => alert('父傳子函式')} />
      <h2>類別型-內建單向資料流父傳子</h2>
      <HelloWorldClass hello="嗨" world="這世界" />
      <h2>類別型-內建單向資料流父傳子-若父未給值用預設值</h2>
      <HelloWorldClass />
      <h2>
        函式型-內建單向資料流父傳子+傳陣列+map+style使用+花括號內的陣列會變字串所以陣列裡面可以放元素
      </h2>
      <HelloWorldArray names={['Cindy', 'Jimmy', 'Amy']} />
      <h2>連結按鈕+統一按鈕元件+可重複使用的東西都可以做成統一元件</h2>
      <MyLink to="https://tw.yahoo.com/" text="google" />
      <h2>
        連結按鈕+統一按鈕元件+可重複使用的東西都可以做成統一元件-進階寫法props.children
      </h2>
      <MyLinkpro href="https://tw.yahoo.com/">google</MyLinkpro>
      <h2>父元件傳給子元件+子元件傳給父元件</h2>
      <Parent />
      <h2>子女元件互傳資料-需透過父元件</h2>
      <Parent2 />
      <h2>設定初始值方法-不要把狀態放在子元件會有bug</h2>
      <CountParent />
      <h2>生面週期介紹-類別-觀察執行順序+JQ示範+掛載+更新+卸載+按鈕狀態切換</h2>
      {/* show若為true執行CountClass2 */}
      {show && <CountClass2 />}
      <h2 />
      {/* 按下切換setShow狀態 */}
      <button
        onClick={() => {
          setShow(!show)
        }}
      >
        {/* show=truw顯示消失 . 為false顯示出現 */}
        {show ? '消失吧!' : '出現吧!'}
      </button>
      <h2>
        生面週期介紹-函式型-觀察執行順序+JQ示範+掛載+更新+卸載+按鈕狀態切換
      </h2>
      {/* show2若為true執行CountFunc3 */}
      {show2 && <CountFunc3 />}
      <h2 />
      {/* 按下切換setShow2狀態 */}
      <button
        onClick={() => {
          setShow2(!show2)
        }}
      >
        {/* show2=true顯示消失 . 為false顯示出現 */}
        {show2 ? '消失吧!' : '出現吧!'}
      </button>
      {/* <h2>google map</h2>
      <SingleMapDetail /> */}
    </>
  )
}
export default App
