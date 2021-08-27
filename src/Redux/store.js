import { applyMiddleware, createStore} from 'redux'
import logger from 'redux-logger'
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'

import reducers from './Reducers'

const persistConfig = {
    key : 'root',
    storage,
    whitelist : ['UserLogin','UserForgotPasswordVerify']
}

const persistedReducer = persistReducer(persistConfig, reducers)

const configureStore = () =>{
    let store = createStore(persistedReducer, applyMiddleware(thunk,logger))
    let persistor = persistStore(store)
    return{store, persistor}
}

export default configureStore