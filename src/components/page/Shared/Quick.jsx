import { RiCaravanFill } from "react-icons/ri";
import { BiHappyBeaming } from "react-icons/bi";
import { TfiCup } from "react-icons/tfi";

const Quick = () => {
  return (
    <div className="text-center pt-6 pb-6 bg-gray-200">
      <div className=" mt-28 grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2  grid-cols-1  xl:w-10/12 mx-auto">
        <div className="w-[398px] h-32 card text-gray-700">
          <figure>
            <TfiCup className="text-4xl font-bold" />
          </figure>
          <div>
            <h1 className="font-medium my-2 text-2xl">24/7 ONLINE SUPPORT</h1>
          </div>
        </div>
        <div className="w-[398px] h-32 card text-gray-700">
          <figure>
            <BiHappyBeaming className="text-4xl font-bold" />
          </figure>
          <div>
            <h1 className="font-medium my-2 text-2xl">SECURE PAYMENT</h1>
          </div>
        </div>
        <div className="w-[398px] h-32 card text-gray-700">
          <figure>
            <RiCaravanFill className="text-4xl font-bold" />
          </figure>
          <div>
            <h1 className="font-medium text-2xl my-2">WORLDWIDE SHIPPING</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quick;
