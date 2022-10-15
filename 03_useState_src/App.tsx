import React, { useState } from 'react'
// import logo from './logo.svg'
import './App.css'
import { Button } from '@douyinfe/semi-ui'

function App() {
  // Hooks
  /**
   * useState
   * 作用和类组件state相同，用法：
   * const [count, setCount] = useState(n)
   * n 可以是基本数据类型，对象，数组
   * count 值就是 n
   * setCount 接受一个参数替换上一个状态
   * setCount 接受一个函数，函数的第一个参数是上一个状态
   */

  const [count, setCount] = useState(0)

  function change() {
    // setCount(6)
    // OR
    setCount(prev => {
      // console.log(prev)
      return prev + 1
    })
  }

  return (
      <div className="App">
        <h3>{count}</h3>
        <Button onClick={change}>Test</Button>
      </div>
  )
}

export default App
