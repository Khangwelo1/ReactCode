import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './stylesheet/styles.css';
import { Home } from './components/Home';
import { AddMember } from './components/AddMember';
import { EditMember } from './components/EditMember';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/add" component={AddMember} exact />
        <Route path="/edit/:id" component={EditMember} exact />
      </Switch>
    </GlobalProvider>
  );
}

export default App;