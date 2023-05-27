import entireType from "./constant";

const initialState = {
  currentPage: 1,
  roomList: [],
  total: 0,
  isLoading: false
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case entireType.CHANGECURRENTPAGE:
      return { ...state, currentPage: action.currentPage };
    case entireType.CHANGEROOMLIST:
      return { ...state, roomList: action.roomList };
    case entireType.CHANGETOTAL:
      return { ...state, total: action.total };
    case entireType.CANGELOADING:
      return { ...state, isLoading: action.isLoading };
    default:
      return state;
  }
}

export default reducer;
