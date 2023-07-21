import Layout from "@/components/Layout/Layout";
import Link from "next/link";
import Person from "@/assets/me.webp";
import Image from "next/image";
import { BsGithub, BsLinkedin } from "react-icons/bs";

type Props = {};

const AboutMe = (props: Props) => {
  return (
    <Layout>
      <div className="flex items-center lg:min-h-[80vh] bg-white/70 dark:bg-black/70">
        <div className="mx-auto w-5/6 items-center justify-center flex-col sm:flex lg:flex-row lg:h-5/6">
          <div className="flex-1 lg:flex-[3_3_0%]">
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] lg:before:content-evolvetext">
                <span className="invisible w-6 text-sm lg:visible lg:w-[850px] absolute lg:-left-20 lg:-top-12 sm:text-7xl font-bold text-black opacity-10 dark:text-white">
                  JUNIOR HUANCA
                </span>
                <h2 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold">
                  JUNIOR HUANCA
                </h2>
                <h1 className="text-2xl xs:text-3xl">
                  Full-Stack Web Developer
                </h1>
              </div>
            </div>
            <p className="my-8 text-xl">
              I am a full-stack web developer with experience in developing
              applications using React and Next.js. My focus revolves around
              building scalable and modern web solutions, leveraging my skills
              in both frontend and backend development.
            </p>
            <Link
              className="text-xl rounded-md bg-green-700 px-10 py-2 hover:bg-green-600 hover:text-white"
              href={`https://juniorhuanca.vercel.app`}
            >
              Portfolio
            </Link>
          </div>
          <div className="my-10 lg:m-0 relative flex-1 lg:flex-[2_2_0%] flex border border-black rounded-tl-[150px] rounded-tr-[150px] dark:border-white max-w-[500px]">
            <Image
              src={Person}
              alt="Picture of the author"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute top-[0%] right-[15%] sm:right-[5%] lg:-top-[5%] lg:right-[5%]">
              <Link
                className="hover:opacity-50 transition duration-500"
                href="https://github.com/JuniorHuanca"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub className="text-5xl sm:text-7xl lg:text-8xl" />
              </Link>
            </div>
            <div className="absolute top-[20%] right-0 sm:-right-[5%] lg:top-[25%] lg:-right-[10%]">
              <Link
                className="hover:opacity-50 transition duration-500"
                href="https://www.linkedin.com/in/junior-huanca-697582254/"
                target="_blank"
                rel="noreferrer"
              >
                <BsLinkedin className="text-5xl sm:text-7xl lg:text-8xl" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutMe;
