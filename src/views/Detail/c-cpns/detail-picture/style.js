import { styled } from "styled-components";

export const DetailPictureWrapper = styled.div`
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
    display: flex;
    .left {
      border: 1px solid #eee;
      box-sizing: border-box;
      width: 50%;
      .item {
        position: relative;
        width: 100%;
        overflow: hidden;
        transition: tramsform 250ms ease;
        img {
          width: 100%;
          height: 100%;
        }
        .cover {
        }
      }
      .item:hover {
        transform: scale(1.1);
        .cover {
          overflow: hidden;
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
        overflow: hidden;
        border: 1px solid #eee;
        box-sizing: border-box;
        transition: tramsform 250ms ease;
        width: 50%;
        height: 50%;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .item:hover {
        transform: scale(1.1);
        .cover {
          background-color: rgba(0, 0, 0, 0);
        }
      }
    }
  }
`;
