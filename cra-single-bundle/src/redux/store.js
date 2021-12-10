import {createStore, applyMiddleware} from 'redux'

import rootReducer from './rootreducer'

const middleware = []

let store 

try {
    store = createStore(rootReducer, applyMiddleware(...middleware))
    
} catch (error) {
    console.log('redux error', error)
}

export default store