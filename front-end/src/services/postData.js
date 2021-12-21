import axios from 'axios';

export default async function postData(walls, setCans, setError) {
  try {
    setError('');
    const result = await axios.post('http://localhost:3001/area', walls);

    const { data } = result;
    if (data) setCans(data);

    const { data: { error: { message } } } = result;

    if (message) setError(message);
  } catch (err) {
    console.log(err);
  }
}
