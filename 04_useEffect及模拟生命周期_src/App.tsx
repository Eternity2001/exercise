import React, { useEffect, useState } from 'react'
// import logo from './logo.svg'
import './App.css'
import { Button } from '@douyinfe/semi-ui'
import { Child } from './Child'

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
  // useEffect
  useEffect(() => {
    console.log('组件加载执行，state变化执行')
  })

  // 空数组参数
  // 等价于类组件componentDidMount
  useEffect(() => {
    console.log('只执行一次')
  }, [])

  /**
   * useEffect 函数签名
   * 第一个是函数
   * 函数在组件加载时执行一次（严格模式下会执行两次）
   * 每次state值发生变化时执行一次
   *
   * 第二个是数组
   * 不传第二个参数时，即只有函数时，state变化，函数就会执行
   * 传入空数组时，只在在组件加载时执行
   * 数组元素可以写state，作用是数组中的state变化时，执行函数，类似于vue的watch
   */

  // count变化，执行函数
  // 等价于componentDidUpdate
  useEffect(() => {
    console.log('count变化', count)
  }, [count])

  //  等价于componentWillUnMount（组件销毁）
  useEffect(() => {
    return () => {
      console.log('组件销毁')
    }
  })

  function change() {
    // setCount(6)
    // OR
    setCount(prev => {
      // console.log(prev)
      return prev + 1
    })
  }

  // 销毁Child组件
  const [show, setShow] = useState(true)
  const delChild = () => {
    setShow(!show)
  }

  return (
      <div className="App">
        <h3>{count}</h3>
        <Button onClick={change}>Test</Button>
        {
          show ? <Child /> : null
        }
        <Button onClick={delChild}>销毁Child</Button>
      </div>
  )
}

export default App
