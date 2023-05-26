import RcmAxiosInstance from "..";

export function getGoodPrice() {
  return RcmAxiosInstance.get({
    url: "/home/goodPrice"
  });
}

export function getHighScore() {
  return RcmAxiosInstance.get({
    url: "/home/highscore"
  });
}

export function getDiscount() {
  return RcmAxiosInstance.get({
    url: "/home/discount"
  });
}

export function getHotRecommend() {
  return RcmAxiosInstance.get({
    url: "/home/hotrecommenddest"
  });
}

export function getLongfor() {
  return RcmAxiosInstance.get({
    url: "/home/longfor"
  });
}

export function getPlus() {
  return RcmAxiosInstance.get({
    url: "/home/plus"
  });
}
