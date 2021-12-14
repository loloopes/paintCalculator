import axios from 'axios';

export default async function postData(info) {
  try {
    await axios.post('http://localhost:3001/area', info);
  } catch (err) {
    console.log(err);
  }
}
