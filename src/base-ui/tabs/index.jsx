import PropTypes from "prop-types";
import React, { memo, useState } from "react";
import { TabsWrapper } from "./style";

const Tabs = memo(props => {
  const { tabsName, handleItemClickInvoke, count } = props;
  const [currentIndex, setCurrentIndex] = useState(count);
  function handleItemClick(index, item) {
    setCurrentIndex(index);
    handleItemClickInvoke(index, item);
  }
  return (
    <TabsWrapper>
      {tabsName?.map((item, index) => {
        return (
          <div 
            className={`item ${currentIndex === index ? "active" : ""}`} 
            onClick={() => handleItemClick(index, item)}
            key={item}
          >
            {item}
          </div>
        );
      })}
    </TabsWrapper>
  );
});

Tabs.propTypes = {
  tabsName: PropTypes.array
};

export default Tabs;
