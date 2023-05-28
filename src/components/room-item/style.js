import { styled } from "styled-components";

export const RoomItemWrapper = styled.div`
  flex-shrink: 0;
  width: ${props => props.roomwidth};
  padding: 8px;
  box-sizing: border-box;
  .inner {
    width: 100%;

    .swipper {
      background-color: blue;
      position: relative;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      z-index: 10;
      &:hover {
        .control {
          display: flex;
        }
      }

      .control {
        display: none;
        justify-content: space-between;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 9;
        width: 100%;
        background-color: rgba(0, 0, 0, .05);

        .btn {
          width: 20%;
          color: #fff;
          display: flex;
          justify-content: center;
          align-items: center;

          &.left {
          }
          &.right {
          }
        }
      }
      .indicator {
        width: 30%;
        position: absolute;
        bottom: 10px;
        margin: 0 auto;
        right: 0;
        left: 0;
        z-index: 99;
        .doc {
          display: flex;
          align-items: center;
          width: 20%;
          .item {
            width: 5px;
            height: 5px;
            background-color: #fff;
            border-radius: 50%;
            &.active {
              background-color: #409eff;
              width: 10px;
              height: 10px;
            }
          }
        }
      }
    }
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
      object-fit: cover;
    }
  }
  .desc {
    margin: 10px 0;
    color: ${props => props.verifycolor};
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
