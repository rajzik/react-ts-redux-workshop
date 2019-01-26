import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'
import rootReducer from '@reducers';
import rootSaga from '@sagas';



export default function configureStore() {
    // create the saga middleware
    const sagaMiddleware = createSagaMiddleware()

    const composeEnhancers = composeWithDevTools({});
    // mount it on the Store
    const store = createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(sagaMiddleware))
    )

    // then run the saga
    sagaMiddleware.run(rootSaga)
    return store;
}
