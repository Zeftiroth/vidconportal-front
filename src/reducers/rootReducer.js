import {combineReducers} from 'redux'
import adminReducer from './adminReducer'
import adminMReducer from './adminMreducer'
import adminAddReducer from './adminAddReducer'
import userReducer from './user/userReducer'
import exhibitorReducer from './exhibitor/exhibitorReducer'

const rootReducer = combineReducers({
    adminL: adminReducer,
    adminM: adminMReducer,
    adminAdd: adminAddReducer,
    userInfo: userReducer,
    exhiInfo: exhibitorReducer,
})

export default rootReducer