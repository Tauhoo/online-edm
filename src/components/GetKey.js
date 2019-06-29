import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'

const put = keyframes`
  from {
    height: 0px;
  }

  to {
    height: 100%;
    opacity: 0;
  }
`

const Container = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  transition: 0.3s;
  background: ${({ isfocus }) =>
    isfocus
      ? 'linear-gradient(to bottom, #23074d, #cc5333)'
      : 'linear-gradient(to bottom, #0575e6, #00f260)'};
`

const Input = styled.input`
  width: 100%;
  height: 100%;
  opacity: 0;
  position: absolute;
  top: 0px;
  left: 0px;
`

const Shadow = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0px;
  left: 0px;
  background: linear-gradient(to bottom, #f7b733, #fc4a1a);
  animation: ${put} 0.3s linear;
  display: ${({ animate }) => (animate ? 'block' : 'none')};
`

const Key = styled.span`
  position: absolute;
  transform: translate(-50%, -50%);
  font-size: 2em;
  font-family: 'Roboto mono';
  top: 50%;
  left: 50%;
  z-index: 1000;
  color: white;
`

export default () => {
  const [animate, updateAnimate] = useState(false)
  const [isFocus, updateFocus] = useState(false)
  const [key, updateKey] = useState(null)

  const onType = e => {
    updateAnimate(!animate)
    updateKey(e.keyCode)
  }

  return (
    <Container isfocus={isFocus}>
      <Input
        onKeyDown={onType}
        onFocus={() => {
          updateFocus(true)
        }}
        onBlur={() => {
          updateFocus(false)
        }}
      />
      <Key>{String.fromCharCode(key)}</Key>
      <Shadow animate={animate} />
      <Shadow animate={!animate} />
    </Container>
  )
}
