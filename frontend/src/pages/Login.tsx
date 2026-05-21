import {
  useState,
} from "react";

import axios from "axios";

import {
  useNavigate,
} from "react-router-dom";

export default function Login() {
  const navigate =
    useNavigate();

  const [email,
    setEmail] =
    useState("");

  const [
    password,
    setPassword,
  ] = useState("");

  const handleLogin =
    async (): Promise<void> => {
      try {
        const response =
          await axios.post(
            "http://localhost:5000/api/auth/login",
            {
              email,
              password,
            }
          );

        localStorage.setItem(
          "token",
          response.data.token
        );

        localStorage.setItem(
          "role",
          response.data.user.role
        );

        navigate(
          "/dashboard"
        );
      } catch (
        error
      ) {
        console.error(
          "Login failed",
          error
        );

        alert(
          "Invalid credentials"
        );
      }
    };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center">
      <div className="bg-white p-10 rounded-2xl shadow-lg w-[420px]">
        <h1 className="text-3xl font-bold text-center mb-6">
          Smart Leads CRM
        </h1>

        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={
              email
            }
            onChange={(
              e
            ) =>
              setEmail(
                e.target
                  .value
              )
            }
            className="w-full border rounded-xl p-4"
          />

          <input
            type="password"
            placeholder="Password"
            value={
              password
            }
            onChange={(
              e
            ) =>
              setPassword(
                e.target
                  .value
              )
            }
            className="w-full border rounded-xl p-4"
          />

          <button
            onClick={
              handleLogin
            }
            className="w-full bg-slate-900 text-white py-4 rounded-xl hover:bg-slate-800 transition"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
