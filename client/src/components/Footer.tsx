import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="mt-16 flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-center md:gap-100 bg-gradient-to-r to-emerald-800 from-sky-700 p-8 rounded-lg">
      <div className="flex flex-col gap-4 items-center md:items-start">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/catalogue.ico" alt="TrendLama" width={36} height={36} />
          <p className="hidden md:block text-md font-medium tracking-wider text-white">
            KATALOG-GRENGGENG
          </p>
        </Link>
        <p className="text-sm text-gray-400">© 2025 Grenggeng.</p>
        <p className="text-sm text-gray-400">All rights reserved.</p>
      </div>
      <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start break-words text-center md:text-left">
        <p className="text-lg text-amber-50">Tautan</p>
        {/* <Link href="/" className="hover:text-white transition-all duration-300">Beranda</Link>
        <Link href="" className="hover:text-white transition-all duration-300">Kontak</Link> */}
        <Link href="https://grenggeng.kec-karanganyar.kebumenkab.go.id/" target="_blank" className="hover:text-sky-500 transition-all duration-300">Website - Desa Grenggeng</Link>
        <Link href="https://kupmargorahayu.framer.website/" target="_blank" className="hover:text-sky-500 transition-all duration-300">Website - KUP Margo Rahayu</Link>
        <Link href="https://maps.app.goo.gl/U5Phs73PVFU7zvR68" target="_blank" className="hover:text-sky-500 transition-all duration-300">Google Maps - KUP Margo Rahayu, Karanganyar</Link>
      </div>
      {/* <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <p className="text-lg text-amber-50">Links</p>
        <Link href="/" className="hover:text-white transition-all duration-300">All Products</Link>
      </div>
      <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <p className="text-lg text-amber-50">Links</p>
        <Link href="/" className="hover:text-white transition-all duration-300">About</Link>
        <Link href="/" className="hover:text-white transition-all duration-300">Contact</Link>
        <Link href="/" className="hover:text-white transition-all duration-300">Blog</Link>
        <Link href="/" className="hover:text-white transition-all duration-300">Affiliate Program</Link>
      </div> */}
    </div>
  );
};

export default Footer;
