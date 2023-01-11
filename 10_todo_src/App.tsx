import AppStyle from './App.module.scss'
import Todo from './components/todo'
import { useState } from 'react'
import { Empty } from '@douyinfe/semi-ui'
import {
  IllustrationConstruction,
  IllustrationConstructionDark
} from '@douyinfe/semi-illustrations'

function App() {
  const [message, setMessage] = useState([
    {
      id: '1',
      msg: '学习',
      done: true
    },
    {
      id: '2',
      msg: '睡觉',
      done: true
    }
  ])
  const addMsg = (e: { id: string, msg: string, done: boolean }) => {
    setMessage([e, ...message])
  }
  return (
      <div className={AppStyle.app}>
        <div className={AppStyle.title}>
          <h1>TodoList</h1>
        </div>
        <Todo.Header {...{addMsg}}></Todo.Header>
        {
          message.length === 0 ? <Empty
              image={<IllustrationConstruction style={{width: 150, height: 150}} />}
              darkModeImage={<IllustrationConstructionDark style={{width: 150, height: 150}} />}
              title={'暂无待办项...'}
          /> : <Todo.Main {...{message}}></Todo.Main>
        }
        <Todo.Footer></Todo.Footer>
      </div>
  )
}

export default App
