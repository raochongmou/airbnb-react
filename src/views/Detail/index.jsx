import React, { memo, useEffect } from "react";
import { DetailWrapper } from "./style";
import DetailPicture from "./c-cpns/detail-picture";
import { useDispatch } from "react-redux";
import {
  // changeHeaderConfigAction,
  changeIsFixedAction
} from "@/store/modules/main";

const Detail = memo(() => {
  const dispatch = useDispatch();
  useEffect(
    () => {
      // dispatch(changeHeaderConfigAction({ isFixed: false }));
      dispatch(changeIsFixedAction(false));
    },
    [dispatch]
  );
  return (
    <DetailWrapper>
      <DetailPicture />
    </DetailWrapper>
  );
});

export default Detail;
