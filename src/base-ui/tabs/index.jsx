import PropTypes from "prop-types";
import React, { memo, useState } from "react";
import { TabsWrapper } from "./style";
import Scroll from "../scroll";

const Tabs = memo(props => {
  const { tabsName, handleItemClickInvoke, count } = props;
  const [currentIndex, setCurrentIndex] = useState(count);
  function handleItemClick(index, item) {
    setCurrentIndex(index);
    handleItemClickInvoke(index, item);
  }
  return (
    <TabsWrapper>
      <Scroll>
        {tabsName?.map((item, index) => {
          return (
            <div 
              className={`item ${currentIndex === index ? "active" : ""}`} 
              onClick={() => handleItemClick(index, item)}
              key={index}
            >
              {item}
            </div>
          );
        })}
      </Scroll>
    </TabsWrapper>
  );
});

Tabs.propTypes = {
  tabsName: PropTypes.array
};

export default Tabs;
