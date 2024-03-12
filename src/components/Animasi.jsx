import { motion } from "framer-motion";

export default function Animasi() {
  return (
    <div style={{ overflow: "hidden" }} className="bg-black py-3">
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "-200%" }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        style={{ whiteSpace: "nowrap" }}
      >
        <p className="text-xl text-white">
          Celana bokser dengan bahan chinos . ukuran bervariatif . dengan model
          yang terkini . cocok di segala usia.cocok untuk pria dan wanita .
          ukuran L promo di harga 100k dapat 4 harga satuan 25K.ukuran xl 120
          dapat 4 dengan harga satuan 35k
        </p>
      </motion.div>
    </div>
  );
}
