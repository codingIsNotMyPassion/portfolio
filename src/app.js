import { Routes, Route } from "react-router-dom";
import { Home, Skills, Projects } from "./pages/pagesExport"
import Navbar from './components/navbar'
import "./app.css"

function App() {
  return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="skills" element={<Skills />} />
          <Route path="projects" element={<Projects />} />
        </Routes>
        {/* <Footer /> */}
    </div>
  );
}
export default App;
