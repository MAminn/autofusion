"use client";

import { fadeIn } from "@/lib/variants";
import { motion } from "framer-motion";
import Image from "next/image";
import CustomeButton from "./CustomeButton";

const classes = [
  {
    name: "New Cars",
    img: "/assets/img/classes/audi.jpg",
    desiption:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex ducimus eius dolores illum alias placeat",
  },
  {
    name: "Used Cars",
    img: "/assets/img/classes/lambo.jpg",
    desiption:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex ducimus eius dolores illum alias placeat",
  },
  {
    name: "Services and Parts",
    img: "/assets/img/classes/mustang.jpg",
    desiption:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex ducimus eius dolores illum alias placeat",
  },
  {
    name: "Finance and Insurance",
    img: "/assets/img/classes/porche.jpg",
    desiption:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex ducimus eius dolores illum alias placeat",
  },
];

const Classes = () => {
  return (
    <section className="" id="class">
      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className=" grid grid-cols-1 lg:grid-cols-2"
      >
        {classes.map((item, index) => (
          <div
            className=" relative w-full h-[300px] lg:h-[485px] flex 
            flex-col justify-center items-center"
            key={index}
          >
            {/* overlay */}
            <div className=" bg-black/50 absolute w-full h-full top-0 z-10"></div>
            <Image src={item.img} alt="image" fill className=" object-cover" />
            {/* text & btn */}
            <div
              className=" z-30 max-w-[380px] text-center flex
              flex-col items-center justify-center gap-4"
            >
              <motion.h3
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
                className="h3 text-accent"
              >
                {item.name}
              </motion.h3>
              <motion.p
                variants={fadeIn("up", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
                className=" text-white "
              >
                {item.desiption}
              </motion.p>
              <motion.div
                variants={fadeIn("up", 0.8)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
              >
                <CustomeButton
                  containerStyles="w-[164px] h-[46px]"
                  text="Read More"
                />
              </motion.div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Classes;
