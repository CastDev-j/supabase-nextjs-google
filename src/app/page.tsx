import LoginComponent from "./login/login-component";

export default async function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-8">
        Nextjs 16 + Supabase OAuth (Google)
      </h1>

      <LoginComponent />
    </div>
  );
}
