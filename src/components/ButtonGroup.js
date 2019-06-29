import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  width: 540px;
  grid-template-columns: repeat(5, 100px);
  grid-gap: 10px;
  padding: 10px;
`

export default ({ children }) => <Container>{children}</Container>
