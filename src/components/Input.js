import React from 'react'
import styled from 'styled-components'

const Container = styled.input`
  width: 250px;
  display: block;
  height: 20px;

  border-width: 0px 0px 5px 0px;
  border-image: linear-gradient(to left, #23074d, #cc5333) 10% round;
  outline: none;
  font-family: 'Roboto Mono';
  font-size: 1em;
`

export default ({ ref, placeholder }) => {
  return <Container ref={ref} placeholder={placeholder} />
}
