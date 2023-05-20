import RcmAxiosInstance from "..";

export function getGoodPrice() {
  return RcmAxiosInstance.get({
    url: "/home/goodPrice"
  });
}
