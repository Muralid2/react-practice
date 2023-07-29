import logo from './logo.svg';
import './App.css';
import page1 from"./components/page1";
import page2 from"./components/page2"; 
import page3 from"./components/page3";
import { BrowserRouter as Router, Route ,Link, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
<Router>
  <Routes>
  <Route exact path="/" element={<h1>Home Page</h1>} />
    <Route exact path="page1" element={<page1 />} />
    <Route exact path="page2" element={<page2 />} />
    <Route exact path="page3" element={<page3 />} />
  </Routes>
  <div className="list">
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="page1">Page 1</Link></li>
    <li><Link to="page2">Page 2</Link></li>
    <li><Link to="page3">Page 3</Link></li>
  </ul>
</div>
</Router>
    </div>
  );
}

export default App;
