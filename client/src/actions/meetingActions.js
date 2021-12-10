import { OPEN_MODAL } from "./types";

export const handleModalAction = (value) => async (dispatch) => {
    dispatch({ type: OPEN_MODAL, payload: value });
    return Promise.resolve(value);
};
