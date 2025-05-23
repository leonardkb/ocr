import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Markdown from './Component/Markdown';
import About from './Pages/About';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/ocr" element={<Markdown />} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </Router>
  );
}

export default App;
