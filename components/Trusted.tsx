import Google from "@/public/assets/Google.svg";
import Slack from "@/public/assets/Slack.svg";
import Truspilot from "@/public/assets/Trustpilot.svg";
import Cnn from "@/public/assets/CNN.svg";
import Cluth from "@/public/assets/Clutch.svg";
import Image from "next/image";

const Trusted = () => {
  return (
    <div className="flex w-full flex-col items-center lg:container lg:flex-row lg:justify-between lg:px-20">
      <p className="text-[#FFFFFF] text-center lg:text-[18px]">
        Trusted by these companies
      </p>
      <div className="grid grid-cols-3 items-center justify-center justify-items-center px-[20px] align-middle  lg:grid-cols-5">
        <Image src={Google} alt="Google logo" />
        <Image src={Slack} alt="Slack logo" />
        <Image src={Truspilot} alt="Truspilot logo" />
        <Image src={Cnn} alt="Cnn logo" />
        <Image src={Cluth} alt="Cluth logo" />
      </div>
    </div>
  );
};
export default Trusted;
