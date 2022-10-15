import { Son } from '../Son'
import { useState } from 'react'

interface Props {
}

export const Father = (props: Props): JSX.Element => {
  const [name, setName] = useState('张彭春')
  const newName = (newName: string) => {
    console.log(newName)
    setName(newName)
  }
  return (
      <div>
        <h1>Father</h1>
        <Son {...{name, newName}} />
      </div>
  )
}
