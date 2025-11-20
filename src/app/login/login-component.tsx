"use client";
import React, { useEffect, useState } from "react";
import { loginWithGoogle } from "./action";
import { createClient } from "@/utils/supabase/client";
import { User } from "@supabase/supabase-js";

const LoginComponent = () => {
  const [user, setUser] = useState<User | null>(null);
  const supabase = createClient();

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    };

    fetchUser();
  }, [supabase]);

  const handleLogin = async () => {
    await loginWithGoogle();
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  return (
    <div>
      {user ? (
        <div>
          <span className="mr-4">Hello, {user.email}</span>
          <button
            onClick={handleLogout}
            type="submit"
            className="px-4 py-2 bg-red-500 text-white rounded ml-4"
          >
            Logout
          </button>
        </div>
      ) : (
        <button
          onClick={handleLogin}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Login with Google
        </button>
      )}
    </div>
  );
};

export default LoginComponent;
