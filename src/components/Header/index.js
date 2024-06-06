"use client";
import Link from "next/link";
import Logo from "./Logo";
import {
  DribbbleIcon,
  FacebookIcon,
  GithubIcon,
  LinkedinIcon,
  MoonIcon,
  SunIcon,
  TwitterIcon,
  YoutubeIcon,
} from "../Icons";
import siteMetadata from "@/src/utils/siteMetaData";
import { useState } from "react";
import { cx } from "@/src/utils";

const Header = () => {
  const [click, setClick] = useState(false);

  const toggle = () => {
    setClick(!click);
  };
  return (
    <header className="w-full p-4  px-5 sm:px-10 flex items-center justify-between">
      <Logo />

      <button
        className="inline-block sm:hidden z-50"
        onClick={toggle}
        aria-label="Hamburger Menu"
      >
        <div className="w-6 cursor-pointer transition-all ease duration-300">
          <div className="relative">
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                transform: click
                  ? "rotate(-45deg) translateY(0)"
                  : "rotate(0deg) translateY(6px)",
              }}
            >
              &nbsp;
            </span>
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                opacity: click ? 0 : 1,
              }}
            >
              &nbsp;
            </span>
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                transform: click
                  ? "rotate(45deg) translateY(0)"
                  : "rotate(0deg) translateY(-6px)",
              }}
            >
              &nbsp;
            </span>
          </div>
        </div>
      </button>

      <nav
        className=" w-max py-3 px-6 sm:px-8 border border-solid border-dark rounded-full font-medium capitalize  items-center flex  sm:hidden
        fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50
        transition-all ease duration-300
        "
        style={{
          top: click ? "1rem" : "-5rem",
        }}
      >
        <Link href="/" className="mr-2">
          Trang chủ
        </Link>
        <Link href="/about" className="mx-2">
          Giới thiệu
        </Link>
        <Link href="/categories/all" className="mx-2">
          Bài viết
        </Link>
        <Link href="/contact" className="mx-2">
          Liên hệ
        </Link>
      </nav>

      <nav
        className=" w-max py-3 px-8 font-medium rounded-full   items-center hidden sm:flex
        fixed top-2 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50"
      >
        <Link href="/" className="mr-2">
          Trang chủ
        </Link>
        <Link href="/about" className="mx-4">
          Giới thiệu
        </Link>
        <Link href="/categories/all" className="mx-2">
          Bài viết
        </Link>
        <Link href="/contact" className="mx-4">
          Liên hệ
        </Link>
      </nav>
      <div className="hidden sm:flex items-center">
        <a
          href={siteMetadata.facebook}
          rel="noopener noreferrer"
          className="inline-block w-8 h-8 mr-4"
          aria-label="Reach out to me via Facebook"
          target="_blank"
        >
          <FacebookIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
        <a
          href={siteMetadata.linkedin}
          rel="noopener noreferrer"
          className="inline-block w-6 h-6 mr-4"
          aria-label="Reach out to me via LinkedIn"
          target="_blank"
        >
          <LinkedinIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
        <a
          href={siteMetadata.github}
          rel="noopener noreferrer"
          className="inline-block w-6 h-6 mr-4"
          aria-label="Check my profile on Github"
          target="_blank"
        >
          <GithubIcon className="  hover:scale-125 transition-all ease duration-200 dark:fill-light" />
        </a>
        <a
          href={siteMetadata.youtube}
          rel="noopener noreferrer"
          className="inline-block w-8 h-8 mr-4"
          aria-label="Check my profile on Youtube"
          target="_blank"
        >
          <YoutubeIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
      </div>
    </header>
  );
};

export default Header;
