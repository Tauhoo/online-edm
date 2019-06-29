import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: absolute;
  z-index: 1000;
  height: 100%;
  width: 100%;
  top: 0px;
  left: 0px;
  background-color: black;
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  transition: 0.6s;
  div {
    transform: ${({ visible }) => (visible ? 'scale(1)' : 'scale(0.2)')};
  }
  justify-content: center;
  align-items: center;
`

const Wraper = styled.div`
  transition: 0.6s;
  padding: 40px;
  border-radius: 20px;
  width: max-content;
  height: max-content;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export default ({ visible, children }) => (
  <Container visible={visible}>
    <Wraper>{children}</Wraper>
  </Container>
)
