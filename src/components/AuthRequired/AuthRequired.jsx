import React from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { useAuth } from './../../context/auth/authContext';
function AuthRequired({ children }) {
  const navigate = useNavigate();
  const { user } = useAuth();

  return user.token !== null ? children : <Navigate to="/login" />;
}

export default AuthRequired;
