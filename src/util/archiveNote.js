import axios from 'axios';
export const archiveNote = async (_id, value, token, noteDispatch) => {
  try {
    const options = { headers: { authorization: token } };
    const response = await axios.post(
      `/api/notes/archives/${_id}`,
      { note: { value } },
      options
    );
    noteDispatch({ type: 'ARCHIVE_NOTE', payload: response.data });
  } catch (err) {
    console.error(err);
  }
};
