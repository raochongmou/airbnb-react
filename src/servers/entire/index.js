import RcmAxiosInstance from "..";

export function getEntireList(offset = 0, size = 20) {
  return RcmAxiosInstance.get({
    url: "/entire/list",
    params: {
      offset,
      size
    }
  });
}
