import { ConnectedRouter } from 'connected-react-router'
import 'firebase/analytics'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import {
  createFirebaseInstance,
  ReactReduxFirebaseProvider,
} from 'react-redux-firebase'
import { Route, Switch } from 'react-router'
import { createFirestoreInstance } from 'redux-firestore'
import { PersistGate } from 'redux-persist/integration/react'
import { configureStoreAndPersistor } from './common/redux'
import { history } from './common/redux/store'
import './index.scss'
import { AuthRedirectContainer } from './modules/Auth'
import { BrowseTemplateContainer } from './modules/BrowseTemplates'
import {
  EditGatheringContainer,
  GatheringsContainer,
  ViewGatheringContainer,
} from './modules/Gatherings'
import { HomeContainer } from './modules/Home'
import { PrivacyPolicyContainer } from './modules/PrivacyPolicy'
import {
  CreateTemplateContainer,
  UserTemplatesContainer,
} from './modules/UserTemplates'
import {
  UtilizeTemplateContainer,
  ViewTemplateContainer,
} from './modules/ViewUtilizeTemplate'
import { Routes } from './routes'
import * as serviceWorker from './serviceWorker'

const firebaseConfig = {
  apiKey: process.env['REACT_APP_FIREBASE_API_KEY'] as string,
  authDomain: process.env['REACT_APP_FIREBASE_AUTH_DOMAIN'] as string,
  databaseURL: process.env['REACT_APP_FIREBASE_DATABASE_URL'] as string,
  projectId: process.env['REACT_APP_FIREBASE_PROJECT_ID'] as string,
  storageBucket: process.env['REACT_APP_FIREBASE_STORAGE_BUCKET'] as string,
  messagingSenderId: process.env[
    'REACT_APP_FIREBASE_MESSAGING_SENDER_ID'
  ] as string,
  appId: process.env['REACT_APP_FIREBASE_APP_ID'] as string,
  measurementId: process.env['REACT_APP_FIREBASE_MEASUREMENT_ID'] as string,
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
firebase.analytics()

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={storeAndPersistor.store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <PersistGate loading={null} persistor={storeAndPersistor.persistor}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact path="/" component={HomeContainer} />
            <Route exact path="/home" component={HomeContainer} />
            <Route
              exact
              path="/terms-and-conditions"
              component={PrivacyPolicyContainer}
            />
            <Route
              exact
              path="/create-template"
              component={CreateTemplateContainer}
            />
            <Route
              exact
              path="/user-templates"
              component={UserTemplatesContainer}
            />
            <Route
              exact
              path="/browse-activities"
              component={BrowseTemplateContainer}
            />
            <Route
              exact
              path="/activity/:id"
              component={ViewTemplateContainer}
            />
            <Route
              path="/edit-send-invites/:id"
              component={UtilizeTemplateContainer}
            />
            <Route path={Routes.Gatherings} component={GatheringsContainer} />
            <Route
              path={`${Routes.ViewGathering}/:id`}
              component={ViewGatheringContainer}
            />
            <Route
              path={`${Routes.EditGathering}/:id`}
              component={EditGatheringContainer}
            />
            <Route path="/auth/*" component={AuthRedirectContainer} />
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
