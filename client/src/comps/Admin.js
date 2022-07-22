import Cookies from "universal-cookie";
import { useEffect } from "react";
import Axios from 'axios'


const cookies = new Cookies();
cookies.set('myadmin', 'imadmin', {path: '/admin'})
const Admin = () => {
  useEffect(() => {
    Axios.get("http://localhost:3001/admin", {admin: cookies.get("myadmin")})
      .then((response) => {
        console.log(response.data);
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
