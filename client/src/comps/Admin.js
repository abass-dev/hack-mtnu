import { useEffect } from "react";
import Axios from 'axios'
import Cookies from 'universal-cookie'

const Admin = () => {
  useEffect(() => {
    Axios.get("http://localhost:3001/admin")
      .then((response) => {
        if(response.data.user !== 'success') {
          window.location.href = '/login'
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div><h1>Admin</h1></div>
  )
};

export default Admin;
