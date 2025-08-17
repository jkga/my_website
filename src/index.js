import React, { Suspense } from 'react';
import { Loader } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import './index.css'
import * as serviceWorker from './serviceWorker';

const HomePage = React.lazy(() => import ('./pages/Home'))

import ('react-dom').then(ReactDOM => {
  ReactDOM.render(
    <React.StrictMode>
      <Suspense fallback={<div><Loader active inline='centered' style={{top: '40vh'}}>Starting Awesomeness</Loader></div>}>
        <HomePage />
      </Suspense>
    </React.StrictMode>,
    document.getElementById('root')
  )
})


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
