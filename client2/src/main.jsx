import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { reducers } from './reducers';
import { Provider } from 'react-redux';
import { applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { legacy_createStore as createStore } from 'redux';
import './index.css'

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
);