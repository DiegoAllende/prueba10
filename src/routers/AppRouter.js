import React from 'react'
import { HashRouter, Switch, Redirect } from 'react-router-dom'
// import { AuthContext } from '../hooksReact/context/AuthContext'
import { AuthRouter } from './AuthRouter'
import { PagesRouter } from './PagesRouter'
import { PrivateRouter } from './PrivateRouter'
import { PublicRouter } from './PublicRouter'
export const AppRouter = () => {
  console.log("routerApp");
  // const { auhtState } = useContext(AuthContext)

  return (
    <HashRouter>
      <div>
        <Switch>
          <PublicRouter isAuthenticated={true} path="/auth" component={AuthRouter} />
          <PrivateRouter isAuthenticated={true} path="/" component={PagesRouter} />
          <Redirect to="/auth/login" />
          {/* <Route exact path="/404" component={View404} />
          <Route exact path="*" render={() => {
            return <Redirect to={auhtState.logged ? '/' : '/auth/login'} />
          }} /> */}
          {/* <Redirect path="/**" to="/" /> */}
        </Switch>
      </div>
    </HashRouter>
  )
}
