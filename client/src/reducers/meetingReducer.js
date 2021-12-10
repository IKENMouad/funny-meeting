import { OPEN_MODAL } from "../actions/types";

const initialState = {
    openModal: false,
    meetings: [],
    meeting: null,
    error: "",
};

function meetingReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case OPEN_MODAL:
            // TODO: clear event state 
            return {
                ...state,
                openModal: payload
            };



        default:
            return state;
    }
}

export default meetingReducer;
