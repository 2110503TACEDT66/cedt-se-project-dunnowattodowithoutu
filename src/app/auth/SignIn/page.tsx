"use client";
import { login } from "@/libs/login";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="flex justify-center items-center h-[90vh]">
      <div className="bg-white p-10 my-auto rounded-lg shadow-xl w-[30rem]">
        <h1 className="text-2xl font-bold text-center">Sign In</h1>
        <div className="mt-5 space-y-5">
          <div className="space-y-1">
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              placeholder=""
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              placeholder=""
            />
          </div>
          <button
            onClick={async () => {
              await signIn("credentials", {
                email: email,
                password: password,
                retdirect: true,
                callbackUrl: "/",
              });
            }}
            className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary_dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-primary"
          >
            Sign In
          </button>

          <div className="flex justify-between items-center">
            <span className="text-sm">Dont have an account?</span>
            <Link href="/auth/sign-up">
              <div className="text-primary">Sign Up</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}