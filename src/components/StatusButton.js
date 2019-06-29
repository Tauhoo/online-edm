import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import loop from '../assets/loop.svg'
import hand from '../assets/hand.svg'
import flash from '../assets/flash.svg'

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
  width: 300px;
  position: absolute;
  top: 0px;
  left: ${({ status }) => ['0px', '-100px', '-200px'][status]};
  transition: 0.3s;
`

export default ({ onChange, defaultValue }) => {
  const [status, updateStatus] = useState(defaultValue)

  const onClick = () => {
    updateStatus(status === 2 ? 0 : status + 1)
    console.log(status === 2 ? 0 : status + 1)

    if (onChange) onChange(status === 2 ? 0 : status + 1)
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
        <Wraper>
          <Center>
            <span>burst</span>
            <img src={flash} />
          </Center>
        </Wraper>
      </Train>
    </Container>
  )
}
