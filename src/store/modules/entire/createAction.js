import entireType from "./constant";
import { getEntireList } from "@/servers/entire";

const entireAction = {
  changeCurrentPageAction: currentPage => ({
    type: entireType.CHANGECURRENTPAGE,
    currentPage
  }),
  changeRoomList: roomList => ({
    type: entireType.CHANGEROOMLIST,
    roomList
  }),
  changeTotalAction: total => ({
    type: entireType.CHANGETOTAL,
    total
  }),
  changeLoadingAction: isLoading => ({
    type: entireType.CANGELOADING,
    isLoading
  }),
  fetchEntireList: (currentPage = 0) => {
    return async (dispatch, getState) => {
      dispatch(entireAction.changeCurrentPageAction(currentPage));
      // const currentPage = getState().entire.currentPage;
      dispatch(entireAction.changeLoadingAction(true));
      const res = await getEntireList(currentPage * 20);
      dispatch(entireAction.changeLoadingAction(false));
      dispatch(entireAction.changeRoomList(res.list));
      dispatch(entireAction.changeTotalAction(res.totalCount));
    };
  }
};

export default entireAction;
