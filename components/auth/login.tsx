"use client";
import React from "react";
import Link from "next/link";
import { SiteLogo } from "@/components/svg";

const Login = () => {
  //Function to handel form submit
  const onSubmit = () => {};

  return (
    <>
      <div className="w-full py-10">
        <Link href="/" className="flex gap-2 items-center">
          <SiteLogo className="h-10 w-10 2xl:w-14 2xl:h-14 text-primary" />
          <div className="flex-1  text-xl">
            <span className="text-primary font-extrabold">Trexo</span>{" "}
            <span className="text-gray-700 font-light">Pro</span>
          </div>
        </Link>
        <div className="2xl:mt-8 mt-6 2xl:text-3xl text-2xl font-bold text-default-900">
          Hey, Hello 👋
        </div>
      </div>
    </>
  );
};

export default Login;
