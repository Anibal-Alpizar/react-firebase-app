import { useState } from "react";
import { useAuth } from "../context/authContext.jsx";
import { useNavigate } from "react-router-dom";
import { Alert } from "./Alert.jsx";

export function Login() {
  const [user, setuser] = useState({
    email: "",
    password: "",
  });

  const [error, seterror] = useState("");

  const { login, loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) =>
    setuser({ ...user, [name]: value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    seterror("");
    try {
      await login(user.email, user.password);
      navigate("/");
    } catch (err) {
      console.log(err.code);
      seterror(err.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (err) {
      seterror(err.message);
    }
  };

  return (
    <div>
      {error && <Alert message={error} />}
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          onChange={handleChange}
          type="email"
          name="email"
          id="email"
          placeholder="youremail@company.ltd"
        />
        <label htmlFor="password">Password</label>
        <input
          onChange={handleChange}
          type="password"
          name="password"
          id="password"
          placeholder="********"
        />
        <button>Login</button>
      </form>
      <button onClick={handleGoogleSignIn}>Login with Google</button>
    </div>
  );
}
