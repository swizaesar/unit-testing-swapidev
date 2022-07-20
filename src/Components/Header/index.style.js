import styled from "styled-components";
import { color } from "../../Utils/variable";

export const Style = styled.header`
  background: ${color.primary};
  width: 80%;
  margin: auto;
  border-radius: 0px 0px 15px 15px;
  margin-bottom: 20px;
  position: relative;
  .wave {
    width: 100%;
  }
  .header {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    &-content {
      &__pokemon {
        text-align: center;
        font-size: 24px;
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: 50px;
          margin-right: 6px;
        }
        &-name {
          text-transform: capitalize;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
      &__images {
        display: block;
        text-align: center;
        margin-bottom: 10px;
        .pokemon {
          width: 150px;
          &-type {
            width: 100px;
          }
        }
      }
    }
  }
`;
export const HeaderDetailStyle = styled.header`
  padding: 20px 0;
  display: flex;
  justify-content: center;
  .header {
    &-content {
      &__image {
        border-radius: 50%;
        margin-right: 15px;
        background-color: #fff;
        margin-bottom: 15px;
        img {
          display: block;
          width: 100%;
        }
      }
      &__name {
        font-size: 22px;
        color: #000;
        text-transform: uppercase;
        font-weight: 600;
      }
    }
  }
`;
