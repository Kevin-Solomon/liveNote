import { useState } from 'react';

const useForm = initialState => {
  const [userInput, setUserInput] = useState(initialState);
  const changeHandler = e => {
    setUserInput(prevUser => ({
      ...prevUser,
      [e.target.name]: e.target.value,
    }));
  };
  return [userInput, changeHandler];
};

export { useForm };
