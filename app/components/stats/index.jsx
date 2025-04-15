"use client";

// @flow strict
import { userData } from "@/data/user-data";
import Image from "next/image";
import GlowCard from "../helper/glow-card";
import SectionTitle from "../helper/section-title";

function GitStats() {
  const githubUser = userData.githubUser;

  return (
    <div
      id="stats"
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]"
    >
      <SectionTitle title="GitHub Statistics" />

      <div className="py-8 grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="md:col-span-2">
          <GlowCard identifier="profile-details">
            <div className="bg-primary-bg">
              <Image
                src={`https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=${githubUser}&theme=algolia`}
                width={1080}
                height={520}
                alt="GitHub Profile Details"
                className="rounded-lg"
                onError={(e) => {
                  e.target.src = "/fallback-image.png";
                }}
              />
            </div>
          </GlowCard>
        </div>

        <GlowCard identifier="github-stats">
          <Image
            src={`https://github-readme-stats.vercel.app/api?username=${githubUser}&show_icons=true&include_all_commits=true&theme=algolia&hide_border=true`}
            width={1080}
            height={520}
            alt="GitHub Stats"
            className="rounded-lg"
            onError={(e) => {
              e.target.src = "/fallback-image.png";
            }}
          />
        </GlowCard>

        <GlowCard identifier="streak">
          {githubUser ? (
            <Image
              src={`https://streak-stats.demolab.com?user=${githubUser}&theme=algolia&hide_border=true`}
              width={1080}
              height={520}
              alt="GitHub Streak Stats"
              className="rounded-lg"
              onError={(e) => {
                e.target.src = "/fallback-image.png";
              }}
            />
          ) : (
            <p className="text-center text-gray-500">
              Unable to load streak stats. Please try again later.
            </p>
          )}
        </GlowCard>
      </div>
    </div>
  );
}

export default GitStats;
