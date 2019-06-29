import React from 'react'
import styled from 'styled-components'

const Container = styled.button`
  width: 100px;
  height: 100px;
  border-radius: 20px;
  border-width: 0px;
`

export default ({ onClick }) => <Container onClick={onClick} />
