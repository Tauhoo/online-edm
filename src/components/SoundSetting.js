import React, { useState } from 'react'
import styled from 'styled-components'
import Modal from './Modal'
import Button from './Button'
import MusicButton from './MusicButton'

const Container = styled.div``

export default () => {
  const [visible, updateVisible] = useState(false)
  const [key, updateKey] = useState('X')
  return (
    <Container>
      <Modal visible={visible}>
        <Button onClick={() => updateVisible(false)}>SUBMIT</Button>
      </Modal>
      <MusicButton text={key} onClick={() => updateVisible(true)} />
    </Container>
  )
}
