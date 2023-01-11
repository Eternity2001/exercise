// @ts-ignore
import AppStyle from './App.module.scss'
import { useCallback, useState } from 'react'
import { Button } from '@douyinfe/semi-ui'

function App() {
  let [count, setCount] = useState(0)
  const a = useCallback(() => {
    console.log(666)
  }, [])

  return (
      <div className={AppStyle.app}>
        <h2>{count}</h2>
        <Button theme={'light'} onClick={() => setCount(++count)}>Add</Button>
      </div>
  )
}

export default App
