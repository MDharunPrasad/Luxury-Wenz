import { Routes, Route, Navigate } from 'react-router-dom';
import AdminLayout from '../../components/admin/AdminLayoutNew';
import PropertiesNew from './PropertiesNew';
import PropertyFormNew from './PropertyFormNew';

// This component will be rendered for all admin routes
const AdminRoutes = () => {
  return (
    <AdminLayout>
      <Routes>
        <Route index element={<Navigate to="/admin/properties" replace />} />
        <Route path="properties" element={<PropertiesNew />} />
        <Route path="properties/new" element={<PropertyFormNew />} />
        <Route path="properties/:id" element={<PropertyFormNew />} />
        <Route path="properties/:id/edit" element={<PropertyFormNew />} />
        <Route path="*" element={<Navigate to="/admin/properties" replace />} />
      </Routes>
    </AdminLayout>
  );
};

export default AdminRoutes;
