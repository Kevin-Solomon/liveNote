import axios from 'axios';

export const deleteNote = async (_id, token, noteDispatch) => {
  try {
    const options = {
      headers: {
        authorization: token,
      },
    };
    const response = await axios.delete(`/api/notes/${_id}`, options);
    if (response.status === 200) {
      noteDispatch({ type: 'DELETE_NOTE', payload: response.data.notes });
    } else {
      alert('something went wrong');
    }
  } catch (err) {
    console.log(err);
  }
};
