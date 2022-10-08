import Gambar from "../img/A1.jpg";
import Bejo from "./img/bejo.jpg";
import Dani from "./img/dani.jpg";
import Ega from "./img/ega.jpg";
import Navbar from "../comps/Navbar";

export default function novel() {
  return (
    <div className="w-full h-screen bg-[#0E0E0E]">
      <Navbar />
      <div className="w-full h-screen bg-[#0E0E0E]">
        <div className="w-full h-3/6 flex gap-2 space-x-8 justify-evenly items-center">
          <img src={Gambar.src} alt="" className="h-60 rounded-lg bg-cover" />
          <p className="w-5/12 text-lg text-gray-400">
          Alif baru saja tamat dari Pondok Madani. Dia bahkan sudah bisa bermimpi dalam bahasa Arab dan Inggris. Impiannya? Tinggi betul. Ingin belajar teknologi tinggi di Bandung seperti Habibie, lalu merantau sampai ke Amerika.
          </p>
        </div>
        <div className="w-full h-3/6 flex items-center justify-center space-x-28">
          <div className="w-[480px] h-80 rounded-lg px-8 flex justify-start items-center bg-[#1C1C1C] overflow-y-auto">
            <div className="flex flex-col gap-4 text-xl text-gray-300">
              <p>Tokoh-Tokoh:</p>
              <p>
                <a href="#">Alif: Tokoh 'aku' dalam cerita ini yang berasal dari Maninjau.</a>
              </p>
              <p>
                <a href="#">Raisa: Teman sekaligus tetangga Alif di Bandung, dan Alif jatuh hati padanya.</a>
              </p>
              <p>
                <a href="#">Rusdi: Teman satu grup Alif yang unik dan pandai berpantun.</a>
              </p>
              <p>
                <a href="#">Agam: Teman Alif di grup "UNO" berasal dari Sumatra di Bandung yang humoris.</a>
              </p>
              <p>
                <a href="#">Wira: Teman Alif di grup "UNO" dari Jawa di Bandung yang atletis.</a>
              </p>
            </div>
          </div>
          <div className="w-72 h-80 rounded-lg bg-slate-400">
            <img src={Gambar.src} alt="" className="w-72 rounded-lg" />
            <p className="text-sm text-gray-100 p-3 flex items-center">
            Novel karya Andrea Hirata yang diterbitkan oleh Bentang Pustaka pada tahun 2005. Novel ini bercerita tentang 10 anak dari keluarga miskin yang bersekolah di sebuah sekolah Muhammadiyah di Belitung yang penuh dengan keterbatasan. 
            </p>
          </div>
          <div className="w-72 h-80 rounded-lg bg-slate-700 p-4 overflow-y-scroll">
            <div className="w-full flex items-center gap-2 border-b py-4">
              <img
                src={Ega.src}
                className="w-8 h-8 rounded-full bg-orange-400"
              ></img>
              {/*gantien gambar*/}
              <h1 className="text-sm font-bold">@Ega gofur:</h1>
              <p className="text-sm">Keren Novelnya kak</p>
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
              <p className="text-sm">Isinya bikin hati tersentuh...</p>
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
