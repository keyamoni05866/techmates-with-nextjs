import Image from "next/image";
import Link from "next/link";

import aboutImage from "../../../assets/aboutUs/aboutUs.png";
import teamImage from "../../../assets/aboutUs/team.jpg";
const AboutUs = () => {
  return (
    <div className="min-h-screen mb-20 mt-10 px-3 ">
      <div className="lg:flex">
        <div className="lg:w-[50%]">
          <Image alt="About Us" height={450} src={aboutImage} width={550} />
        </div>
        <div className="lg:w-[50%] lg:mt-10 lg:px-0 px-2">
          <h4 className="lg:text-[50px] text-2xl ">Our Company Overview!!!!</h4>
          <p className="lg:text-md mt-5 ">
            TechMates is a full-stack web platform designed for tech
            enthusiasts, providing a rich collection of expert advice, personal
            experiences, and user-generated content. Whether you were
            troubleshooting common technical issues or exploring the latest in
            software, gadgets, and digital tools, this platform offers practical
            solutions, detailed tutorials, and comprehensive reviews. Our goal
            is to help users stay ahead in the fast-paced world of technology by
            offering insights and recommendations that enhance their digital
            lives. Whether you were a beginner or a tech expert, there is
            something for everyone.
          </p>
          <div className="flex gap-5 mt-5 ">
            <button className="custom-btn !rounded-md">Community</button>
          </div>
        </div>
      </div>
      <div className="lg:flex lg:justify-between  lg:mt-4 mt-10 lg:px-0 px-5">
        <div className="shadow-lg lg:w-[300px] lg:h-[260px] mb-10 p-8 text-justify rounded-lg bg-base-200">
          <p>
            <span className="font-semibold me-2">Founding Year:</span>
            TechMates was founded in 2024 with the goal of simplifying the
            complex world of technology and making it more accessible to people
            of all levels of expertise.
          </p>
          <p className="mt-3 tex-xl">
            <span className="font-semibold ">Founded:</span> 2024
          </p>
        </div>
        <div className="shadow-lg lg:w-[300px] lg:h-[260px] mb-8 p-8 text-justify rounded-lg bg-base-200">
          <p>
            <span className="font-semibold me-2">Mission:</span>
            Our mission is to empower individuals with accessible, reliable, and
            up-to-date technology insights. We aim to make technology simple,
            offering hands-on advice and resources that help users solve
            problems, enhance productivity.
          </p>
        </div>
        <div className="shadow-lg lg:w-[300px] lg:h-[260px] mb-8 p-8 text-justify rounded-lg bg-base-200">
          <p>
            <span className="font-semibold me-2">Vision:</span>
            To become the go-to platform for tech enthusiasts worldwide, where
            anyone can find answers, share experiences, and discover the latest
            advancements in technology, all while fostering a community of
            learning and innovation.
          </p>
        </div>
        <div className="shadow-lg w-[300px] h-[260px] p-8 text-justify rounded-lg bg-base-200">
          <p>
            <span className="font-semibold me-2">Our Values:</span>
            We believe that tech knowledge should be easily accessible to
            everyone, regardless of their background or expertise
            level.Constantly evolving with the tech landscape to provide users
            with cutting-edge content and resources.
          </p>
        </div>
      </div>

      <div className="lg:flex mt-16 gap-5">
        <div className="lg:w-[50%] lg:mt-10 lg:px-0 px-2">
          <h4 className="lg:text-[30px] text-2xl ">
            Know About Our Teams and Our Goals!!!!
          </h4>
          <p className="lg:text-lg mt-5 ">
            We are a team of passionate tech enthusiasts, developers, and
            digital innovators committed to making technology easy to understand
            and accessible to everyone. Our diverse backgrounds in software
            engineering, product development, and tech reviews enable us to
            bring you relevant, practical, and cutting-edge information. Our
            goal is to empower individuals with the knowledge they need to
            troubleshoot tech issues, explore new tools and gadgets, and enhance
            their digital experiences. Whether it is offering in-depth
            tutorials, reviews, or tips on the latest apps and software,
            TechMates is here to guide you
          </p>
          <div className="flex gap-5 mt-5 ">
            <Link href="/register">
              <button className="custom-outline-btn !rounded-md">
                Part of Our Community
              </button>
            </Link>
          </div>
        </div>
        <div className="lg:w-[50%] rounded-xl lg:mt-0 mt-5 lg:ms-10">
          <Image
            alt="About Us"
            className="rounded-xl"
            height={450}
            src={teamImage}
            width={550}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
