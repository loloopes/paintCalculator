import axios from 'axios';

export default async function postData(info, setCans) {
  try {
    // const { data: { total } } = await axios.post('http://localhost:3001/area', info);
    // setArea(total);
    const { data: { total } } = await axios.post('http://localhost:3001/area', info);
    setCans(total);
  } catch (err) {
    console.log(err);
  }
}
