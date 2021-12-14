import axios from 'axios';

export default async function postData(info) {
  try {
    const res = await axios.post('http://localhost:3001/ping', info);
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}
