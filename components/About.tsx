import Image from "next/image";
import CustomButton from "./CustomButton";
import { laptop } from "@/public/images";

const About = () => {
  return (
    <div
      id="about"
      className="flex-between max-lg:flex-col gap-4 mt-5 w-full 
          container__padding bg-zinc-950 p-10"
    >
      <div className='xl:w-2/3 w-full flex justify-start items-start '>
        <Image
          src={laptop}
          alt="laptop"
          width={500}
          height={450}
          className="object-contain" 
          quality={100}
        />
      </div>
      

      <div className="w-full flex flex-col justify-end items-end gap-2 text-white">
        <p>From $799</p>
        <h1 className="text-4xl font-bold">iPad Pro</h1>
        <p>Astonishing performance. Incredibly displays</p>
        <p>Superfast wireless connectivity</p>

        <CustomButton
          title="Buy Now"
          containerStyles="px-8 mt-6 rounded-md py-2 bg-white hover:bg-slate-300 
                          active:bg-slate-200"
          textStyles="text-primary_black font-semibold"
          label="Buy product"
        />
      </div>
    </div>
  );
};

export default About;
