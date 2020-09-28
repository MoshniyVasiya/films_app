import React from 'react';
import {
    Route,
    Switch,
} from 'react-router-dom';
import Main from "../components/Main/Main";
import Page from "../components/Page/Page";
import { AppProvider } from "../context/appState";

function App() {
  return (
      <AppProvider>
          <>
              <Switch>
                  <Route path={`/`} exact component={Main}/>
                  <Route path={`/film/:id`} exact component={Page}/>
                  <Route render={() => (<p>Not found</p>)}/>
              </Switch>
          </>
      </AppProvider>
  );
}

export default App;
