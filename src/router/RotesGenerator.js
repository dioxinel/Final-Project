import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

export const RotesGenerator = ({config}) => (
  <BrowserRouter>
    <Switch>
      {
        config.map(({layout: Layout, routes}) => (
          <Route 
            key={routes[0][0]}
            path={routes.map(([firstEl])=>firstEl)}
          >
            <Layout>
              <Switch>
                {routes.map(([path, Component, exact]) => (
                  <Route {...{path, exact}} key={path}>
                    <Component />
                  </Route>
                ))}
              </Switch>
            </Layout>
          </Route>
        ))

      }
    </Switch>
  </BrowserRouter>
)
