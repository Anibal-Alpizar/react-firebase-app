import { useState } from "react";
import { useAuth } from "../context/authContext.jsx";
import { useNavigate } from "react-router-dom";

export function Register() {
  const [user, setuser] = useState({
    email: "",
    password: "",
  });

  const [error, seterror] = useState("");

  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) =>
    setuser({ ...user, [name]: value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    seterror("");
    try {
      await signup(user.email, user.password);
      navigate("/");
    } catch (err) {
      console.log(err.code);
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
        <button>Register</button>
      </form>
    </div>
  );
}
