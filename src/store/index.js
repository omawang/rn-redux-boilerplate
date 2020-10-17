import { createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const initialState = {}

const middleware = [thunk]

const devCompose = () => composeWithDevTools(applyMiddleware(...middleware))
const prodCompose = () => compose(applyMiddleware(...middleware))

const store = createStore(
  rootReducer,
  initialState,
  process.env.NODE_ENV === 'development' ? devCompose() : prodCompose(),
)

export default store
