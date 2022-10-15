import React from 'react'
// import logo from './logo.svg'
import './App.css'
import { Father } from './Views/Father'
import { Foot } from './Views/Head'

function App() {
  return (
      <div className="App">
        <Father
            header={<Foot />}
            footer={<h1>Footer</h1>}
        >
          默认插槽
        </Father>
      </div>
  )
}

export default App
