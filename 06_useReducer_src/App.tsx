// import logo from './logo.svg'
import './App.css'
import { useReducer } from 'react'
import { Button } from '@douyinfe/semi-ui'

interface State {
  age: number
}

function reducer(state: State, action: any) {
  console.log(state, action)
  switch (action.type) {
    case 'add':
      return {
        age: state.age + 1
      }
    case 'sub':
      return {
        age: state.age - 1
      }
    default:
      return {
        age: state.age
      }
  }
}

function App() {
  /**
   * useReducer是useState的优化
   * 如果定义的数据是多层对象，推荐使用useReducer
   * useReducer接受两个参数
   * 第一个是函数，第二个是初始化的数据
   * 返回一个数组
   * 第一项是状态自身
   * 第二项是一个函数，可以传递任意数据类型，用来触发reducer函数，
   */
  const [state, dispatch] = useReducer(reducer, { age: 42 })

  return (
      <div className='App'>
        <h1>{state.age}</h1>
        <Button onClick={() => {
          dispatch({ type: 'add' })
        }}>Reducer+</Button>
        <Button onClick={() => {
          dispatch({ type: 'sub' })
        }}>Reducer-</Button>
      </div>
  )
}

export default App
