import axios from 'axios';
export const addNewNote = async (value, token, noteDispatch) => {
  try {
    const options = { headers: { authorization: token } };
    const response = await axios.post(
      '/api/notes',
      { note: { value } },
      options
    );
    noteDispatch({ type: 'ADD_NEW_NOTE', payload: response.data.notes });
  } catch (err) {
    console.log(err.response);
  }
};
