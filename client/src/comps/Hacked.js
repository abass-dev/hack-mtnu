import Axios from "axios";
import React, { useEffect, useState } from "react";
import HackTemp from "./HackTemp";

const Hacked = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    Axios.post("http://localhost:3001/login")
      .then((response) => {
        if(response.data.login !== 'success') {
          window.location.href = '/login'
        }
      })
    Axios.post("http://localhost:3001/hacked")
      .then((response) => {
        setDatas(response.data);
      })
      .catch((err) => {
        console.log(err)
         setDatas({message: 'ERROR, Cant connect to the DB'});
      });
  }, []);
  return <HackTemp value={datas} />;
};

export default Hacked;
