import React, { useState } from 'react'
import styled from 'styled-components'
import Modal from './Modal'
import Button from './Button'
import MusicButton from './MusicButton'
import Input from './Input'

const Container = styled.div``

export default () => {
  const [visible, updateVisible] = useState(false)
  const [key, updateKey] = useState('X')
  return (
    <Container>
      <Modal visible={visible}>
        <Input placeholder="audio url" />
        <br />
        <Button onClick={() => updateVisible(false)}>save</Button>
      </Modal>
      <MusicButton text={key} onClick={() => updateVisible(true)} />
    </Container>
  )
}
