import React from "react";
import { useSelector } from "react-redux";
import { HeaderDetailStyle } from "./index.style";

const HeaderDetail = () => {
  const state = useSelector((state) => state);
  const [data, setData] = React.useState(false);
  React.useEffect(() => {
    if (state?.pokemon?.pokemonDetail?.isSuccess) {
      setData(state?.pokemon?.pokemonDetail.data);
    }
  });
  return (
    <HeaderDetailStyle>
      {data && (
        <div className="header-content">
          <div className="header-content__image">
            <img
              src={data.sprites.front_default}
              alt={data.name}
              className="img-fluid pokemon-type"
            />
          </div>
          <div className="header-content__name">{data.name}</div>
        </div>
      )}
    </HeaderDetailStyle>
  );
};
export default HeaderDetail;
