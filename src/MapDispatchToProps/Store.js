import {createStore} from 'redux';
import reducers from './Reducers/CombineReducers'

const store = createStore(reducers)

export default store
