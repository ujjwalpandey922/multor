import { cardProps } from "@/types";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
const Notes = () => {
  const Card = ({ rating, name, location, message, url }: cardProps) => {
    return (
      <div className="flex gap-8 bg-slate-100 border-solid border-2 border-gray-300 shadow-lg shadow-cyan-500/50 rounded-2xl flex-col p-4 w-[300px] ">
        <span className="flex gap-2">
          {[...Array(rating)].map((_, i) => (
            <AiFillStar key={i} className="text-green-600 " />
          ))}
        </span>
        <p className="w-full">{message}</p>
        <div className=" flex gap-8 justify-start align-center">
          <Image
            src={url}
            width={50}
            height={50}
            alt="image"
            className="rounded-sm"
          />
          <div className="flex-center flex-col ">
            <h1>{name}</h1>
            <p>{location}</p>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="padding-x w-full flex flex-col gap-12 mt-80 max-width">
      <h1 className="text-center text-green-600 text-4xl font-bold">
        DON'T JUST TAKE OUR WORD FOR IT
      </h1>
      <div className="flex md:justify-between items-center justify-center flex-wrap px-12 gap-8 my-8 w-full ">
        <Card
          rating={4}
          name={"Pam"}
          location="Scranton"
          message="Share a real testimonial that hits some of your benefits (but isn't too sales-y)."
          url="https://picsum.photos/seed/picsum/200/200"
        />
        <Card
          rating={5}
          name={"Jim"}
          location="Scranton"
          message="Share a real testimonial that hits some of your benefits (but isn't too sales-y)."
          url="https://picsum.photos/seed/picsum/200/200"
        />
      </div>
    </div>
  );
};

export default Notes;
