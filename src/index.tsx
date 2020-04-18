import { ConnectedRouter } from 'connected-react-router'
import * as firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import {
  createFirebaseInstance,
  ReactReduxFirebaseProvider,
} from 'react-redux-firebase'
import { createFirestoreInstance } from 'redux-firestore' 
import { Route, Switch } from 'react-router'
import { PersistGate } from 'redux-persist/integration/react'
import { configureStoreAndPersistor } from './common/redux'
import { history } from './common/redux/store'
import './index.scss'
import { HomeContainer } from './modules/Home'
import { PrivacyPolicyContainer } from './modules/PrivacyPolicy'
import { CreateTemplateContainer } from './modules/UserTemplates'
import * as serviceWorker from './serviceWorker'

const firebaseConfig = {
  apiKey: 'AIzaSyBcCau-poIS1r0eTp5zGkfMZMt7O9ForM4',
  authDomain: 'ongather-b1834.firebaseapp.com',
  databaseURL: 'https://ongather-b1834.firebaseio.com',
  projectId: 'ongather-b1834',
  storageBucket: 'ongather-b1834.appspot.com',
  messagingSenderId: '41626053541',
  appId: '1:41626053541:web:c4ee1bcae9bda62a45964c',
  measurementId: 'G-3KXMD0FGZ6',
}

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true,
  enableClaims: true,
}
const storeAndPersistor = configureStoreAndPersistor()

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: storeAndPersistor.store.dispatch,
  createFirebaseInstance,
  createFirestoreInstance,
}

firebase.initializeApp(firebaseConfig)
firebase.firestore()

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={storeAndPersistor.store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <PersistGate loading={null} persistor={storeAndPersistor.persistor}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact path="/" component={HomeContainer} />
            <Route exact path="/Home" component={HomeContainer} />
            <Route
              exact
              path="/Privacy-Policy"
              component={PrivacyPolicyContainer}
            />
            <Route
              exact
              path="/Create-Template"
              component={CreateTemplateContainer}
            />
            <Route render={(): JSX.Element => <div>404 Not Found</div>} />
          </Switch>
        </ConnectedRouter>
      </PersistGate>
    </ReactReduxFirebaseProvider>
  </Provider>,
  rootElement,
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
