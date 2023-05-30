import React, { memo, useEffect } from "react";
import { DetailWrapper } from "./style";
import { useSelector } from "react-redux";
import DetailPicture from "./c-cpns/detail-picture";

const Detail = memo(props => {
  const { detailInfo } = useSelector(state => ({
    detailInfo: state.detail.detailInfo
  }));
  return (
    <DetailWrapper>
      <DetailPicture />
    </DetailWrapper>
  );
});

export default Detail;
