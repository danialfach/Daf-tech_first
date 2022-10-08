import jadwal from "./json/jad.json";

export default function Jadwal() {
  return (
    <div className="w-full h-16 bg-[#0E0E0E]  flex justify-center  items-center  relative z-10">
      <div className="space-x-4 px-7 bg-[#222222] rounded-sm py-4">
        {jadwal &&
          jadwal.map((data, index) => {
            return (
              <div
                key={index}
                class="w-36 group inline-block relative text-white bg-[#333333] py-2 rounded"
              >
                <button class=" font-semibold inline-flex items-center px-12 rounded  cursor-pointer transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-1 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-gradient-to-r before:from-[#F45C43] before:via-[#F45C43] before:to-[#F45C43] hover:before:w-full hover:before:opacity-100">
                  <span class="mr-1">{data.day}</span>
                </button>
                <ul class="absolute hidden w-36 rounded-xl text-white group-hover:block pt-4">
                  <li class="border-b border-black">
                    <a
                      class="rounded-t bg-gray-800 py-2 px-4 block whitespace-no-wrap"
                      href="#"
                    >
                      {data.jadwal1}
                    </a>
                  </li>
                  <li class="border-b border-black">
                    <a
                      class=" bg-gray-800 py-2 px-4 block whitespace-no-wrap"
                      href="#"
                    >
                      {data.jadwal2}
                    </a>
                  </li>
                  <li class="border-b border-black">
                    <a
                      class="rounded-b bg-gray-800 py-2 px-4 block whitespace-no-wrap"
                      href="#"
                    >
                      {data.jadwal3}
                    </a>
                  </li>
                </ul>
              </div>
            );
          })}
      </div>
    </div>
  );
}
