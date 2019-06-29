import React, { useState } from 'react'
import Button from './components/MusicButton'
import Modal from './components/Modal'

export default () => {
  const [button, updateButton] = useState(false)
  return (
    <>
      <Modal visible={button}>
        <Button text="X" onClick={() => updateButton(false)} />
      </Modal>
      <Button
        text="X"
        onClick={() => {
          updateButton(true)
        }}
      />
    </>
  )
}
