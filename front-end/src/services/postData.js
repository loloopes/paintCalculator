import axios from 'axios';

export default async function postData(info, setCans, setError) {
  try {
    setError('');
    const result = await axios.post(`http://localhost:${process.env.REACT_APP_PORT}/area`, info);

    const { data: { payload } } = result;
    if (payload) setCans(payload);

    const { data: { error } } = result;
    if (error) setError(error.message);
  } catch (err) {
    console.log(err);
  }
}
