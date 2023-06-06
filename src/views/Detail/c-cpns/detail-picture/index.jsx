import React, { memo, useState } from 'react'
import { DetailPictureWrapper } from './style'
import { shallowEqual, useSelector } from 'react-redux'
// import Skeleton from '@mui/material/Skeleton';
// import { Box } from '@mui/material';
import Picture from '@/base-ui/picture';

const DetailPicture = memo((props) => {
  const [showPic, setShowPic] = useState(false);
  const { detailInfo } = useSelector(state => ({
    detailInfo: state.detail.detailInfo
  }), shallowEqual)
  const PictureElement = (<div className='picture'>
    <div className='left'>
      <div className='item' onClick={e => setShowPic(true)}>
        <div className='cover'></div>
        <img src={detailInfo?.picture_urls?.[0]} alt='tupian' />
      </div>
    </div>
    <div className='right'>
      {
        detailInfo?.picture_urls?.slice(1, 5).map(item => {
          return (
            <div className='item' key={item} onClick={e => setShowPic(true)}>
              <img src={item} alt='图片'/>
              <div className='cover'></div>
            </div>
          )
        })
      }
    </div>
  </div>); 
  
  function previewPic(e) {
    console.log("e", e);
    e.stopPropagation();
    setShowPic(true);
  }
  // const Variants = (
  //   <Box sx={{
  //       width: 1/1,
  //       height: 633,
  //       display: 'flex',
  //   }}>
  //     <Box sx={{
  //       width: 1/2,
  //       height: 1/1,
  //       overflow: 'hidden'
  //       // background: "#abcdef"
  //     }}>
  //       <Skeleton 
  //         variant="rectangular" 
  //         sx={{
  //           width: 1/1,
  //           height: 1/1,
  //           '&:hover': {
  //             backgroundColor: 'primary.main',
  //             opacity: [0.9, 0.8, 0.7],
  //             transform: 'scale(1.1)'
  //           },
  //         }} 
  //       />
  //     </Box>
  //     <Box sx={{
  //       width: 1/2,
  //       height: 1/1,
  //       background: "#aaa"
  //     }}>
  //     </Box>
  //   </Box>
  // )
  function handleBtnClose() {
    setShowPic(false);
  }
  return (
    <DetailPictureWrapper>
      {
        detailInfo?.picture_urls && PictureElement
      }
      <div className='show-picture' onClick={e => previewPic(e)}>
        显示照片
      </div>
      {showPic && <Picture detailInfo={detailInfo} handleClose={handleBtnClose}/> }
    </DetailPictureWrapper>
  )
})

export default DetailPicture