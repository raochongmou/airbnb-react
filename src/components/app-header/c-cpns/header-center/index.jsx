import React, { memo, useState } from "react";
import { HeaderCenterWrapper } from "./style";
import Search from "@/assets/svg/search";
import { CSSTransition } from "react-transition-group";

const HeaderCenter = memo(props => {
  const { isSearch, handleSearchcb } = props;
  console.log("isSearch", isSearch);
  const data = [
    {
      title: "搜索房源",
      id: 1,
      content: ["javascript", "html", "css"]
    },
    {
      title: "查看房源",
      id: 2,
      content: ["react", "vue", "angular"]
    }
  ];
  const [currentIndex, setIndex] = useState(0);
  function handleClick(index) {
    setIndex(index);
  }
  function handleSearch() {
    if (handleSearchcb) handleSearchcb();
  }
  return (
    <HeaderCenterWrapper issearch={isSearch}>
      {isSearch
        ? <CSSTransition
            classNames="bar"
            timeout={400}
            in={isSearch}
            unmountOnExit={true}
          >
            <div className="search-input" onClick={() => handleSearch()}>
              <span>关键字</span>
              <div className="icon-search">
                <Search />
              </div>
            </div>
          </CSSTransition>
        : <CSSTransition
            classNames="tabs"
            timeout={400}
            in={!isSearch}
            unmountOnExit={true}
          >
            <div>
              <div className="search-wrapper">
                <div className="search-detail">
                  <div className="search-tabs">
                    {data.map((item, index) => {
                      return (
                        <div
                          className={`search-li ${currentIndex === index
                            ? "active"
                            : ""}`}
                          key={item.id}
                          onClick={() => handleClick(index)}
                        >
                          <span>
                            {item.title}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="search-tabs-content">
                {data.map((item, index) => {
                  return (
                    currentIndex === index &&
                    item.content.map((content, indey) => {
                      return (
                        <div className={`search-content-li `} key={indey}>
                          {content}
                        </div>
                      );
                    })
                  );
                })}
              </div>
            </div>
          </CSSTransition>}
    </HeaderCenterWrapper>
  );
});

export default HeaderCenter;
