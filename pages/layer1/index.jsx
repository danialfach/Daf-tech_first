import Agustus from "../comps/Agustus.jsx";
import September from "../comps/September.jsx";
import Oktober from "../comps/Oktober";
import November from "../comps/November";
import Desember from "../comps/Desember";
import img1 from "../img/1.jpg";
import img2 from "../img/2.jpg";
import img3 from "../img/3.jpg";
import img4 from "../img/4.jpeg";
import img5 from "../img/A1.jpg";
import img6 from "../img/A2.jpg";
import img7 from "../img/A3.jpg";
import img8 from "../img/A4.jpg";
import img9 from "../img/A5.jpg";

export default function Layer1() {
  return (
    <div className="W-full h-screen py-2 px-16 bg-[#0E0E0E]">
      <div className="w-full flex mt-8 gap-4">
        <div className="lg:w-9/12 flex flex-col gap-16 ">
          {/* Carousel */}
          <div className="carousel w-full rounded-lg h-96">
            <div id="slide1" className="carousel-item relative w-full">
              <img src={img1.src} className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-square">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-square">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <img src={img2.src} className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-square">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-square">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <img src={img3.src} className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-square">
                  ❮
                </a>
                <a href="#slide4" className="btn btn-square">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
              <img src={img4.src} className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-square">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-square">
                  ❯
                </a>
              </div>
            </div>
          </div>
          {/* End Carousel */}
          {/* Karya 1 bln terakhir */}
          <div className="w-full">
            <div className="carousel carousel-center p-4 space-x-4 bg-[#1C1C1C] rounded-box">
              <div className="carousel-item">
                <img
                  src={img5.src}
                  className="rounded-box w-[500px] h-[300px]"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={img6.src}
                  className="rounded-box w-[500px] h-[300px]"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={img7.src}
                  className="rounded-box w-[500px] h-[300px]"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={img8.src}
                  className="rounded-box w-[500px] h-[300px]"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={img9.src}
                  className="rounded-box w-[500px] h-[300px]"
                />
              </div>
            </div>
          </div>
          {/* End Karya 1 bln terakhir */}
        </div>
        {/* Karya Terbaru */}
        <div className="w-3/12 h-full bg-[#1C1C1C] flex flex-col space-y-4 rounded-md">
          <div className="h-2/6 flex flex-wrap px-8 py-4 gap-4 justify-evenly">
            <img src={img1.src} className="rounded-md" />
            <img src={img2.src} className="w-28 h-28 rounded-md" />
            <img src={img3.src} className="w-28 h-28 rounded-md" />
            <img src={img4.src} className="rounded-md" />
          </div>
          {/* List Karya Perbulan */}
          <div className="overflow-y-scroll h-[300px] rounded-md pt-4 border-t-4 border-[#0E0E0E] text-white flex flex-col p-4 gap-8">
            <h4 className="text-2xl">list karya perbulan</h4>
            <Agustus />
            <September />
            <Oktober />
            <November />
            <Desember />
          </div>
          {/* end List Karya Perbulan */}
        </div>
        {/* End karya terbaru */}
      </div>
    </div>
  );
}
