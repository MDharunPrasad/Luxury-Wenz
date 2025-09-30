import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Home } from './pages/Home';
import { Listings } from './pages/Listings';
import PropertyDetails from './pages/PropertyDetails';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Blog } from './pages/Blog';
import { AdminLogin } from './pages/AdminLogin';
import { AdminPanel } from './pages/AdminPanel';
import ThreeDemo from './pages/ThreeDemo';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-ivory text-jet">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/panel" element={<AdminPanel />} />
          <Route path="/three-demo" element={<ThreeDemo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;