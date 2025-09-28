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

const HeroSlider = () => {
  return (
    <Swiper className=' h-full '>
      <SwiperSlide>
        <div className=' h-full flex justify-start pt-48'>
          <div className=' flex flex-col items-center lg:items-start lg:max-w-[700px]'>
            <motion.h1
              variants={fadeIn("up", 0.4)}
              initial='hidden'
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
              className=' h1 text-center lg:text-left mb-2'>
              <span className=' text-accent'>Drive Your</span> Dreams Forward
            </motion.h1>
            <motion.p
              variants={fadeIn("up", 0.6)}
              initial='hidden'
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
              className=' text-white italic text-center lg:text-left mb-6 text-lg'>
              Discover premium automotive solutions tailored to elevate your
              driving experience. From luxury vehicles to comprehensive
              services.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.8)}
              initial='hidden'
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}>
              <CustomeButton
                text='Explore Cars'
                containerStyles='w-[196px] h-[62px]'
              />
            </motion.div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className=' h-full flex justify-start pt-48'>
          <div className=' flex flex-col items-center lg:items-start lg:max-w-[700px]'>
            <motion.h1
              variants={fadeIn("up", 0.4)}
              initial='hidden'
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
              className=' h1 text-center lg:text-left mb-2'>
              <span className=' text-accent'>Excellence In</span> Every Journey
            </motion.h1>
            <motion.p
              variants={fadeIn("up", 0.6)}
              initial='hidden'
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
              className=' text-white italic text-center lg:text-left mb-6 text-lg'>
              Experience unmatched quality and service with our comprehensive
              automotive solutions. Your perfect vehicle awaits.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.8)}
              initial='hidden'
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}>
              <CustomeButton
                text='Learn More'
                containerStyles='w-[196px] h-[62px]'
              />
            </motion.div>
          </div>
        </div>
      </SwiperSlide>

      {/* swiper nav buttons */}
      <SwiperNavButton
        containerStyles='absolute bottom-2 lg:bottom-0 left-0 h-[130px] w-full lg:w-[700px] z-50 flex justify-center lg:justify-start gap-3'
        btnStyles='border border-accent text-white w-[56px] h-[56px] rounded-full flex justify-center items-center hover:bg-accent hover:scale-110 transition-all duration-300 shadow-lg backdrop-blur-sm'
        iconStyles='text-2xl'
      />
    </Swiper>
  );
};

export default HeroSlider;
