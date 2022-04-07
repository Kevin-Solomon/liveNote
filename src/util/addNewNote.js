import axios from 'axios';
export const addNewNote = async (value, token, noteDispatch) => {
  console.log('in add new note');
  console.log(value);
  try {
    const options = { headers: { authorization: token } };
    const response = await axios.post(
      '/api/notes',
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
      alert('Something went wrong');
    }
  } catch (err) {
    console.log(err.response);
  }
};
