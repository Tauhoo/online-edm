import React, { useState } from 'react'
import Button from './components/MusicButton'

export default () => {
  const [button, updateButton] = useState('A')
  return (
    <>
      <div onClick={() => updateButton('ice')}>ice</div>
      <div onClick={() => console.log(button)}>icoo</div>
      <Button text={button} />
    </>
  )
}
