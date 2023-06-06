import React, { memo, useEffect } from "react";
import { EntireWrapper } from "./style";
import EntireContent from "./c-cpns/entire-content";
import EntireFilter from "./c-cpns/entire-filter";
import EntirePagination from "./c-cpns/entire-pagination";
import { useDispatch } from "react-redux";
import entireAction from "@/store/modules/entire/createAction";
import {
  // changeHeaderConfigAction,
  changeIsFixedAction
} from "@/store/modules/main";

const Entire = memo(() => {
  const disPatch = useDispatch();
  useEffect(
    () => {
      disPatch(entireAction.fetchEntireList());
      // disPatch(changeHeaderConfigAction({ isFixed: true }));
      disPatch(changeIsFixedAction(true));
    },
    [disPatch]
  );
  return (
    <EntireWrapper>
      <EntireFilter />
      <EntireContent />
      <EntirePagination />
    </EntireWrapper>
  );
});

export default Entire;
