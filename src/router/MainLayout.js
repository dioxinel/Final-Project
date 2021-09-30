import { BrowserRouter, Switch, Route} from "react-router-dom";
import { Register } from "../scenes/Auth/Register";

export const MainLayout = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={'/'}>
        <div>Home page</div>
      </Route>
      <Route exact path={'/auth/register'}>
        <Register />
      </Route>
    </Switch>
  </BrowserRouter>
)