"use client";

import React from "react";

const LoginForm = () => {
  return (
    <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-8 border border-gray-100">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Welcome Back</h1>
        <p className="text-gray-500 mt-2">Login to your account</p>
      </div>

      <form className="space-y-5" action={}>
        {/* Email */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Email
          </label>

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="
                w-full
                px-4
                py-3
                border
                border-gray-300
                rounded-xl
                bg-gray-50
                text-gray-700
                placeholder:text-gray-400
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
                focus:border-blue-500
                transition-all
                duration-300
              "
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Password
          </label>

          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            required
            className="
                w-full
                px-4
                py-3
                border
                border-gray-300
                rounded-xl
                bg-gray-50
                text-gray-700
                placeholder:text-gray-400
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
                focus:border-blue-500
                transition-all
                duration-300
              "
          />
        </div>

        {/* Remember + Forgot */}
        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-gray-600 cursor-pointer">
            <input type="checkbox" className="rounded" />
            Remember me
          </label>

          <button
            type="button"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Forgot Password?
          </button>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="
              w-full
              bg-blue-600
              hover:bg-blue-700
              text-white
              font-semibold
              py-3
              rounded-xl
              transition-all
              duration-300
              shadow-md
              hover:shadow-xl
              active:scale-[0.98]
            "
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
