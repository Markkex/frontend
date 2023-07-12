import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Home from "./pages/Home";
import PostJob from "./pages/PostJob";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hire-remotely" element={<PostJob />} />
          <Route path="/sign-in" element={<PostJob />} />
          <Route path="/sign-up" element={<PostJob />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
