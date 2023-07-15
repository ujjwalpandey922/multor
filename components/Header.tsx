import Image from "next/image";

const Header = () => {
  return (
    <div className="header bg-[url('/sky.jpg')] bg-cover max-width  bg-no-repeat">
      <div className="flex-1 padding-x pt-6">
        <Image
          src="/logo1.png"
          alt="logo"
          width={200}
          height={100}
          className="mb-10"
        />
        <h1 className="header__title uppercase">
          Describe the value of booking an appointment
        </h1>
        <p className="header__subtitle ">
          No need to get clever. Tell people exactly what you're offering, then
          use this space to communicate your key value proposition.{" "}
        </p>
      </div>
    </div>
  );
};
export default Header;
