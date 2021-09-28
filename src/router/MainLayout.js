import { BrowserRouter, Switch, Route} from "react-router-dom";

export const MainLayout = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={'/'}>
        <div>Home page</div>
      </Route>
    </Switch>
  </BrowserRouter>
)