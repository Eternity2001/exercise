import { Son } from '../Son'
import { useState } from 'react'

interface Props {
  header?: JSX.Element
  footer?: JSX.Element
  children?: JSX.Element | string
}

export const Father = (props: Props): JSX.Element => {
  const [name, setName] = useState('张彭春')
  const newName = (newName: string) => {
    console.log(newName)
    setName(newName)
  }
  return (
      <div>
        {props.header}
        {props.children}
        <Son {...{name, newName}} />
        {props.footer}
      </div>
  )
}
