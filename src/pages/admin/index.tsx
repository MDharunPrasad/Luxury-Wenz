import { Routes, Route, Navigate } from 'react-router-dom';
import AdminLayout from '../../components/admin/AdminLayout';
import Dashboard from './Dashboard';
import Properties from './Properties';
import PropertyForm from './PropertyForm';

// This component will be rendered for all admin routes
const AdminRoutes = () => {
  return (
    <AdminLayout>
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="properties" element={<Properties />} />
        <Route path="properties/new" element={<PropertyForm />} />
        <Route path="properties/:id" element={<PropertyForm />} />
        <Route path="properties/:id/edit" element={<PropertyForm />} />
        <Route path="*" element={<Navigate to="/admin" replace />} />
      </Routes>
    </AdminLayout>
  );
};

export default AdminRoutes;
