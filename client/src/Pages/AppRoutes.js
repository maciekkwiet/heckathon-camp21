import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import { JoinToSessoin } from './JoinToSession/JoinToSession';
import { AddName } from './AddName/AddName';
import { MainPanel } from './MainPanel/MainPanel';
import { DailyPage } from './Daily/Daily';
import { Menu } from './Menu/Menu';
import { RetroPage } from './Retro/Retro';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/daily">
          <DailyPage />
        </Route>
        <Route path="/menu">
          <Menu />
        </Route>
        <Route path="/retro">
          <RetroPage />
        </Route>
        <Route path="/room/:roomId/join">
          <AddName />
        </Route>
        <Route path="/room/:roomId">
          <MainPanel />
        </Route>
        <Route path="/">
          <JoinToSessoin />
        </Route>
        <Redirect to={'/'} />
      </Switch>
    </BrowserRouter>
  );
};
