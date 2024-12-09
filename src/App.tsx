import React from 'react';
import Info from './Info';
import WeFit from './WeFit';
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
// import store from "./Kanbas/store";
// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
      <HashRouter>
      {/* <Provider store={store}> */}
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="Info" />} />
            <Route path="/Info/*" element={<Info />} />
            <Route path="/wefit/*" element={<WeFit />} />

          </Routes>
        </div>
     {/* </Provider> */}
    </HashRouter>
  );
}

export default App;
