"use client";

import Image from "next/image";
import { FaCheck } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import CustomeButton from "./CustomeButton";

// impoty swiper components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

// data
const membershipData = [
  {
    title: "Lease Deals",
    price: "30",
    benefits: [
      {
        icon: FaCheck,
        text: "Lower monthly payments compared to buying.",
      },
      {
        icon: FaCheck,
        text: "Ability to drive new car models every few years.",
      },
      {
        icon: MdClose,
        text: "Ownership of the vehicle at the end of the lease term.",
      },
      {
        icon: FaCheck,
        text: "Minimal upfront costs.",
      },
      {
        icon: MdClose,
        text: "Unlimited mileage (most leases have mileage limits).",
      },
      {
        icon: FaCheck,
        text: "Warranty coverage for the lease term.",
      },
      {
        icon: MdClose,
        text: "Equity in the vehicle.",
      },
    ],
  },
  {
    title: "Financing Plans",
    price: "45",
    benefits: [
      {
        icon: FaCheck,
        text: "Ownership of the vehicle once payments are completed.",
      },
      {
        icon: FaCheck,
        text: "Flexible loan terms and competitive interest rates.",
      },
      {
        icon: FaCheck,
        text: "Various financing options tailored to your credit situation.",
      },
      {
        icon: FaCheck,
        text: "Ability to customize and modify the vehicle.",
      },
      {
        icon: FaCheck,
        text: "Building equity in the vehicle over time.",
      },
      {
        icon: FaCheck,
        text: "Full access to everything",
      },
      {
        icon: MdClose,
        text: "No additional amenities",
      },
    ],
  },
  {
    title: "Trade-In Program",
    price: "60",
    benefits: [
      {
        icon: FaCheck,
        text: "A straightforward process to trade in your old vehicle.",
      },
      {
        icon: FaCheck,
        text: "Fair market value for your trade-in.",
      },
      {
        icon: FaCheck,
        text: "Reduced cost of your new car purchase.",
      },
      {
        icon: FaCheck,
        text: "Convenience of handling trade-in and purchase in one place.",
      },
      {
        icon: FaCheck,
        text: "Immediate application of trade-in value towards a new vehicle.",
      },
      {
        icon: FaCheck,
        text: "Full access to everything",
      },
      {
        icon: FaCheck,
        text: "No additional amenities",
      },
    ],
  },
];

const MembershipSlider = () => {
  return (
    <Swiper
      slidesPerView={1}
      modules={[Pagination]}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
      className=" min-h-[680px] max-h-[900px] "
    >
      {membershipData.map((item, index) => (
        <SwiperSlide key={index}>
          <div className=" border border-accent hover:bg-primary-300/80 transition-all duration-300 w-full max-w-sm xl:max-w-none mx-auto ">
            <div className=" py-5 px-[60px] border-b border-accent ">
              <h4 className="h4">{item.title}</h4>
            </div>
            {/* benefits */}
            <div className=" py-[30px] px-[60px]">
              <ul className=" flex flex-col gap-5 mb-7">
                {item.benefits.map((item, index) => (
                  <li key={index} className="flex items-center mb-4 gap-2">
                    <item.icon className=" text-accent text-lg" />
                    {item.text}
                  </li>
                ))}
              </ul>
              {/* prices & btn */}
              <p className=" text-accent mb-8 flex gap-1 items-center">
                <sup className=" text-4xl">$</sup>
                <strong className="text-6xl">{item.price}</strong>
                <em className=" self-end text-2xl">/month</em>
              </p>
              <CustomeButton
                containerStyles="w-[196px] h-[62px]"
                text="Buy Now"
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MembershipSlider;
