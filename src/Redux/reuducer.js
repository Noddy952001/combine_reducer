import {Add_Product ,Selected_Product} from  "./constant"

export const setProductRed = (state = [],{type,payload}) => {
    switch(type){
        case Add_Product :
        return payload

        default :  return state;
       
    }
}

export const getOneProduct = (state = {},{type,payload}) => {
    switch(type){
        case Selected_Product :
        return payload

        default :  return state;
       
    }
}