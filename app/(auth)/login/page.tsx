import LoginForm from "@/app/_components/LoginForm";
import Link from "next/link";
import React from "react";

// This is a server component by default
const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-indigo-100">
      <div className="w-full max-w-md">
        <LoginForm />

        <p className="mt-6 text-center text-gray-600">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="text-blue-600 font-semibold hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;

// sever components are rendered on the server by default
//If you want to render a component on the client, you can use  the "use client" directive  at the  // ususally components  which have form or events in such cases we have to write a client component by mentioning the name "use client" name
// server actions are functions that run on the server and can be used to perform actions like database queries or API calls
