import serviceState from "./ServiceState";
const types = {
  SUCCESS: 200,
  CREATED: 201,
  CLEAR: "CLEAR",
};
const resultRedux = (state, action) => {
  return {
    ...state,
    [action.group]: {
      ...state[action.group],
      [action.key]: { ...action },
    },
  };
};
// Global state (for save global state)
const stateRedux = (state, action) => {
  switch (action.type) {
    case types.SUCCESS:
      return resultRedux(state, action);
    case types.CREATED:
      return resultRedux(state, action);
    case types.CLEAR:
      return {
        ...state,
        [action.group]: {
          ...state[action.group],
          [action.key]: action.defaultData,
        },
      };
    default:
      return state;
  }
};
// State Store
const serviceRedux = (state = serviceState, action = () => {}) => {
  return stateRedux(state, action);
};
export default serviceRedux;
