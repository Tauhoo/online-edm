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
export default () => {
  const [visible, updateVisible] = useState(false)
  const [key, updateKey] = useState(null)
  const [status, updateStatus] = useState(false)
  const [url, updateUrl] = useState('')
  const [music, updateMusic] = useState(null)

  const onSave = () => {
    const sound = new Howl({
      src: [url],
      loop: true,
      xhrWithCredentials: false,
    })
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
          onChange={({ target }) => updateUrl(target.value)}
        />
        <br />
        <GetKey onChange={updateKey} />
        <br />
        <StatusButton onChange={updateStatus} />
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
