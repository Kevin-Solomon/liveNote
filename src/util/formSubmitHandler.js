import axios from 'axios';
const formSubmitHandler = async (setUser, route, userData) => {
  try {
    const { data, status } = await axios.post(route, userData);
    console.log(status);
    if (status === 200 && route.includes('login')) {
      setUser({
        user: data.foundUser,
        token: data.encodedToken,
      });
      return true;
    } else if (status === 201 && route.includes('signup')) {
      setUser({
        user: data.createdUser,
        token: data.encodedToken,
      });
      return true;
    } else {
      alert('Something went wrong');
      return false;
    }
  } catch (err) {
    console.error('ERROR IN LOGIN', err.response);
    const { status, data } = err.response;
    if (status === 404) {
      alert('USER NOT FOUND');
      return false;
    } else if (status === 401) {
      alert('USER Credentials are wrong');
      return false;
    } else if (status === 422) {
      alert('USER Alredy present');
    } else {
      console.log('default');
      return false;
    }
  }
};
export { formSubmitHandler };
