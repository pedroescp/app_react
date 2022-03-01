import { CONSTANTS } from "../actions"

export const addList = (title) => {
    //return object 
    return {
        type: CONSTANTS.ADD_LIST,
        payload: title,
    };
};