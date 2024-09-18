import React from "react"
import LazyLoad from 'react-lazyload'
import { getImgOfObj } from '../utils/obj-functions'
import { useTranslation } from 'react-i18next'

const ItemImage = (props) => {
  const {item,curEp,onClick,mTop} = props
  const { t } = useTranslation()
  let useImage = getImgOfObj(item,t)
  if (curEp && curEp.image) useImage = getImgOfObj(curEp,t)
  return (
    <LazyLoad height={props.height}>
      <div
        onClick={(ev) => onClick(ev)}
        style={{cursor: "default"}}
      >
        <img
          src={useImage}
          alt={item.title}
          style={{
            width: props.width,
            height: props.height,
            float: props.float,
            marginTop: mTop
          }}
        />
        <div/>
      </div>
    </LazyLoad>
  )
}

export default ItemImage
