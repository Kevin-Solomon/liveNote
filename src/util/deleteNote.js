import axios from 'axios';

export const deleteNote = async (_id, token, noteDispatch) => {
  const options = {
    headers: {
      authorization: token,
    },
  };
  const response = await axios.delete(`/api/notes/${_id}`, options);
  noteDispatch({ type: 'DELETE_NOTE', payload: response.data.notes });
  console.log(response);
};
