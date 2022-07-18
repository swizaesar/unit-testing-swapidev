import serviceAction from "../ServiceApi";

const clearState = {
    loadScheduleClear: ({ dispatch }) => {
        serviceAction(dispatch).reduxClear({
            type: "CLEAR",
            key: "schedule",
        });
    },
};
export default clearState;
