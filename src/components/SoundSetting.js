import React, { useState } from 'react'
import styled from 'styled-components'
import Modal from './Modal'
import MusicButton from './MusicButton'

const Container = styled.div``

export default () => {
  const [visible, updateVisible] = useState(false)
  const [key, updateKey] = useState('X')
  return (
    <Container>
      <Modal visible={visible}>
        <button onClick={() => updateVisible(false)}>กด</button>
      </Modal>
      <MusicButton text={key} onClick={() => updateVisible(true)} />
    </Container>
  )
}
