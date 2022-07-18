import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import routeList from "./Router/routeList";
import Layout from "./Layout";

function App() {
  return (
    <div className="App" data-testid="app">
      <Routes>
        {routeList.map((item, key) => {
          return (
            <Route
              path={item.path}
              key={key}
              element={<Layout route={item} />}
            />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
