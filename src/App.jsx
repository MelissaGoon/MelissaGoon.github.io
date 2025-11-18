
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from './components/Navbar'
import { Home, Projects, About, Contact, Resume, Other } from './pages'
const App = () => {
    return (
        <main className="bg-slate-300/20">
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path='/resume' element={<Resume />} />
                    <Route path='/other' element={<Other />} />
                </Routes>
            </Router>
        </main>
    )
}
export default App
