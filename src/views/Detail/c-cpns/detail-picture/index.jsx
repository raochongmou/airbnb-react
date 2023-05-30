import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { DetailPictureWrapper } from './style'
import { shallowEqual, useSelector } from 'react-redux'

const DetailPicture = memo((props) => {
  const { detailInfo } = useSelector(state => ({
    detailInfo: state.detail.detailInfo
  }), shallowEqual)
  return (
    <DetailPictureWrapper>
      <div className='picture'>
        <div className='left'>
          <div className='item'>
            <div className='cover'></div>
            <img src={detailInfo?.picture_urls?.[0]} />
          </div>
        </div>
        <div className='right'>
          {
            detailInfo?.picture_urls?.slice(1, 5).map(item => {
              return (
                <div className='item'>
                  <img src={item} key={item}/>
                  <div className='cover'></div>
                </div>
              )
            })
          }
        </div>
      </div>
    </DetailPictureWrapper>
  )
})

DetailPicture.propTypes = {}

export default DetailPicture