import axios from 'axios';
export const deleteArchiveNote = async (_id, token, noteDispatch) => {
  console.log('in delete aarchive function');
  const response = await axios({
    method: 'delete',
    url: `/api/archives/delete/${_id}`,
    headers: { authorization: token },
  });
  console.log(response);
  noteDispatch({
    type: 'DELETE_ARCHIVE_NOTE',
    payload: response.data.archives,
  });
};
