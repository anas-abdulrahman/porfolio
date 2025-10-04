"use client"
import Link from "next/link";
import { useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "../data";
import MagicButton from "./MagicButton";
import ProfileCard from "./ProfileCard";

const AboutMe = () => {
    const [copied, setCopied] = useState(false);
  
    const handleCopy = () => {
    const text = "anasdeveloper1999@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div className='w-full flex items-center flex-col justify-center my-20 relative'>
        <h1 className="heading py-10">About <span className="text-purple">Me</span></h1>
        <div className="w-full flex md:flex-row flex-col items-center md:justify-between gap-10">
          <div>
          <div className="my-6 text-start">
              <p className="heading text-purple">Anas Abdulrahman </p>
              <div className="font-sans text-lg max-w-96 font-bold z-10 text-gray-400">
                <p>from sudan.</p>
                <p className="text-white">I am a full stack developer with a passion for building responsive and accessible web applications
                that provide a seamless user experience across all devices.
                </p>
              </div>
               <a href="mailto:anasdeveloper1999@gmail.com">
                <MagicButton
                  title="Let's get in touch"
                  icon={<FaLocationArrow />}
                  position="right"
                />
              </a>
               <div className="flex items-center md:gap-3 gap-6 my-10">
                  {socialMedia.map((info) => (
                    <Link
                     target="_blank"
                      key={info.id}
                      className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                      href={info.link}
                    >
                      <img src={info.img} alt="icons" width={20} height={20} />
                    </Link>
                  ))}
                </div>
          </div>
          </div>
            <ProfileCard
              name="Anas Abdulrahman"
              title="Software Engineer"
              handle="anasdev1999"
              status="Online"
              contactText={copied ? "Email is Copied!" : "Contact Me"}
              avatarUrl="/neww.png"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() =>handleCopy()}
            />
          
        </div>
    </div>
  )
}

export default AboutMe
