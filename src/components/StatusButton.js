import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import loop from '../assets/loop.svg'
import hand from '../assets/hand.svg'

/*

true - loop stop when key down

false - stop when key up

*/

const Container = styled.div`
  height: 40px;
  width: 100px;
  overflow: hidden;
  position: relative;
  border-radius: 20px;
`

const Wraper = styled.div`
  width: 100px;
  height: 100%;
  display: inline-block;
  background-color: blue;
  span {
    font-family: 'Roboto Mono';
  }
`
const Center = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Train = styled.div`
  height: 100%;
  width: 200px;
  position: absolute;
  top: 0px;
  left: ${({ status }) => (status ? '-100px' : '0px')};
  transition: 0.3s;
`

export default ({ onChange }) => {
  const [status, updateStatus] = useState(false)

  const onClick = () => {
    updateStatus(!status)
    if (onChange) onChange(!status)
  }

  return (
    <Container onClick={onClick}>
      <Train status={status}>
        <Wraper>
          <Center>
            <span>click</span>
            <img src={hand} />
          </Center>
        </Wraper>
        <Wraper>
          <Center>
            <span>loop</span>
            <img src={loop} />
          </Center>
        </Wraper>
      </Train>
    </Container>
  )
}
