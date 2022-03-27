import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from './../context/auth/authContext';
export function useNotes() {
  const { user } = useAuth();
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get('/api/notes', {
          headers: {
            authorization: user.token,
          },
        });
        setNotes([...response.data.notes]);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, []);
  return [notes];
}
