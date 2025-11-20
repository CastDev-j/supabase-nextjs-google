"use client";
import React from "react";
import { loginWithGoogle } from "./action";

const LoginComponent = () => {
  const handleLogin = async () => {
    await loginWithGoogle();
  };

  return (
    <div>
      <button
        onClick={handleLogin}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Login with Google
      </button>

      <form action="/auth/signout" method="post">
        <button
          type="submit"
          className="px-4 py-2 bg-red-500 text-white rounded ml-4"
        >
          Logout
        </button>
      </form>
    </div>
  );
};

export default LoginComponent;
