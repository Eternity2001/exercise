import styles from './Index.module.scss'
import { MutableRefObject, MouseEvent, useRef, useState, useEffect } from 'react'

interface Props {
  img: JSX.Element
}

export const Index = (props: Props): JSX.Element => {
  const [xy, setXy] = useState({
    x: 0, y: 0
  })
  const [m, setM] = useState({
    x: 0, y: 0
  })
  const [cli, setCli] = useState({
    x: 0, y: 0
  })
  const [lay, setLay] = useState({
    x: 0, y: 0
  })
  const [movement, setMovement] = useState({
    x: 0, y: 0
  })
  const [page, setPage] = useState({
    x: 0, y: 0
  })
  const [screen, setScreen] = useState({
    x: 0, y: 0
  })
  // 图片
  const ImgRef: MutableRefObject<any> = useRef()
  // 遮罩
  const mask: MutableRefObject<any> = useRef()
  const mouseE = () => {
    console.log('进入')
    mask.current.style.display = 'block'
  }
  const mouseL = () => {
    console.log('离开')
    mask.current.style.display = 'none'
  }
  const mouseM = (e: MouseEvent<HTMLDivElement>) => {
    setXy({
      x: e.clientX,
      y: e.clientY
    })
    setM({
      x: mask.current.offsetLeft,
      y: mask.current.offsetTop
    })
    console.log(mask.current.offsetTop)
    mask.current.style.top = e.clientY + 'px'
    mask.current.style.left = e.clientX + 'px'
  }
  useEffect(() => {
    window.addEventListener('load', (e) => {
      const body = document.getElementsByTagName('body')[0]
      body.addEventListener('mousemove', (e) => {
        console.log(e)
        setCli({
          x: e.clientX,
          y: e.clientY
        })
        setScreen({
          x: e.screenX,
          y: e.screenY
        })
        setPage({
          x: e.pageX,
          y: e.pageY
        })
      })
    })
  })
  return (
      <div className={styles.container}>
        <div
            ref={ImgRef}
            className={styles.img}
            onMouseEnter={mouseE}
            onMouseLeave={mouseL}
            onMouseMove={e => mouseM(e)}
        >
          {props.img}
          <div ref={mask} className={styles.mask}>
            {m.x}|{m.y}
          </div>
        </div>
        <div>
          client:{cli.x}---{cli.y}
        </div>
        <div>
          layer:{lay.x}---{lay.y}
        </div>
        <div>
          movement:{movement.x}---{movement.y}
        </div>
        <div>
          page:{page.x}---{page.y}
        </div>
        <div>
          screen:{screen.x}---{screen.y}
        </div>
      </div>
  )
}
