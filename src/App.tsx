import { Routes, Route } from "react-router-dom";

import { routes } from "routes/routes";
import "./App.css";

function App() {
  return (
    <div className="App">
      {routes.map((route) => (
        <Routes>
          <Route path={route.path} element={route.element} />
        </Routes>
      ))}
    </div>
  );
}

export default App;
