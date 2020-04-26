import {GET_NUMBER_BASKET} from './types';

export const getNumber =() => {

    return (dispatch)=>{
        console.log("Getting all Basket");

        dispatch({
            type: GET_NUMBER_BASKET
        })
    }

}