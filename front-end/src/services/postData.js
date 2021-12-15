import axios from 'axios';

export default async function postData(info, setArea) {
  try {
    const { data: { total } } = await axios.post('http://localhost:3001/area', info);
    setArea(total);
    console.log(total);
  } catch (err) {
    console.log(err);
  }
}
