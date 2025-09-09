import React from 'react';
import { useAuth } from '@/hooks/useAuth';
import AdminLogin from '@/components/admin/AdminLogin';
import AdminDashboard from '@/components/admin/AdminDashboard';

const Admin = () => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-brand-black flex items-center justify-center">
        <div className="text-brand-white">Carregando...</div>
      </div>
    );
  }

  return user ? <AdminDashboard /> : <AdminLogin />;
};

export default Admin;