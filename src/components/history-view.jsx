import React, {useState} from 'react'
import CardContent from '@mui/material/CardContent'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import Typography from '@mui/material/Typography'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import Fab from '@mui/material/Fab'
import { getImgOfObj } from '../utils/obj-functions'
import ItemBarEpisode from './item-bar-episode'
import useBrowserData from '../hooks/useBrowserData'
import useMediaPlayer from "../hooks/useMediaPlayer"
import { useTranslation } from 'react-i18next'

const HistoryView = (props) => {
  const { epList, lng, onClick } = props
  const {size, width, height} = useBrowserData()
  const { t } = useTranslation()
  const sizeToCol = {"xl": 5, "lg": 4, "md": 3}
  let colSize = sizeToCol[size] || 2
  let curHeight = height-150
  if (width<=380){
    colSize = 1
    if (curHeight>300){
      curHeight = 300
    }
  }
  const nbrOfEntries = epList && epList.length
  const useColSize = colSize // + (showNavButton ? 0.15 : 0.1)
  const handleClickItemIndex = (ev,item) => {
    ev.stopPropagation()
    onClick && onClick(item)
  }
  return (
    <CardContent sx={{padding: 0}}>
      <ImageList
        cellheight={40}
        cols={useColSize}
      >
        {epList?.map((ep) => {
          const useImg = ep.image ? getImgOfObj(ep,t) : ep.imageSrc

          return (
            <ImageListItem
              key={ep.id}
              cols={1}
              rows={1}
              sx={{maxWidth: 180}}
              onClick={(e) => handleClickItemIndex(e,ep)}
            >
              <img
                src={useImg}
                alt={ep.title}
                onClick={(e) => handleClickItemIndex(e,ep)}
                />
              <ItemBarEpisode
                // serie={serie}
                episode={ep}
                descr={ep.descr}
                // useIcon={useIcon}
                title={t(ep.title,{lng})}
                onClick={(e) => handleClickItemIndex(e,ep)}
              />
              {(width<480) && false && (
                <Typography>{t(ep.descr,{lng})}</Typography>)}
            </ImageListItem>
          )}
        )}
      </ImageList>
    </CardContent>
  )
}

export default HistoryView
