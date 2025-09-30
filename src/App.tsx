import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Home } from './pages/Home';
import { Listings } from './pages/Listings';
import PropertyDetails from './pages/PropertyDetails';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Blog } from './pages/Blog';
import AdminLogin from './pages/AdminLogin';
import AdminRoutes from './pages/admin';
import ThreeDemo from './pages/ThreeDemo';
import { Toaster } from 'react-hot-toast';

// Simple auth context (replace with your actual auth implementation)
const useAuth = () => {
  // In a real app, this would check for a valid auth token or session
  const isAuthenticated = localStorage.getItem('admin_token') !== null;
  return { isAuthenticated };
};

// Protected route component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    // Redirect to login if not authenticated
    return <Navigate to="/admin/login" replace />;
  }
  
  return <>{children}</>;
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-ivory text-jet">
        <Toaster position="top-right" />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={
            <>
              <Navigation />
              <Home />
            </>
          } />
          <Route path="/listings" element={
            <>
              <Navigation />
              <Listings />
            </>
          } />
          <Route path="/property/:id" element={
            <>
              <Navigation />
              <PropertyDetails />
            </>
          } />
          <Route path="/about" element={
            <>
              <Navigation />
              <About />
            </>
          } />
          <Route path="/contact" element={
            <>
              <Navigation />
              <Contact />
            </>
          } />
          <Route path="/blog" element={
            <>
              <Navigation />
              <Blog />
            </>
          } />
          <Route path="/three-demo" element={
            <>
              <Navigation />
              <ThreeDemo />
            </>
          } />
          
          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route 
            path="/admin/*" 
            element={
              <ProtectedRoute>
                <AdminRoutes />
              </ProtectedRoute>
            } 
          />
          
          {/* 404 Route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;