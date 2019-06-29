import React, { useState } from 'react'
import ButtonGroup from './components/ButtonGroup'
import SoundSetting from './components/SoundSetting'
import AddButton from './components/AddButton'

export default () => {
  const [defaultValues, updateDefaultValues] = useState([])
  return (
    <>
      <ButtonGroup>
        {defaultValues.map(defaultValue => (
          <SoundSetting defaultValue={defaultValue} />
        ))}
        <AddButton
          onClick={() => {
            const length = defaultValues.length
            const id = length <= 0 ? 0 : defaultValues[length - 1].id + 1
            defaultValues.push({
              key: 65,
              status: false,
              url: 'http://www.coolbiz.com/wav/dino.wav',
              id,
            })

            updateDefaultValues([...defaultValues])
          }}
        />
      </ButtonGroup>
    </>
  )
}
