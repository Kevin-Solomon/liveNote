import axios from 'axios';
export const deleteArchiveNote = async (_id, token, noteDispatch) => {
  const response = await axios({
    method: 'delete',
    url: `/api/archives/delete/${_id}`,
    headers: { authorization: token },
  });
  noteDispatch({
    type: 'DELETE_ARCHIVE_NOTE',
    payload: response.data.archives,
  });
};
