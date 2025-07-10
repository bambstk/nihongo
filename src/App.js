import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Reviser from "./pages/Reviser";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tests" element={<Reviser />} />
      </Routes>
    </Router>
  );
}

export default App;
