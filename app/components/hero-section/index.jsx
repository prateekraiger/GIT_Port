import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";
import { userData } from "@/data/user-data";

const HeroSection = ({ profile }) => {
  return (
    <section className="py-4 lg:py-12 relative flex flex-col items-center justify-between">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-y-8 lg:gap-12">
        {/* Profile Section */}
        <div className="flex flex-col items-start justify-center rounded-lg p-3 lg:py-5 lg:px-12 bg-primary-bg h-full">
          <div className="flex w-full justify-center">
            <Image
              src={profile.avatar_url}
              width={128}
              height={128}
              alt={`Profile picture of ${profile.name}`}
              className="rounded-full transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
              priority
            />
          </div>

          <p className="text-gray-300 text-sm lg:text-base my-4 lg:my-6 text-center">
            {profile.bio}
          </p>

          <div className="w-full flex justify-center items-center gap-5">
            <Link href={userData.github} passHref legacyBehavior>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all text-teal-500 hover:scale-125 duration-300"
              >
                <BsGithub size={24} />
              </a>
            </Link>

            <Link href={userData.linkedIn} passHref legacyBehavior>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all text-teal-500 hover:scale-125 duration-300"
              >
                <BsLinkedin size={24} />
              </a>
            </Link>

            <Link href={userData.leetcode} passHref legacyBehavior>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all text-teal-500 hover:scale-125 duration-300"
              >
                <SiLeetcode size={24} />
              </a>
            </Link>

            <Link href={userData.twitter} passHref legacyBehavior>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all text-teal-500 hover:scale-125 duration-300"
              >
                <FaTwitterSquare size={24} />
              </a>
            </Link>
          </div>

          <div className="w-full justify-center flex items-center gap-3 mt-6">
            <Link href={userData.resume} passHref legacyBehavior>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-violet-600 to-pink-500 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600"
              >
                <button className="px-3 text-xs md:px-4 py-2 md:py-2.5 bg-[#0d1224] rounded-full text-white font-medium uppercase tracking-wider transition-all duration-200 flex items-center gap-1 hover:gap-3">
                  <span>Get Resume</span>
                  <MdDownload size={16} />
                </button>
              </a>
            </Link>
          </div>
        </div>

        {/* Code Display Section */}
        <div className="h-full from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37]">
          <div className="flex flex-row">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600" />
            <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent" />
          </div>

          <div className="px-4 lg:px-8 py-5">
            <div className="flex flex-row space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-500" />
              <div className="h-3 w-3 rounded-full bg-orange-400" />
              <div className="h-3 w-3 rounded-full bg-green-400" />
            </div>
          </div>

          <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
            <code className="font-mono text-xs md:text-sm lg:text-base">
              <div className="blink">
                <span className="mr-2 text-pink-400">const</span>
                <span className="mr-2 text-violet-400">coder</span>
                <span className="mr-2 text-pink-400">=</span>
                <span className="text-gray-400">{"{"}</span>
              </div>

              {[
                // Customized Data
                { label: "name", value: profile.name, type: "string" },
                { label: "timezone", value: userData.timezone, type: "string" },
                { label: "location", value: profile.location, type: "string" },
                {
                  label: "followers",
                  value: profile.followers,
                  type: "number",
                },
                {
                  label: "following",
                  value: profile.following,
                  type: "number",
                },
                {
                  label: "repositories",
                  value: profile.public_repos,
                  type: "number",
                },
              ].map((item) => (
                <div key={item.label}>
                  <span className="ml-4 lg:ml-8 mr-2 text-white">
                    {item.label}:
                  </span>
                  {item.type === "string" ? (
                    <>
                      <span className="text-gray-400">&apos;</span>
                      <span className="text-green-400">{item.value}</span>
                      <span className="text-gray-400">&apos;,</span>
                    </>
                  ) : (
                    <>
                      <span className="text-orange-400">{item.value}</span>
                      <span className="text-gray-400">,</span>
                    </>
                  )}
                </div>
              ))}

              <div className="ml-4 lg:ml-8 mr-2">
                <span className="text-white">skills:</span>
                <span className="text-gray-400">{"["}</span>
                {userData.skills.map((skill, i) => (
                  <React.Fragment key={skill}>
                    <span className="text-cyan-400">{`&apos;${skill}&apos;`}</span>
                    {i !== userData.skills.length - 1 && (
                      <span className="text-gray-400">, </span>
                    )}
                  </React.Fragment>
                ))}
                <span className="text-gray-400">{"],"}</span>
              </div>

              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">hireable:</span>
                <span className="text-orange-400">
                  {profile?.hireable?.toString() || "false"}
                </span>
                <span className="text-gray-400">,</span>
              </div>

              <div>
                <span className="text-gray-400">{"};"}</span>
              </div>
            </code>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
