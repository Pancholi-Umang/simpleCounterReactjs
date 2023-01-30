import counterReducer from './updown'
import { combineReducers } from 'redux'

const RootReducered = combineReducers({
    counterReducer, 
})

export default RootReducered;
