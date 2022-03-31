import axios from 'axios';
export const updateNote = async (_id, value, token, noteDispatch) => {
  try {
    const options = { headers: { authorization: token } };
    const response = await axios.post(
      `/api/notes/${_id}`,
      { note: { value, createdAt: new Date().toLocaleString() } },
      options
    );
    if (response.status === 201) {
      noteDispatch({ type: 'ADD_NEW_NOTE', payload: response.data.notes });
    } else {
      alert('something went wrong');
    }
  } catch (err) {
    console.log(err.response);
  }
};
