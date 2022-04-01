import {combineReducers, createStore} from  "redux"
import {getOneProduct, setProductRed} from "./reuducer"

const  singleReducer = combineReducers({
    getAllProduct : setProductRed,
    getOneProduct,
})
export const store = createStore(singleReducer);
