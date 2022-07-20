import styled from "styled-components";
import { color } from "../../Utils/variable";

const Style = styled.section`
  color: #000000;
  .card {
    background: ${color.primary};
    border-radius: 20px;
    &-bodyinfo {
      .border-right {
        border-right: 2px solid #4497d5;
      }
      &__pokemon {
        color: #fff;
        display: flex;
        padding: 20px;
        justify-content: center;
        &-value {
          font-size: 5em;
          line-height: 1;
          margin-right: 10px;
        }
        &-unit {
          font-size: 16px;
          margin-bottom: 13px;
        }
        .fa {
          font-size: 30px;
        }
      }
    }
  }
`;
export default Style;
