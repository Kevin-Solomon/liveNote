import axios from 'axios';
const saveNoteHandler = async (token, value) => {
  console.log(token);
  const options = {
    headers: {
      authorization: token,
    },
  };
  try {
    const response = await axios.post(
      '/api/notes',
      { note: { value, tags: ['asdsd'] } },
      options
    );
    console.log(response.data);
  } catch (err) {
    console.log(err.response.headers);
  }
};
export { saveNoteHandler };
