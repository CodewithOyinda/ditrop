import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from "./pages/About";
import Blog from "./pages/Blog";
import DitropSme from "./pages/DitropSme";




function App() {
  

  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/ditropsme" element={<DitropSme/>} />
        {/* <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router> 
    </>
  )
}

export default App
