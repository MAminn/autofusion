"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import CustomeButton from "./CustomeButton";
import { fadeIn } from "@/lib/variants";

const trainerData = [
  {
    image: "/assets/img/trainers/people1.jpg",
    name: "David Williams",
    role: "Body Builder Coach",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi facilis hic reprehenderit sequi,",
    social: [
      { icon: FaFacebook, link: "https://facebook.com" },
      { icon: FaTwitter, link: "https://twitter.com" },
      { icon: FaYoutube, link: "https://youtube.com" },
    ],
  },
  {
    image: "/assets/img/trainers/people2.jpg",
    name: "Rosy Rivera",
    role: "Body Builder Coach",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi facilis hic reprehenderit sequi,",
    social: [
      { icon: FaFacebook, link: "https://facebook.com" },
      { icon: FaTwitter, link: "https://twitter.com" },
      { icon: FaYoutube, link: "https://youtube.com" },
    ],
  },
  {
    image: "/assets/img/trainers/people3.jpg",
    name: "Matt Stone",
    role: "Body Builder Coach",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi facilis hic reprehenderit sequi,",
    social: [
      { icon: FaFacebook, link: "https://facebook.com" },
      { icon: FaTwitter, link: "https://twitter.com" },
      { icon: FaYoutube, link: "https://youtube.com" },
    ],
  },
  {
    image: "/assets/img/trainers/people4.jpg",
    name: "Sofia Lauren",
    role: "Body Builder Coach",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi facilis hic reprehenderit sequi,",
    social: [
      { icon: FaFacebook, link: "https://facebook.com" },
      { icon: FaTwitter, link: "https://twitter.com" },
      { icon: FaYoutube, link: "https://youtube.com" },
    ],
  },
];

const Team = () => {
  return (
    <section className=" py-12 xl:h-[110vh] bg-primary-300" id="team">
      <div className="container mx-auto h-full flex flex-col items-center justify-center">
        <motion.h2
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="h2 text-center  text-accent mb-20"
        >
          Our Top Achievers
        </motion.h2>
        {/* trainers grid */}
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 mb-12"
        >
          {trainerData.map((trainer, index) => (
            <div
              key={index}
              className=" flex flex-col items-center text-center text-accent"
            >
              <div className=" relative w-[320px] h-[360px] mx-auto mb-4">
                <Image src={trainer.image} alt="" fill />
              </div>
              {/* name */}
              <h4 className=" h4 mb-2">{trainer.name}</h4>
              {/* role */}
              <p className=" uppercase text-xs tracking-[3px] mb-2">
                {trainer.role}
              </p>
              {/* desc */}
              <p className=" mb-6 max-w-[320px] mx-auto">
                {trainer.description}
              </p>
              {/* socials */}
              <div className=" flex gap-12 justify-center">
                {trainer.social.map((social, index) => (
                  <div key={index}>
                    <Link
                      href={social.link}
                      className=" hover:text-accent transition-all"
                    >
                      <social.icon className="text-lg" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
        {/* btn */}
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
        >
          <CustomeButton
            containerStyles="w-[196px] h-[62px]"
            text="See all trainers"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
