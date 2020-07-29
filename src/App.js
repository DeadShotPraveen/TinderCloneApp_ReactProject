import React from 'react';
import Header from "./components/header"
import TinderCards from "./components/TinderCards"
import SwipeButtons from "./components/SwipeButtons"
import ChatPage from "./components/ChatPage"
import Chats from "./components/Chats"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className="App">
      
      <Router>
      <Switch>
          <Route path="/chat/:person">
             <Header backButton="/chat" />
             <ChatPage />
          </Route>
          <Route path="/chat">
             <Header backButton="/" />
             <Chats />
          </Route>
          <Route path="/">
              <Header />
              <TinderCards />
              <SwipeButtons />
          </Route>
        </Switch>
       </Router>
    </div>
  );
}

export default App;
