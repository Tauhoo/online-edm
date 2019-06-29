import React from 'react'
import styled from 'styled-components'

const Container = styled.button`
  height: 100px;
  width: 100px;
  border-radius: 20px;
  border-width: 0px;
  outline: none;
  position: relative;
  overflow: hidden;
  background: linear-gradient(to left, #23074d, #cc5333);
  transition: background-image 0.5s linear;
  &:hover {
    div {
      left: 0px;
    }
    span {
      color: black;
    }
  }
`

const Shadow = styled.div`
  background: linear-gradient(to left, #00b09b, #96c93d);
  position: absolute;
  left: 100%;
  top: 0px;
  height: 100%;
  width: 100%;
  transition: 0.3s;
  z-index: 0;
`

const Text = styled.span`
  color: white;
  position: absolute;
  font-family: 'Roboto Mono';
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  z-index: 1000;
  font-size: 6em;
`

export default ({ text, onClick }) => {
  return (
    <Container onClick={onClick}>
      <Text>{text}</Text>
      <Shadow />
    </Container>
  )
}
