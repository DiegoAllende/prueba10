import React from 'react'
import { Container } from '@material-ui/core'
import { Route, Switch, Redirect } from 'react-router-dom'
import { DashboardScreen } from 'views/pages/DashboardScreen'
import { HeaderComp } from 'components/header/HeaderComp'
import { NavComp } from 'components/nav/NavComp'
import { HomologadasScreen } from 'views/pages/homologadas/HomologadasScreen'
import { ParametrosScreen } from 'views/pages/parametros/ParametrosScreen'
import { DimensionesScreen } from 'views/pages/dimensiones/DimensionesScreen'

// const UsuarioPage = lazy(() => import('views/pages/mantenimiento/UsuarioPage'));
// const FormaPagoPage = lazy(() => import('views/pages/mantenimiento/FormaPagoPage'));

export const PagesRouter = () => {
  console.log("routerPages");

  return (
    <div>
      {/* <Suspense fallback={null}> */}
      <Container maxWidth="lg" className="content-pages">
        <HeaderComp />
        <NavComp />
        <Switch>
          <Route exact path="/" component={DashboardScreen} />
          <Route exact path="/homologadas" component={HomologadasScreen} />
          <Route exact path="/parametros" component={ParametrosScreen}/>
          <Route exact path="/dimensiones" component={DimensionesScreen}/>
          <Route exact path="/visor">
            <div>
              visor
            </div>
          </Route>
          <Redirect to="/" />
        </Switch>
      </Container>
      {/* </Suspense> */}
    </div>
  )
}
