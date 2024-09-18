import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import OBSNavigation from './obs-navigation'
import useMediaPlayer from "../hooks/useMediaPlayer"

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

const OBSPictureNavigationApp = ({topIdStr,onClose}) => {
  const mPlayObj = useMediaPlayer()
  const { startPlay, isPaused, syncImgSrc } = mPlayObj

  const handleStartBiblePlay = (curSerie,id) => {
    const useInx = id-1
    if (curSerie?.episodeList) {
      if ((useInx>=0) && (useInx<curSerie?.episodeList?.length)) {
        startPlay(topIdStr,id,curSerie,curSerie.episodeList[useInx])
      }
    }
  }
return (
    <div style={defaultBackgroundStyle}>
      <ThemeProvider theme={theme}>
        <OBSNavigation
          isPaused={isPaused}
          onReset={() => console.log("onReset")}
          onExitNavigation={onClose}
          onStartPlay={handleStartBiblePlay}
          syncImgSrc={syncImgSrc}
        />
      </ThemeProvider>
    </div>
  )
}

export default OBSPictureNavigationApp
