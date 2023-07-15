import Image from "next/image";

const About = () => {
  return (
    <div className="flex padding-x mt-52 max-width gap-8 sm:justify-between flex-wrap justify-center items-center">
      <Image src="/bg2.jpg" width={500} height={500} alt="image" />
      <div className="flex flex-col gap-4 md:w-1/2">
        <h1 className="font-bold text-green-600">ABOUT</h1>
        <h3 className="font-semibold capitalize text-3xl">
          Some more information about your business
        </h3>
        <p className="text-lg text-green-950">
          Share a little about yourself as a business owner, or maybe describe
          what makes your service unique. Give visitors one more reason to care
          about your offer and want to work with you.
        </p>
      </div>
    </div>
  );
};

export default About;
