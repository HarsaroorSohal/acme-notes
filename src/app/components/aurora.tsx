"use client";

import React from "react";
import { motion } from "framer-motion";

import { AuroraBackground } from "../../components/ui/aurora-background";
import { EmailIcon, PasswordIcon } from "../icons";

export default function Aurora() {
  return (
    <AuroraBackground id="sign-in">
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          Jolly Notes.
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
          Tame your work, organize your life.
        </div>
        <div className="">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-semibold sm:text-3xl">
              Get started today!
            </h1>
          </div>

          <form action="#" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>

              <div className="relative">
                <input
                  type="email"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter email"
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  {EmailIcon()}
                </span>
              </div>
            </div>

            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>

              <div className="relative">
                <input
                  type="password"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter password"
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  {PasswordIcon()}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between gap-2">
              <p className="flex gap-1 text-sm text-gray-500">
                No account?
                <a className="underline" href="#">
                  Sign up
                </a>
              </p>
              <button className="bg-yellow-400 dark:bg-white hover:bg-yellow-500 font-semibold rounded-xl w-fit text-black px-4 py-2">
                Sign In
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
