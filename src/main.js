import React from 'react'
import ReactDOM from 'react-dom'  //要先引用React
import { Provider } from 'react-redux'  //要先引用React
import Routes from './containers/routes.js'
import App from './containers/App.js'
import store from './store/index.js'

import "./public/css/index.scss"

ReactDOM.render( 
    <Provider store={store}>
        <Routes />
    </Provider>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept();
}
