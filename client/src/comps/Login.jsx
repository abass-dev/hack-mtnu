import Axios from "axios";
import Cookies from "universal-cookie";

async function CheckLogin() {
  try {
    let getUser = await Axios.post("http://localhost:3001/login", {
        username: 'abass'
    });
    console.log(getUser.data);
  } catch (error) {
    throw error;
  }
}

const Login = () => {
  CheckLogin();
  return (
    <div className="formcontainer">
      <div className="form">
        <h1>Login</h1>
        <label>Username: </label>
        <input type="text" name="username"></input>
        <label>Password: </label>
        <input type="password" name="password"></input>
        <button>Login</button>
      </div>
    </div>
  );
};

export default Login;
