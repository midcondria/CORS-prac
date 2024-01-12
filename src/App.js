import { Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <Link to="/">
        <h1>header</h1>
      </Link>

      <div className="body">
        <Outlet />
      </div>

      <h2>footer</h2>
    </div>
  );
}

export default App;
