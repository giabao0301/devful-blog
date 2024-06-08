import ContactForm from "../../../components/Contact/ContactForm";
import siteMetadata from "../../../utils/siteMetaData";
import Image from "next/image";
import contactImage from "../../../../public/contact-devful.jpg";

export const metadata = {
  title: "Liên hệ",
  description: `Liên hệ thông qua email này: ${siteMetadata.email}`,
};

export default function Contact() {
  return (
    <section className="w-full h-auto md:h-[75vh] dark:border-light flex  flex-col md:flex-row items-center justify-center text-dark dark:text-light">
      <div className="inline-block w-full sm:w-4/5 md:w-2/5 h-full  dark:border-light">
        <Image
          width={500}
          height={500}
          className="w-4/5  xs:w-3/4 md:w-full h-full object-contain object-center"
          priority
          src={contactImage}
          alt="bell"
          sizes="(max-width: 768px) 100vw,(max-width: 1180px) 50vw, 50vw"
        />
      </div>
      <div className="w-full  md:w-3/5 flex flex-col items-start justify-center px-5 xs:px-10 md:px-16 pb-8">
        <h2 className="font-bold capitalize  text-2xl xs:text-3xl sm:text-4xl">
          Hãy kết nối nào!
        </h2>
        <ContactForm />
      </div>
    </section>
  );
}
