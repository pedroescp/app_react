import { CONSTANTS } from "../actions"

export const addCard = (listID, text) => {
    //return object 
    return {
        type: CONSTANTS.ADD_CARD,
        payload: {text, listID},
    };
};