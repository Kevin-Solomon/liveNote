import axios from 'axios';
export const restoreArchiveNote = async (_id, token, noteDispatch) => {
  try {
    const response = await axios({
      method: 'post',
      url: `/api/archives/restore/${_id}`,
      headers: { authorization: token },
    });
    noteDispatch({ type: 'RESTORE_ARCHIVE_NOTE', payload: response.data });
  } catch (err) {
    console.log(err.response);
  }
};
