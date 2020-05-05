// react Hot loader
import 'react-hot-loader/patch';

import { AppContainer } from 'react-hot-loader';
// Import React
import React from  'react';

// Import ReactDOM
import ReactDOM from  'react-dom';

import App from './src/App';

//‌ Import bootstrap css files


const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app')
  );
}

render(App)

// Mount React App
if ( module.hot ){
  module.hot.accept('./src/App.js' , () => {
    const NextApp = require('./src/App.js').default
    render(NextApp)
  })
}
