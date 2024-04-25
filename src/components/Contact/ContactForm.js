"use client";
import React from "react";
import siteMetadata from "@/src/utils/siteMetaData";

export default function ContactForm() {
  return (
    <div className="mt-12 text-base xs:text-lg sm:text-xl font-medium leading-relaxed font-in">
      Nếu có những bài viết hay ho hoặc bạn muốn trao đổi với mình, hãy liên hệ
      với mình qua email dưới đây.
      <a
        href={siteMetadata.gmail}
        rel="noopener noreferrer"
        aria-label="Contact me on Gmail"
        target="_blank"
      >
        <div className="mt-8 font-medium w-48 bg-emerald-400 text-white capitalize text-lg sm:text-xl py-2 sm:py-3 px-6 sm:px-8  dark:border-light rounded cursor-pointer">
          Liên hệ ngay
        </div>
      </a>
    </div>
  );
}
