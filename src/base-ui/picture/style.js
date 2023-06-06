import { styled } from "styled-components";

export const PictureWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  background-color: #333;
  .top {
    position: relative;
    height: 86px;
    .close-btn {
      position: absolute;
      top: 15px;
      right: 25px;
    }
  }
  .slider {
    flex: 1;
    display: flex;
    position: relative;
    justify-content: center;
    .control {
      position: absolute;
      z-index: 1;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      display: flex;
      justify-content: space-between;
      bottom: 0;
      color: #fff;
      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 83px;
        height: 100%;
      }
    }
    .container {
      position: relative;
      height: 100%;
      overflow: hidden;
      width: 100% !important;
      max-width: 105vh !important;
      .pic-enter {
        transform: translateX(${props => (props.isNext ? "100%" : "-100%")});
        opacity: 0;
      }
      .pic-enter-active {
        transform: translateX(0);
        opacity: 1;
        transition: all 250ms ease-out;
      }
      .pic-exit {
        opacity: 1;
      }
      .pic-exit-active {
        opacity: 0;
        transition: opacity 250ms ease-out;
      }
      img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: 0 auto;
        height: 100%;
        user-select: none;
      }
    }
  }
  .preview {
    height: 100px;
    margin-top: 10px;
    display: flex;
    position: relative;
    justify-content: center;
    .info {
      position: absolute;
      bottom: 10px;
      max-width: 105vh;
      .desc {
        display: flex;
        justify-content: space-between;
        color: #fff;
        .switch {
          cursor: pointer;
        }
      }
      .list {
        margin-top: 3px;
        overflow: hidden;
        transition: height 300ms ease;
        height: ${props => (props.showList ? "67px" : "0px")};
        .item {
          cursor: pointer;
          margin-left: 15px;
          &.item:first-child {
            margin-left: ${props => (props.picIndex > 4 ? "15px" : "0px")};
          }
          img {
            height: 67px;
            opacity: 0.5;
          }
          &.active {
            img {
              opacity: 1;
            }
          }
        }
      }
    }
  }
`;
