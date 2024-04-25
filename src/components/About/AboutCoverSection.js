import Image from "next/image";
import React from "react";
import profileCharacter from "../../../public/character.png";

const AboutCoverSection = () => {
  return (
    <section className="w-full md:h-[75vh]  dark:border-light flex flex-col md:flex-row items-center justify-center text-dark dark:text-light">
      <div className="w-full md:w-1/2 h-full flex justify-center">
        <Image
          src={profileCharacter}
          alt="Devful Character"
          className="w-4/5  xs:w-3/4 md:w-full h-full object-contain object-center"
          priority
          sizes="(max-width: 768px) 100vw,(max-width: 1180px) 50vw, 50vw"
        />
      </div>

      <div className="w-full md:w-1/2 flex flex-col text-left items-start justify-center px-5 xs:p-10 pb-10 lg:px-16">
        <h2 className="font-bold capitalize text-4xl xs:text-5xl sxl:text-6xl  text-center lg:text-left">
          Khám phá về Devful
        </h2>
        <p className="font-medium mt-4 text-base">
          Chào mừng bạn đến với Devful Blog! Ở đây, chúng tôi tập trung vào việc
          chia sẻ những kiến thức mới nhất và hữu ích nhất về lập trình cho cộng
          đồng lập trình viên và những người muốn tìm hiểu về lĩnh vực này.
        </p>
      </div>
    </section>
  );
};

export default AboutCoverSection;
