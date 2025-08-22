import ProductList from "@/components/ProductList";
import Image from "next/image";

const Homepage = async ({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>;
}) => {
  const category = (await searchParams).category;
  return (
    <div className="">
      <div className="relative aspect-[3/1] mb-12">
        <Image className="mask-y-from-70% mask-y-to-90% rounded-lg" src="/anyaman/banner.jpg" alt="Featured Product" fill />
        <div className="absolute w-full h-full flex flex-col items-center justify-center backdrop-blur-xs text-shadow-lg">
          <h1 className="text-xl font-semibold text-white md:text-3xl lg:text-4xl">Selamat Datang di</h1>
          <span className="text-xl md:text-4xl lg:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 leading-relaxed">Website Katalog Desa Grenggeng</span>
        </div>
      </div>
      <ProductList category={category} params="homepage"/>
    </div>
  );
};

export default Homepage;
