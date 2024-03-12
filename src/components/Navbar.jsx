import logo from "../assets/iconlogo.png";
export default function Navbar() {
  return (
    <div className="items-center relative md:px-10 px-5 font-bold bg-white text-Montserat text-sm md:text-xl text-NEUTRAL04 drop-shadow-lg flex justify-between z-40">
      <div>
        <img src={logo} className="w-28 object-top object-cover" alt="" />
      </div>
      <div className="flex gap-4">
        <div className="hover:scale-105">
          <a href="#Product">Lihat Product</a>
        </div>
        <div>Tentang Kami</div>
      </div>
    </div>
  );
}
