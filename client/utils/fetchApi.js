import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': 'ae24077442mshd4e2a5c56ca66a0p1cef39jsn7e0cc33de3cd' ,
    },
  });
    
  return data;
}