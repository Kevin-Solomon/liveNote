import React from 'react';
import { useForm } from '../../hooks';
import { Link, Navigate } from 'react-router-dom';
import { useAuth } from '../../context/auth/authContext';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { formSubmitHandler } from '../../util';
export const Login = () => {
  const [userInput, setUserInput] = useForm({ email: '', password: '' });
  const { setUser } = useAuth();
  const navigate = useNavigate();
  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>
        <form
          onSubmit={async e => {
            e.preventDefault();
            const isLoggedIn = await formSubmitHandler(
              setUser,
              '/api/auth/login',
              userInput
            );
            console.log(isLoggedIn);
            isLoggedIn ? navigate('/') : alert('Something went wrong');
          }}
        >
          <label htmlFor="email-input"> Email Address </label>
          <input
            value={userInput.email}
            id="email-input"
            className="form-input"
            type="text"
            name="email"
            onChange={e => setUserInput(e)}
          />
          <label htmlFor="password-input"> Password </label>
          <input
            value={userInput.password}
            name="password"
            id="password-input"
            className="form-input"
            type="text"
            onChange={e => setUserInput(e)}
          />
          <div className="help-container">
            <input type="radio" />
            <label>Remember Me ?</label>
          </div>
          <button className="btn primary-btn" type="submit">
            Login
          </button>
          <Link to="/signup">Don't Have an Account</Link>
        </form>
      </div>
    </div>
  );
};
