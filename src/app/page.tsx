import { createClient } from "@/utils/supabase/server";
import LoginComponent from "./login/login-component";

export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-8">
        Welcome to Supabase with Next.js!
      </h1>

      <p>{user ? user.email : ""}</p>

      <LoginComponent />
    </div>
  );
}
