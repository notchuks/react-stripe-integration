import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Pay from "./Pay";
import Success from "./Success";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/pay" element={<Pay />}></Route>
          <Route path="/success" element={<Success />}></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
