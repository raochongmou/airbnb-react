import React, { memo } from "react";
import { EntirePaginationWrapper } from "./style";
import Pagination from "@mui/material/Pagination";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import entireAction from "@/store/modules/entire/createAction";

const EntirePagination = memo(() => {
  const { total, currentPage, roomList } = useSelector(
    state => ({
      total: state.entire.total,
      currentPage: state.entire.currentPage,
      roomList: state.entire.roomList
    }),
    shallowEqual
  );
  const preCurrentPage = currentPage * 20 + 1;
  const beCurrentPage = (currentPage + 1) * 20;
  const totalPage = Math.ceil(total / 20);
  const dispatch = useDispatch();
  const handleChange = (e, pageSize) => {
    dispatch(entireAction.fetchEntireList(pageSize - 1));
    window.scrollTo(0, 0);
  };
  return (
    <EntirePaginationWrapper>
      {!!roomList.length &&
        <div className="entire-pagination">
          <Pagination
            count={totalPage}
            color="secondary"
            onChange={handleChange}
          />
          <div className="entire-pagination-desc">
            第{preCurrentPage}-{beCurrentPage}个房源，共超过{total}
          </div>
        </div>}
    </EntirePaginationWrapper>
  );
});

export default EntirePagination;
