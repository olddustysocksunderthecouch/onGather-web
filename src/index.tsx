import { ConnectedRouter } from 'connected-react-router'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router'
import { PersistGate } from 'redux-persist/integration/react'
import { configureStoreAndPersistor } from './common/redux'
import { history } from './common/redux/store'
import './index.scss'
import { CreateTemplateContainer } from './modules/UserTemplates'
import { HomeContainer } from './modules/Home'
import { PrivacyPolicyContainer } from './modules/PrivacyPolicy'
import * as serviceWorker from './serviceWorker'

const storeAndPersistor = configureStoreAndPersistor()
const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={storeAndPersistor.store}>
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
  </Provider>,
  rootElement,
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
