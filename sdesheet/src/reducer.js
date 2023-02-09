import { useReducer } from "react";

import QuestionData, { version } from "./BABBAR450.js";

export const initialState={
    basket: [],
    user: null,
    item1:[],
    list: 0,
};

export const getBasketTotal = (basket) =>
    basket?.reduce((amount,item) => item.price + amount,0);

const reducer = (state, action) =>{
    
    switch(action.type){
        case 'ADD_TO_LIST':
            return {
                ...state,
                basket: [...state.basket,action.item],
                list : action.sheet
            };
        case 'ADD_TO_IMP_QSTN':
            return {
                ...state,
                item1: [...state.item1,action.item],
            };
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }

        default:
            return state;
    }
};

export default reducer;