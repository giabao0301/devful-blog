import AboutCoverSection from "../../../components/About/AboutCoverSection";
import Skills from "../../../components/About/Skills";
import Link from "next/link";

export const metadata = {
  title: "Giới thiệu",
  description: `Giới thiệu về bản thân tôi, kỹ năng và kinh nghiệm làm việc.`,
};

export default function About() {
  return (
    <>
      <AboutCoverSection />
      <Skills />
    </>
  );
}
