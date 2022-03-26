import React, { useEffect, useState } from 'react';
import { NoteCard } from '../../../../components/NoteCard/NoteCard';
import axios from 'axios';
import { useAuth } from '../../../../context/auth/authContext';
export const NoteContainer = () => {
  const [notes, setNotes] = useState([]);
  const { user } = useAuth();
  console.log(user);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get('/api/notes', {
          headers: {
            authorization: user.token,
          },
        });
        console.log(response.data.notes);
        setNotes([...response.data.notes]);
      } catch (err) {
        console.log(err.response);
      }
    };
    getProducts();
  });
  return (
    <section className="note-wrapper">
      <div className="note-card">
        <h2>Title</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
          perferendis!
        </p>
      </div>
      <NoteCard />
    </section>
  );
};
