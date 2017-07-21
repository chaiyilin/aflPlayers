import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import { createLogger } from 'redux-logger'

import ratings from './ratings.json'

const middleware = [];
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger())
}

export const store = createStore(() => ratings, ratings, applyMiddleware(...middleware));

const Index = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

export default Index
