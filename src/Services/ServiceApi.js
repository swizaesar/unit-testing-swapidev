import axios from "axios";
// Service API
const serviceApi = async (options) => {
  const configAxios = {
    baseURL: "https://pokeapi.co/api/v2",
  };
  const axiosConfig = axios.create(configAxios);
  return await axiosConfig(options)
    .then((res) => {
      return {
        response: res.data,
        success: true,
        error: false,
        headers: res.headers,
        group: options.group,
        key: options.key,
        type: res.status,
      };
    })
    .catch((err) => {
      return {
        response: err.data,
        success: false,
        headers: err.headers,
        error: true,
        group: options.group,
        key: options.key,
        type: err.status,
      };
    });
};
// Type Service Action Fetch API GET / POST
const fetchApi = async (dispatch, value) => {
  const result = await serviceApi(value);
  if (result) {
    dispatch({
      data: result.response,
      headers: result.headers,
      isError: result.error,
      isSuccess: result.success,
      group: value.group,
      key: value.key,
      type: result.type,
    });
  }
};
const clearData = (dispatch, value) => {
  dispatch(value);
};
const setData = (dispatch, value) => {
  dispatch(value);
};

// Service Action Type
const serviceAction = (dispatch) => ({
  // Fetch API
  fetchApi: (value) => {
    fetchApi(dispatch, value);
  },
  // Clear State Global
  reduxClear: (value) => {
    clearData(dispatch, value);
  },
  // Set State Global
  reduxSetData: (value) => {
    setData(dispatch, value);
  },
});
export default serviceAction;
