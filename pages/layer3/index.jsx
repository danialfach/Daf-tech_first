import Navbar from "../comps/Navbar";
import gambar from "../img/1.jpg";
import gambar1 from "../img/2.jpg";
import gambar2 from "../img/A1.jpg";
import gambar3 from "../img/A4.jpg";
import { BsCaretRightFill, BsCaretDownFill } from "react-icons/bs";

const Layer3 = () => {
  return (
    <div className="w-full h-screen bg-[#0E0E0E]">
      <Navbar />
      <div className="w-full flex pt-4 justify-around items-center">
        <div className="w-72 h-72">
          <a href="#">
            <img className="rounded-md" src={gambar.src} alt="" />
          </a>
        </div>
        <div className="w-72 h-72">
          <a href="#">
            <img className="rounded-md" src={gambar1.src} alt="" />
          </a>
        </div>
        <div className="w-72 h-72">
          <a href="#">
            <img className="rounded-md" src={gambar2.src} alt="" />
          </a>
        </div>
        <div className="w-72 h-72">
          <a href="#">
            <img className="rounded-md" src={gambar3.src} alt="" />
          </a>
        </div>
      </div>
      <div className="w-full h-auto px-12">
        <div className="bg-[#1C1C1C] rounded-md h-60 flex flex-col py-8 items-center">
          <h1 className="text-4xl">Support</h1>
          <div className="flex space-x-40">
            <div className="flex flex-col items-start py-8 text-2xl">
              <p className="flex items-center gap-2">
                <BsCaretRightFill />
                Donasi <a href="www.coffee.com">coffee.com</a>
              </p>
              <p className="flex items-center gap-2">
                <BsCaretRightFill />
                Donasi <a href="www.coffee.com">Paypal</a>
              </p>
              <p className="flex items-center gap-2">
                <BsCaretRightFill />
                Donasi <a href="www.coffee.com">Kita Bisa</a>
              </p>
            </div>
            <div className="flex flex-col items-start py-8 text-2xl">
              <p className="flex items-center gap-2">
                <BsCaretRightFill />
                Donasi <a href="www.coffee.com">coffee.com</a>
              </p>
              <p className="flex items-center gap-2">
                <BsCaretRightFill />
                Donasi <a href="www.coffee.com">Paypal</a>
              </p>
              <p className="flex items-center gap-2">
                <BsCaretRightFill />
                Donasi <a href="www.coffee.com">Kita Bisa</a>
              </p>
            </div>
            <div className="flex flex-col items-start py-8 text-2xl">
              <p className="flex items-center gap-2">
                <BsCaretRightFill />
                Donasi <a href="www.coffee.com">coffee.com</a>
              </p>
              <p className="flex items-center gap-2">
                <BsCaretRightFill />
                Donasi <a href="www.coffee.com">Paypal</a>
              </p>
              <p className="flex items-center gap-2">
                <BsCaretRightFill />
                Donasi <a href="www.coffee.com">Kita Bisa</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layer3;
