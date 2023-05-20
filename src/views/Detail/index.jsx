import React, { memo, useEffect } from "react";
import RcmAxiosInstance from "@/servers";

const Detail = memo(() => {
  useEffect(() => {
    RcmAxiosInstance.request({
      url: "/home/highscore"
    }).then(res => {
      console.log("res", res);
    });
  }, []);

  return <div>Detail</div>;
});

export default Detail;
