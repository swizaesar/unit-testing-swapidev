import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Card, Col, Row } from "reactstrap";
import fetchApi from "../../Services/fetchApi";
import Style from "./index.style";
import heightIcon from "../../Assets/Icon/height.png";
const Detail = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const params = useParams();
  const [data, setData] = React.useState(false);
  React.useEffect(() => {
    if (params.slug) {
      fetchApi.pokemonDetail({ dispatch, slug: params.slug });
    }
  }, [params]);
  React.useEffect(() => {
    if (state?.pokemon?.pokemonDetail?.isSuccess) {
      setData(state.pokemon.pokemonDetail.data);
    }
  }, [state]);
  console.log(data);
  return (
    <Style>
      <h3>Info</h3>
      <Card>
        <div className="card-bodyinfo">
          <Row>
            <Col xs="6" className="border-right">
              <div className="card-bodyinfo__pokemon">
                <div className="card-bodyinfo__pokemon-value">
                  {data.height}
                </div>
                <div>
                  <div className="card-bodyinfo__pokemon-unit">Cm</div>
                  <i className="fa fa-ruler-vertical"></i>
                </div>
              </div>
            </Col>
            <Col xs="6">
              <div className="card-bodyinfo__pokemon">
                <div className="card-bodyinfo__pokemon-value">
                  {data.weight}
                </div>
                <div>
                  <div className="card-bodyinfo__pokemon-unit">Kg</div>
                  <i className="fa fa-weight-scale"></i>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Card>
    </Style>
  );
};
export default Detail;
