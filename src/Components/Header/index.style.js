import styled from "styled-components";

const Style = styled.header`
  background: linear-gradient(135deg, #50a1d8 0, #297eb9 100%);
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
      }
      &__images {
        display: block;
        text-align: center;
        margin-bottom: 10px;
        .pokemon {
          width: 150px;
        }
      }
    }
  }
`;

export default Style;
