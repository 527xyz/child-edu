import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import coverHide from './store/reducers/coverHide'

const rootReducers=combineReducers({coverHide})
const store=createStore(rootReducers,applyMiddleware(thunk))
export default store