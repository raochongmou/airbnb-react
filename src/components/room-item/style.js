import { styled } from "styled-components";

export const RoomItemWrapper = styled.div`
  width: 25%;
  padding: 8px;
  box-sizing: border-box;
  .inner {
    width: 100%;
  }
  .cover {
    position: relative;
    padding: 66.66% 8px 0;
    box-sizing: border-box;
    overflow: hidden;
    border-radius: 3px;
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
  .desc {
    margin: 10px 0;
    color: ${props => props.verifyColor};
    font-size: 14px;
  }
  .name {
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 16px;
    font-weight: 700;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    word-break: break-all;
    line-height: 25px;
  }
  .css-7qmtgc-MuiRating-icon {
    margin: 0 -1px;
  }
  .price {
    margin: 10px 0;
  }
  .bottom {
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 600;
    color: ${props => props.theme.color.primaryColor};
  }
  .count {
    margin: 0 2px 0 4px;
  }
`;
