import Image from "next/image";
import Link from "next/link";
import profileImg from "@/public/profile-img.png";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-dark">
      <div className=" w-12 md:w-16 rounded-full overflow-hidden  mr-2 md:mr-4">
        <Image
          src={profileImg}
          alt="CodeBucks logo"
          className="w-full h-auto rounded-full"
          sizes="20vw"
          priority
        />
      </div>
    </Link>
  );
};

export default Logo;
