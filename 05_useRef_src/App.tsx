// import logo from './logo.svg'
import './App.css'
import { Child } from './Child'
import { MutableRefObject, useEffect, useRef } from 'react'

function App() {
  /**
   * useRef
   * 获取dom元素，组件，与类组件的createRef一样
   * 注意：
   * ref可以直接获取原生dom
   * 获取组件时，需要在组件内部做一些处理，细节在Child组件中查看
   */
  const h1Ref: MutableRefObject<any> = useRef()
  const childRef: MutableRefObject<any> = useRef()

  useEffect(() => {
    console.log(h1Ref)
    console.log(childRef)
  })
  return (
      <div className="App">
        <h1 ref={h1Ref}>我是h1</h1>
        <Child ref={childRef} />
      </div>
  )
}

export default App
