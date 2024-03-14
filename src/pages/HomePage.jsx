import Navbar from "../components/Navbar";
import Bg from "../assets/Bg.jpg";
import celana from "../assets/celana1.png";
import Motion from "../components/Motion";
import data from "../data";
import logo from "../assets/iconlogo.png";
import ig from "../assets/ig.png";
import wa from "../assets/wa.png";

export default function HomePage() {
  return (
    <div className="font-Montserrat">
      {/* Navbar */}
      <Navbar />
      {/* header */}
      <div
        style={{
          backgroundImage: `url(${Bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="h-[50vh] md:h-[80vh] font-Montserrat"
      >
        <div className="absolute top-18 bg-black/40 w-full h-[50vh] md:h-[80vh] z-10"></div>
        <div className=" flex flex-col items-center">
          <h1 className="relative z-20 text-5xl md:text-8xl font-black bg-gradient-to-t from-gray-600 via-white/70 to-white text-transparent bg-clip-text ">
            LAPAK SULIS
          </h1>
          <img
            src={celana}
            className="z-30 absolute top-24 md:top-32 w-[100%] md:w-[60%]"
            alt=""
          />
          <h1 className="relative z-40 text-4xl md:text-8xl font-extrabold text-white mt-36">
            NEW.COLLECTION
          </h1>
          <h1 className="relative z-40 md:text-3xl mt-5 font-extrabold text-white ">
            HARGA MURAH KUALITAS TERJAMIN
          </h1>
          <button className="relative z-40 font-bold md:text-xl text-white bg-orange-600 rounded-full py-1 px-5 md:py-2 mt-5 hover:translate-y-[-5px] duration-300 items-center">
            DISCOVER COLLECTION
          </button>
        </div>
      </div>
      <div>
        <Motion />
      </div>
      {/* content */}
      <div className="text-4xl md:text-3xl font-black text-orange-600 px-5 my-2 md:px-10 md:my-10">
        Celana Chinos
      </div>
      <div className="text-xl md:text-3xl font-black text-Black px-5 my-2 md:px-10 md:my-10">
        GAMBAR
      </div>
      {/* celana */}
      <div
        className="flex justify-between bg-LightBlue5 w-full overflow-y-hidden gap-3 py-5 px-2"
        id="Product"
        // style={{ overflowY: "hidden" }}
      >
        {data.map((item) => (
          <img
            src={item.Image}
            className="w-[50%] hover:translate-y-[-2vh] bg-white rounded-xl druation-300 w-full duration-300 p-2 drop-shadow-5xl"
            alt=""
            key={item.id}
          />
        ))}
      </div>
      <div className=" text-xl md:text-3xl font-black text-Black px-5 my-2 md:px-10 md:my-10">
        DESKRIPSI :
      </div>
      <div className=" text-xl md:text-3xl text-Black px-5 mb-5 md:px-10 md:my-10">
        <p>Bahan chinos</p>
        <p>Ukuran XL & L</p>
        <p className="font-bold">Ukuran XL :</p>
        <p>Harga Paket XL : 100k 4PCS</p>
        <p>Harga Satuan XL : 30k</p>
        <p className="font-bold">Ukuran L</p>
        <p>Harga Paket l : 80k 4PCS</p>
        <p>Harga Satuan l : 23k</p>
      </div>
      <div className="bg-LightBlue5 text-orange-600 p-5 flex flex-col items-center text-center justify-center gap-5">
        <h1 className="font-black text-3xl font-Montserrat">
          Jangan Lewatkan Kesempatan Ini !!
        </h1>
        <div>
          <img
            src={logo}
            className="w-52 object-center object-cover object-center"
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center px-2">
          <p className="m-[-5vh]">Contact Person </p>
          <div className="flex mt-[8vh] mb-[3vh]">
            <a href="https://api.whatsapp.com/send/?phone=62895422905255&text&type=phone_number&app_absent=0">
              <img
                src={wa}
                className="w-12 hover:scale-105 bg-white p-2 rounded-full drop-shadow-lg"
                alt=""
              />
            </a>
            <a href="https://www.instagram.com/lapaksulis76?igsh=MXByZXR2cHd6Y2gwdg==">
              <img
                src={ig}
                className="w-12 hover:scale-105 bg-white p-2 rounded-full drop-shadow-lg"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
