export function useNotes() {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get('/api/notes', {
          headers: {
            authorization: user.token,
          },
        });
        console.log(response.data.notes);
        setNotes([...response.data.notes]);
      } catch (err) {
        console.log(err.response);
      }
    };
    getProducts();
  });
  return [notes];
}
