import axios from 'axios';

export default async function postData(info, setCans, setError) {
  try {
    setError('');
    const result = await axios.post('http://localhost:3001/area', info);

    console.log(result.data);

    const { data: { data } } = result;
    if (data) setCans(data);

    const { data: { error: { message } } } = result;

    if (message) setError(message);
  } catch (err) {
    console.log(err);
  }
}
