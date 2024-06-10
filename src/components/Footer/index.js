"use client";
import React from "react";
import { useForm } from "react-hook-form";
import {
  DribbbleIcon,
  FacebookIcon,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
  GmailIcon,
} from "../Icons";
import Link from "next/link";
import siteMetadata from "../../utils/siteMetaData";

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <footer className="mt-16 rounded-2xl bg-dark dark:bg-accentDark/90 m-2 sm:m-10 flex flex-col items-center text-light dark:text-dark">
    <section className="flex flex-col md:flex-row gap-x-52">
     <div className="flex flex-col items-center">  
      <h3 className="mt-16 font-medium dark:font-bold text-center capitalize text-2xl sm:text-3xl lg:text-4xl ">
        Đăng ký nhận bản tin
      </h3>
      <p className="mt-5 px-4 text-center w-full font-light dark:font-medium text-sm sm:text-base">
        Nhận thông báo về bài viết mới nhất
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-6 w-fit sm:min-w-[384px] flex items-stretch bg-light dark:bg-dark p-1 sm:p-2 rounded mx04"
      >
        <input
          type="email"
          placeholder="Nhập email của bạn"
          {...register("email", { required: true, maxLength: 80 })}
          className="w-full bg-transparent pl-4 sm:pl-0 text-dark focus:border-dark focus:ring-0 border-0  mr-2 pb-1"
        />

        <input
          type="submit"
          value="Đăng ký"
          className="bg-dark text-light dark:text-dark dark:bg-light cursor-pointer font-medium rounded px-3 sm:px-5 py-1"
        />
      </form>
      <div className="flex items-center mt-8">
        <a
          href={siteMetadata.facebook}
          className="inline-block w-8 h-8 mr-4"
          aria-label="Reach out to me via Facebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
        <a
          href={siteMetadata.linkedin}
          className="inline-block w-6 h-6 mr-4"
          aria-label="Reach out to me via LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>

        <a
          href={siteMetadata.github}
          className="inline-block w-6 h-6 mr-4 fill-light"
          aria-label="Check my profile on Github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon className="fill-light dark:fill-dark  hover:scale-125 transition-all ease duration-200" />
        </a>
        <a
          href={siteMetadata.gmail}
          className="inline-block w-7 h-7 mr-4"
          aria-label="Reach out to me via Gmail"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GmailIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
      </div>
    </div>

    <div className="mt-28">
      <h4 className="font-semibold dark:font-bold text-xl mb-2">Thông tin liên hệ</h4>
      <p>Email: devful@gmail.com</p>
      <p>Hotline: +84 93 512 68 68</p>
      <p>Địa chỉ: Khu phố 6, Thủ Đức, TP.HCM</p>
      <p>Giờ làm việc: 24/7</p>
    </div>
    </section> 

      <div className="w-full  mt-16 md:mt-24 relative font-medium  py-6 px-8 flex  flex-col md:flex-row items-center justify-between">
        <span className="text-center">
          &copy;2024 Devful. All rights reserved.
        </span>
        {/* <Link
          href="/sitemap.xml"
          className="text-center underline my-4 md:my-0"
        >
          sitemap.xml
        </Link> */}
        <div className="text-center">
          Made with &hearts; by &nbsp;
          <a
            href="https://devful-blog.vercel.app/"
            className="underline"
            target="_blank"
          >
            Devful
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
