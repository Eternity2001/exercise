// import logo from './logo.svg'
import './App.css'
import React from 'react'
import { Child } from './Child'

export const UserContext = React.createContext('')
export const TestContext = React.createContext('Test')

function App() {
  /**
   * useContext
   * 使用场景：
   * 有一个num数据需要从根组件传递到子组件
   * props传递的过程中，只有目标组件使用数据num
   * 会不可避免的经过不用num的子组件，如果嵌套层数太多
   * 对开发而言是不好的
   *
   * useContext就是解决该问题的
   */

  // useContext

  return (
      <div className="App">
        {/* 这种写法可以使用，但是如果存在多个Context，代码可读性会变差
         所以建议使用useContext */}
        <UserContext.Provider value={'Eternity'}>
          <Child />
        </UserContext.Provider>
      </div>
  )
}

export default App
