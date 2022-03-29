import axios from 'axios';
export const addNewNote = async (value, token, noteDispatch) => {
  try {
    const options = { headers: { authorization: token } };
    const response = await axios.post(
      '/api/notes',
      { note: { value, createdAt: new Date().toLocaleString() } },
      options
    );
    if (response.status === 201) {
      noteDispatch({ type: 'ADD_NEW_NOTE', payload: response.data.notes });
    } else {
      alert('Something went wrong');
    }
  } catch (err) {
    console.log(err.response);
  }
};
