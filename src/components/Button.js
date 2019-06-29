import React from 'react'
import styled from 'styled-components'

const Container = styled.button`
  padding: 10px 20px;
  background-color: black;
  border-radius: 5px;
  border-width: 0px;
  color: white;
  outline: none;
  transition: 0.3s;
  &:hover {
    background: gray;
  }
  font-family: 'Roboto Mono';
`

export default ({ children, onClick }) => (
  <Container onClick={onClick}>{children}</Container>
)
