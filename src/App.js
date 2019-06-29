import React, { useState } from 'react'
import styled from 'styled-components'
import ButtonGroup from './components/ButtonGroup'
import SoundSetting from './components/SoundSetting'
import AddButton from './components/AddButton'
import SaveLoadButton from './components/SaveLoadButton'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Title = styled.h1`
  font-family: 'Roboto Mono';
  text-align: center;
  padding: 20px;
`

export default () => {
  const [defaultValues, updateDefaultValues] = useState([])
  const onSave = () => {
    console.log(defaultValues)

    // window.localStorage.setItem('online-edm', JSON.stringify(defaultValues))
  }

  const onLoad = () => {
    let data = window.localStorage.getItem('online-edm')
    console.log(data)

    if (!data) return

    updateDefaultValues(
      JSON.parse(data).map((value, index) => ({ ...value, id: index })),
    )
  }

  return (
    <Container>
      <br />
      <br />
      <br />
      <Title>Online EDM Instrument</Title>
      <br />
      <ButtonGroup>
        {defaultValues.map(defaultValue => (
          <SoundSetting defaultValue={defaultValue} key={defaultValue.id} />
        ))}
        <AddButton
          onClick={() => {
            const length = defaultValues.length
            const id = length <= 0 ? 0 : defaultValues[length - 1].id + 1
            defaultValues.push({
              key: 65,
              status: 0,
              url: 'http://www.coolbiz.com/wav/dino.wav',
              id,
            })
            updateDefaultValues([...defaultValues])
          }}
        />
      </ButtonGroup>
      <br />
      <br />
      <SaveLoadButton onSave={onSave} onLoad={onLoad} />
    </Container>
  )
}
