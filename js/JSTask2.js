


// import { axios } from 'https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js';
const fetchNames = async () => {
    // try {
      const res = await Promise.all([
        axios.post("https://reqres.in/api/users",   {"name":"asd","job":"123"}),
        axios.post("https://reqres.in/api/users",  {"name":"asd","job":"123"}),
        axios.post("https://reqres.in/api/users",  {"name":"asd","job":"123"})
      ]);
      const data = res.map((res) => res.data);
      console.log(data.flat());
    // } catch {
    //   throw Error("Promise failed");
    // }
  };



