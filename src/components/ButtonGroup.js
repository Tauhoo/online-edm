import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  width: 540px;
  grid-template-columns: repeat(5, 100px);
  grid-gap: 10px;
  padding: 10px;
  border-radius: 10px;
  border-style: solid;
  @media (max-width: 610px) {
    grid-template-columns: repeat(3, 100px);
    width: 320px;
  }
  @media (max-width: 390px) {
    grid-template-columns: repeat(2, 100px);
    width: 210px;
  }
`

export default ({ children }) => <Container>{children}</Container>
