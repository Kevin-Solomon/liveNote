import React from 'react';
import { useForm } from '../../hooks';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/auth/authContext';
import './Login.css';
import { formSubmitHandler } from '../../util';
export const Login = () => {
  const [userInput, setUserInput] = useForm({ email: '', password: '' });
  const { setUser } = useAuth();
  console.log(user);
  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>
        <form
          onSubmit={e => {
            e.preventDefault();
            formSubmitHandler(setUser, '/api/auth/login', userInput);
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
          <button className="btn primary-btn">
            Login With Test Credentials
          </button>
          <Link to="/signup">Don't Have an Account</Link>
        </form>
      </div>
    </div>
  );
};
