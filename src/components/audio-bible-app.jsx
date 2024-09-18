import React, {useState} from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import BibleNavigation from './bible-navigation'
import useMediaPlayer from '../hooks/useMediaPlayer'

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
})

const defaultBackgroundStyle = {
  height: 'auto',
  minHeight: '100vh',
  background: '#181818',
  padding: 0,
  color: 'whitesmoke',
}

const AudioBibleNavigationApp = () => {
  // eslint-disable-next-line no-unused-vars
  const { curPlay, startPlay } = useMediaPlayer()
  const handleStartBiblePlay = (topIdStr,curSerie,bookObj,id) => {
    const {bk} = bookObj
    const curEp = {bibleType: true,bk,bookObj,id}
    startPlay(topIdStr,id,curSerie,curEp)
  }
  return (
    <div style={defaultBackgroundStyle}>
      <ThemeProvider theme={theme}>
        <BibleNavigation
          //      isPaused={isPaused}
          onReset={() => console.log("onReset")}
          onExitNavigation={() => console.log("onExitNavigation")}
          onStartPlay={handleStartBiblePlay}
          onClickGospelJohn={() => setGospelJohn(true)}
        />
      </ThemeProvider>
    </div>
  )
}

export default AudioBibleNavigationApp
