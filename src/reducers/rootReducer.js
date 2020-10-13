import {combineReducers} from 'redux'
import adminReducer from './adminReducer'
import adminMReducer from './adminMreducer'

const rootReducer = combineReducers({
    adminL: adminReducer,
    adminM: adminMReducer
})

export default rootReducer