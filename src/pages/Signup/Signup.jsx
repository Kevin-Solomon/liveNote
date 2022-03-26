import React from 'react';
import { useForm } from '../../hooks';
import { Link, useNavigate } from 'react-router-dom';
import { formSubmitHandler } from '../../util';
import { useAuth } from '../../context/auth/authContext';
export const Signup = () => {
  const navigate = useNavigate();
  const [userInput, setUserInput] = useForm({
    name: '',
    email: '',
    password: '',
  });
  const { user, setUser } = useAuth();
  console.log(user);
  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Sign Up</h2>
        <form
          onSubmit={async e => {
            e.preventDefault();
            const isSignedUp = await formSubmitHandler(
              setUser,
              '/api/auth/signup',
              userInput
            );
            isSignedUp ? navigate('/') : alert('Something went wrong');
          }}
        >
          <label htmlFor="name"> Name </label>
          <input
            id="name"
            name="name"
            value={userInput.name}
            onChange={e => setUserInput(e)}
            className="form-input"
            type="text"
          />
          <label htmlFor="email"> Email Address </label>
          <input
            id="email"
            name="email"
            value={userInput.email}
            onChange={e => setUserInput(e)}
            className="form-input"
            type="email"
          />
          <label htmlFor="password"> Password </label>
          <input
            id="password"
            name="password"
            value={userInput.password}
            onChange={e => setUserInput(e)}
            className="form-input"
            type="password"
          />

          <button className="btn primary-btn" type="submit">
            Sign Up
          </button>
          <p>
            <Link to="/login">Already have an Account ?</Link>
          </p>
        </form>
      </div>
    </div>
  );
};
