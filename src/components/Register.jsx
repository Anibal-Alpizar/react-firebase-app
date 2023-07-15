import { useState } from "react";
import { useAuth } from "../context/authContext.jsx";
import { useNavigate, Link } from "react-router-dom";
import { Alert } from "./Alert.jsx";

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
    <div className="w-full max-w-xs m-auto">
      {error && <Alert message={error} />}
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold my-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleChange}
            type="email"
            name="email"
            id="email"
            placeholder="youremail@company.ltd"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold my-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none
          focus:shadow-outline"
            onChange={handleChange}
            type="password"
            name="password"
            id="password"
            placeholder="********"
          />
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-black text-sm py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
          Register
        </button>
      </form>
      <p className="my-4 text-sm flex justify-between px-3">
        Already have an account?
        <Link to="/login">Login</Link>
      </p>
    </div>
  );
}
