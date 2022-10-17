import logo from './static/images/img0.jpg'
import { Index } from './BigImg'
import AppStyle from './App.module.scss'

function App() {
  return (
      <div className={AppStyle.app}>
        <Index img={
          <img src={logo} alt={''} />
        } />
      </div>
  )
}

export default App
