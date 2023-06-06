import { styled } from "styled-components";

export const DetailPictureWrapper = styled.div`
  height: 600px;
  position: relative;
  width: 100%;
  margin-top: 20px;
  .cover {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .3);
    width: 100%;
    height: 100%;
  }
  .picture {
    width: 100%;
    height: 100%;
    display: flex;
    .left {
      border: 1px solid #eee;
      box-sizing: border-box;
      width: 50%;
      height: 100%;
      overflow: hidden;
      .item {
        height: 100%;
        position: relative;
        width: 100%;
        transition: tramsform 250ms ease;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .cover {
        }
      }
      .item:hover {
        transform: scale(1.1);
        .cover {
          background-color: rgba(0, 0, 0, 0);
        }
      }
    }
    .right {
      width: 50%;
      display: flex;
      flex-wrap: wrap;
      .item {
        position: relative;
        border: 1px solid #eee;
        box-sizing: border-box;
        transition: all 250ms ease;
        width: 50%;
        height: 50%;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .item:hover {
        img {
          transform: scale(1.1);
        }
        .cover {
          background-color: rgba(0, 0, 0, 0);
        }
      }
    }
  }
  .show-picture {
    position: absolute;
    z-index: 99;
    right: 15px;
    bottom: 15px;
    line-height: 22px;
    padding: 6px 15px;
    border-radius: 4px;
    background-color: #fff;
    cursor: pointer;
  }
`;
