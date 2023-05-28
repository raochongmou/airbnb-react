import PropTypes from "prop-types";
import React, { memo, useState } from "react";
import { DemoWrapper } from "./style";
import Indicator from "@/base-ui/indicator";
import Button from "@mui/material/Button";

const Demo = memo(props => {
  const names = ["诸葛亮", "刘备", "张飞", "关羽", "曹操", "吕布", "赵云", "姜维", "凤雏", "周瑜"];
  const [posIndex, setPosIndex] = useState(0);
  const handleChange = isNext => {
    let newIndex = isNext ? posIndex + 1 : posIndex - 1;
    if (newIndex < 0) newIndex = names.length - 1;
    if (newIndex > names.length - 1) newIndex = 0;
    setPosIndex(newIndex);
  };
  return (
    <DemoWrapper>
      <div className="demo">
        <div className="control">
          <Button variant="contained" onClick={() => handleChange(false)}>
            上一个
          </Button>
          <Button variant="contained" onClick={() => handleChange(true)}>
            下一个
          </Button>
        </div>
        <Indicator newIndex={posIndex}>
          {names.map(item => {
            return (
              <Button variant="contained" key={item}>
                {item}
              </Button>
            );
          })}
        </Indicator>
      </div>
    </DemoWrapper>
  );
});

Demo.propTypes = {};

export default Demo;
