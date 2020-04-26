import { ADD_PRODUCT_BASKET, GET_NUMBER_BASKET } from "../actions/types";

const initalState = {
    basketNumber: 0
}

export default (state = initalState, action) => {
    switch (action.type) {
        case ADD_PRODUCT_BASKET:
            return {
                basketNumber: state.basketNumber + 1
            }

        case GET_NUMBER_BASKET:
            return {
                ...state

            }


        default:
            return state;
    }
}