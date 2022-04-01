import {Add_Product , Selected_Product} from  "./constant"

export const setProduct = (data) => {

    return {
        type : Add_Product,
        payload : data
    }
}

export const getSingleData = () => {
    return {
        type : Selected_Product,
        payload : data

    }
}