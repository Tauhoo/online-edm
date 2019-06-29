import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  width: 200px;
  height: 40px;
  border-radius: 20px;
  overflow: hidden;
`

const Button = styled.button`
  flex: 1;
  border-width: 0px;
  transition: 0.3s;
  font-family: 'Roboto Mono';
  &:hover {
    background-color: black;
    color: white;
  }
`

export default ({ onSave, onLoad }) => (
  <Container>
    <Button onClick={onSave}>save</Button>
    <Button onClick={onLoad}>load</Button>
  </Container>
)
