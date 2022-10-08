import Gambar from "../img/1.jpg";
import Bejo from "./img/bejo.jpg";
import Dani from "./img/dani.jpg";
import Ega from "./img/ega.jpg";
import Navbar from "../comps/Navbar";

export default function komik() {
  return (
    <div className="w-full h-screen">
      <Navbar />
      <div className="w-full h-screen bg-[#0E0E0E]">
        <div className=" h-3/6 flex gap-2 space-x-8 justify-center items-center">
          <img
            src={Gambar.src}
            alt=""
            className="w-56 h-56 rounded-lg bg-cover"
          />
          <p className="w-5/12 text-lg text-gray-400">
          One Piece adalah sebuah seri manga Jepang yang ditulis dan diilustrasikan oleh Eiichiro Oda. manga ini telah dimuat di majalah Weekly Shōnen Jump milik Shueisha sejak tanggal 22 Juli 1997, dan telah dibundel menjadi 103 volume tankōbon hingga Agustus 2022. Ceritanya mengisahkan petualangan Monkey D. Luffy, seorang anak laki-laki yang memiliki kemampuan tubuh elastis seperti karet setelah memakan Buah Iblis secara tidak disengaja.
          </p>
        </div>
        <div className="w-full h-3/6 flex items-center justify-center space-x-28">
          <div className="w-[480px] h-80 rounded-lg px-8 flex justify-start items-center bg-[#1C1C1C]">
            <ul className="flex flex-col gap-4 text-xl text-gray-300">
              <li>
                <a href="#">Chapter 1.Perjalan kekanesa</a>
              </li>
              <li>
                <a href="#">Chapter 2.Perjalan ngopi</a>
              </li>
              <li>
                <a href="#">Chapter 3.Perjalan ini</a>
              </li>
              <li>
                <a href="#">Chapter 4.Perjalan isekai</a>
              </li>
              <li>
                <a href="#">Chapter 5.Perjalan gunung kawi</a>
              </li>
              <li>
                <a href="#">Chapter 6.Perjalan indonesia</a>
              </li>
            </ul>
          </div>
          <div className="w-72 h-80 rounded-lg bg-slate-700 p-4 overflow-y-scroll">
            <div className="w-full flex items-center gap-2 border-b py-4">
              <img
                src={Ega.src}
                className="w-8 h-8 rounded-full bg-orange-400"
              ></img>
              {/*gantien gambar*/}
              <h1 className="text-sm font-bold">@Ega gofur:</h1>
              <p className="text-sm">Keren animenya kak</p>
            </div>
            <div className="w-full flex items-center gap-2 border-b py-4">
              <img
                src={Dani.src}
                className="w-8 h-8 rounded-full bg-orange-400"
              ></img>
              {/*gantien gambar*/}
              <h1 className="text-sm font-bold">@Danil:</h1>
              <p className="text-sm">Ceritanya Menarik!!!</p>
            </div>
            <div className="w-full flex items-center gap-2 border-b py-4">
              <img
                src={Bejo.src}
                className="w-8 h-8 rounded-full bg-orange-400"
              ></img>
              {/*gantien gambar*/}
              <h1 className="text-sm font-bold">@Bejo:</h1>
              <p className="text-sm">Boleh req?</p>
            </div>
            <div className="w-full flex items-center gap-2 border-b py-4">
              <img
                src={Bejo.src}
                className="w-8 h-8 rounded-full bg-orange-400"
              ></img>
              {/*gantien gambar*/}
              <h1 className="text-sm font-bold">@Bejo:</h1>
              <p className="text-sm">Boleh req?</p>
            </div>
            <div className="w-full flex items-center gap-2 border-b py-4">
              <img
                src={Bejo.src}
                className="w-8 h-8 rounded-full bg-orange-400"
              ></img>
              {/*gantien gambar*/}
              <h1 className="text-sm font-bold">@Bejo:</h1>
              <p className="text-sm">Boleh req?</p>
            </div>
            <div className="w-full py-8">
              <input
                type="text"
                className="w-full text-gray-600 p-4 bg-slate-200 h-12 rounded-lg"
                placeholder="Your comment....."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
