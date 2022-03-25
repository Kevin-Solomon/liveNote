import axios from 'axios';

const formSubmitHandler = async (setUser, route, userData) => {
  try {
    const { data, status } = await axios.post(route, userData);
    if (status === 200) {
      setUser({
        user: data.foundUser,
        token: data.encodedToken,
      });
    } else if (status === 404) {
      console.log('USER NOT FOUND');
    } else if (status === 401) {
      console.log('USER Credentials are wrong');
    } else {
      console.log('default');
    }
  } catch (err) {
    console.error('ERROR IN LOGIN', err);
  }
};
export { formSubmitHandler };
