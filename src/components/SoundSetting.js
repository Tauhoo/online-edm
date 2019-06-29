import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Modal from './Modal'
import Button from './Button'
import MusicButton from './MusicButton'
import Input from './Input'
import GetKey from './GetKey'
import StatusButton from './StatusButton'
import { Howl, Howler } from 'howler'

const Container = styled.div``
export default ({ onChange, defaultValue }) => {
  const [visible, updateVisible] = useState(false)
  const [key, updateKey] = useState(defaultValue.key)
  const [status, updateStatus] = useState(defaultValue.status)
  const [url, updateUrl] = useState(defaultValue.url)
  const [music, updateMusic] = useState(
    new Howl({
      src: [defaultValue.url],
      loop: true,
      xhrWithCredentials: false,
    }),
  )

  const onSave = () => {
    const sound = new Howl({
      src: [url],
      loop: true,
      xhrWithCredentials: false,
    })

    if (onChange) onChange({ key, status, url, id: defaultValue.id })
    updateMusic(sound)
    updateVisible(false)
  }

  const KeyDown = ({ keyCode }) => {
    if (!music || keyCode !== key) return

    if (status) {
      if (music.playing()) return music.stop()
      music.play()
    } else {
      if (music.playing()) return
      music.play()
    }
  }

  const KeyUp = ({ keyCode }) => {
    if (!music || keyCode !== key) return
    if (!status) {
      music.stop()
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', KeyDown)
    document.addEventListener('keyup', KeyUp)
    return () => {
      document.removeEventListener('keydown', KeyDown)
      document.removeEventListener('keyup', KeyUp)
    }
  })

  return (
    <Container>
      <Modal visible={visible}>
        <Input
          placeholder="audio url"
          defaultValue={defaultValue.url}
          onChange={({ target }) => updateUrl(target.value)}
        />
        <br />
        <GetKey onChange={updateKey} defaultValue={defaultValue.key} />
        <br />
        <StatusButton
          onChange={updateStatus}
          defaultValue={defaultValue.status}
        />
        <br />
        <Button onClick={onSave}>save</Button>
      </Modal>
      <MusicButton
        text={String.fromCharCode(key)}
        onClick={() => updateVisible(true)}
      />
    </Container>
  )
}
