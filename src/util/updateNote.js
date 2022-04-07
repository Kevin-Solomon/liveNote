import axios from 'axios';
export const updateNote = async (_id, value, token, noteDispatch) => {
  try {
    const options = { headers: { authorization: token } };
    const response = await axios.post(
      `/api/notes/${_id}`,
      {
        note: {
          text: value.text,
          backgroundColor: value.backgroundColor,
          tags: value.tags,
          createdAt: new Date().toLocaleString(),
          priority: value.priority,
        },
      },
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
