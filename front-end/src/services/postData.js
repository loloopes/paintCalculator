import axios from 'axios';

export default async function postData(info, setCans, setError) {
  try {
    const result = await axios.post('http://localhost:3001/area', info);

    console.log(result);

    const { data: { total } } = result;
    if (total) setCans(total);

    const { data: { error: message } } = result;

    if (message) setError(message);
  } catch (err) {
    console.log(err);
  }
}
