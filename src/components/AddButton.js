import React from 'react'
import styled from 'styled-components'
import plus from '../assets/plus.svg'

const Container = styled.button`
  width: 100px;
  height: 100px;
  border-radius: 20px;
  border-width: 0px;
  outline: none;
`
const Img = styled.img`
  height: 50px;
  width: 50px;
`

export default ({ onClick }) => (
  <Container onClick={onClick}>
    <Img src={plus} />
  </Container>
)
