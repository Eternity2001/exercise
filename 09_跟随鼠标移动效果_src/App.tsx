import AppStyle from './App.module.scss'
import pic from './static/images/img0.jpg'
import { MutableRefObject, useEffect, useRef } from 'react'

function App() {
  const img: MutableRefObject<any> = useRef()
  useEffect(() => {
    window.addEventListener('load', () => {
      document.getElementsByTagName('html')[0].addEventListener('mousemove', e => {
        img.current.style.top = e.clientY + 'px'
        img.current.style.left = e.clientX + 'px'
      })
    })
  })
  return (
      <div className={AppStyle.app}>
        <img
            ref={img}
            className={AppStyle.img}
            src={pic}
            alt=""
        />
      </div>
  )
}

export default App
