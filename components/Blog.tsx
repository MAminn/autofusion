"use client";
// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/navigation";
import CustomeButton from "./CustomeButton";
import SwiperNavButton from "./SwiperNavButton";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import Image from "next/image";
import Link from "next/link";

const blogData = [
  {
    img: "/assets/img/classes/audi.jpg",
    date: "March 10, 2024",
    title: "The Future of Electric Vehicles",
    href: "",
  },
  {
    img: "/assets/img/classes/lambo.jpg",
    date: "March 10, 2024",
    title: "5 Tips for Maintaining Your Car",
    href: "",
  },
  {
    img: "/assets/img/classes/mustang.jpg",
    date: "March 10, 2024",
    title: "Understanding Car Financing Options",
    href: "",
  },
  {
    img: "/assets/img/classes/porche.jpg",
    date: "March 10, 2024",
    title: "Top 10 Car Safety Features of 2024",
    href: "",
  },
  {
    img: "/assets/img/classes/audi.jpg",
    date: "March 10, 2024",
    title: "How to Choose the Right Car for Your Lifestyle",
    href: "",
  },
  {
    img: "/assets/img/classes/mustang.jpg",
    date: "March 10, 2024",
    title: "The Evolution of Autonomous Driving",
    href: "",
  },
  {
    img: "/assets/img/classes/porche.jpg",
    date: "March 10, 2024",
    title: "Benefits of Regular Car Servicing",
    href: "",
  },
  {
    img: "/assets/img/classes/mustang.jpg",
    date: "March 10, 2024",
    title: "The Impact of Eco-Friendly Cars on the Environment",
    href: "",
  },
];

const Blog = () => {
  return (
    <section className=" bg-primary-300 text-white py-24 mt-16" id="blog">
      <div className="container mx-auto">
        <motion.h2
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className=" h2 text-center mb-8 text-[#333]"
        >
          Blogs
        </motion.h2>
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
        >
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 3,
              },
              1400: {
                slidesPerView: 4,
              },
            }}
            className=" h-[420px] md:max-w-[660px] lg:max-w-none mb-8"
          >
            {blogData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className=" flex flex-col justify-start h-full max-w-[320px] mx-auto">
                  <Image
                    src={item.img}
                    alt="image"
                    width={320}
                    height={266}
                    className=" mb-6"
                  />
                  <div className=" flex flex-col items-start ">
                    <p className=" max-w-[380px] uppercase text-[12px] tracking-[3px] mb-1">
                      {item.date}
                    </p>
                    <Link
                      href={item.href}
                      className=" hover:text-accent transition-all duration-300"
                    >
                      <h5 className="h5 text-[#333]">{item.title}</h5>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <SwiperNavButton
              containerStyles="absolute left-0 right-0 
              bottom-[16rem] w-full max-w-[370px] sm:max-w-[620px] 
              md:max-w-[960px] xl:max-w-[1320px] mx-auto z-50 
              flex justify-between gap-1"
              btnStyles="bg-accent text-white w-[56px] h-[56px] 
              flex justify-center items-center hover:bg-accent 
              transition-all duration-300"
              iconStyles="text-2xl"
            />
          </Swiper>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
        >
          <CustomeButton
            containerStyles="block w-[196px] h-[62px] mx-auto"
            text="View all"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
