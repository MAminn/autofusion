"use client";

import { FaUsers } from "react-icons/fa";
import { IoIosPricetags } from "react-icons/io";
import { FaDumbbell } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import Achievements from "./Achievements";

const featured = [
  {
    icon: <FaUsers />,
    title: "Driving Innovation Forward",
    subtitle:
      "At [Your Company Name], our mission is to revolutionize the automotive industry by driving innovation and delivering exceptional value to our customers. We are committed to developing advanced technologies that enhance safety, performance, and sustainability. Our goal is to lead the way in creating a future where every journey is more efficient, enjoyable, and eco-friendly.",
  },
  {
    icon: <IoIosPricetags />,
    title: "Expert Team of Professionals",
    subtitle:
      "Our team is our greatest asset. Comprising industry experts, skilled engineers, and dedicated customer service representatives, we work together to bring you the best in automotive excellence. Each team member at [Your Company Name] is passionate about cars and committed to delivering top-notch service. We believe that our collaborative spirit drives our success and sets us apart in the industry.",
  },
  {
    icon: <FaDumbbell />,
    title: "Commitment to Excellence",
    subtitle:
      "We believe in upholding the highest standards of integrity, quality, and customer satisfaction. At [Your Company Name], our values guide everything we do, from the way we design our vehicles to the way we interact with our customers. We are dedicated to building lasting relationships based on trust and transparency, ensuring that every experience with us is exceptional.",
  },
];

const About = () => {
  return (
    <section
      className=" mt-28 xl:mt-16 pt-8 pb-14 lg:pt-16 lg:pb-28 "
      id="about"
    >
      <div className="container mx-auto">
        <div className=" flex flex-col items-center gap-2 mb-8">
          <motion.h2
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="h2 text-center text-accent"
          >
            About Us
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className=" max-w-[600px] mx-auto text-center"
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
            consectetur perferendis iste consequatur ab adipisci illo
          </motion.p>
        </div>
        {/* featured items */}
        <motion.div
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-16 "
        >
          {featured.map((feature, index) => {
            return (
              <div
                key={index}
                className=" flex flex-col justify-center items-center gap-4 border p-10"
              >
                <div className=" text-4xl bg-primary-300 text-[#333333] w-[80px] h-[80px] rounded-full flex justify-center items-center">
                  {feature.icon}
                </div>
                <div className=" flex flex-col justify-center items-center gap-2 text-center">
                  <h4 className=" h4 text-accent">{feature.title}</h4>
                  <p>{feature.subtitle}</p>
                </div>
              </div>
            );
          })}
        </motion.div>
        {/* achievments  */}
        <motion.div
          variants={fadeIn("up", 1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
        >
          <Achievements />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
