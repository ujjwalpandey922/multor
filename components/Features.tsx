import { featureProps } from "@/types";
import Image from "next/image";
const Features = () => {
  const Card = ({ name, message, url }: featureProps) => {
    return (
      <div className="flex gap-8  border-solid border-2 border-slate-100  flex-col p-4 w-[300px] ">
        <span className="flex gap-2">
          <Image
            src={url}
            width={300}
            height={300}
            alt="image"
            className="rounded-sm"
          />
        </span>
        <p className="w-full">{message}</p>
        <h1 className="text-lg font-bold">{name}</h1>
      </div>
    );
  };
  return (
    <div className="padding-x w-full mt-52 max-width">
      <div className="flex md:justify-between items-center justify-center flex-wrap px-12 gap-8 my-8 w-full ">
        <Card
          name={"Pam"}
          message="Is there a pain point that your service resolves? Tell visitors about it here"
          url="https://picsum.photos/id/111/300/300"
        />
        <Card
          name={"Micheal"}
          message="Talk about some of the details of your offer with a focus on the value people get back"
          url="https://picsum.photos/id/99/300/300"
        />
        <Card
          name={"Jim"}
          message="Alternatively, you could use this section to address some frequently asked questions."
          url="https://picsum.photos/id/22/300/300"
        />
      </div>
    </div>
  );
};

export default Features;
