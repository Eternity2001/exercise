import AppStyle from './App.module.scss'
import Child from './Child'

function App() {
  return (
      <div className={AppStyle.app}>
        <Child Header={<h1>Header</h1>}/>
        <Child/>
      </div>
  )
}

export default App
