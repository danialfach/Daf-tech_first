import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";

export default function Navabar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="w-full py-8 px-16 bg-[#0E0E0E] space-y-2">
      <div className="flex justify-start space-x-8 items-center">
        <button onClick={handleClick} className="text-white text-3xl">
          <GiHamburgerMenu />
        </button>
        <h2 className="text-white text-3xl font-bold ">Seiji Kuruna</h2>
      </div>
      <div
        className={
          !nav
            ? "hidden"
            : "w-32 bg-[#F45C43] rounded text-sm p-4 text-white flex justify-center items-center"
        }
      >
        <ul className="flex flex-col gap-4">
          <li>
            <Link href="../">HOME</Link>
          </li>
          <li>
            <Link href="../komik">KOMIK</Link>
          </li>
          <li>
            <Link href="../novel">NOVEL</Link>
          </li>
          <li>
            <div class="group inline-block relative">
              <button class=" font-semibold  rounded inline-flex items-center">
                <span class="mr-1">ABOUT</span>
              </button>
              <ul class="absolute hidden w-36  text-white pt-1 group-hover:block ">
                <li class="">
                  <a
                    class="rounded-t bg-gray-800 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    INSTAGRAM
                  </a>
                </li>
                <li class="">
                  <a
                    class=" bg-gray-800 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    FACEBOOK
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="../layer3">DONATION?</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
