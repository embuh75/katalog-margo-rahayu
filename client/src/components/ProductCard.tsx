"use client";

import { ProductType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ProductCard = ({ product }: { product: ProductType }) => {
  const [productTypes, setProductTypes] = useState({
    size: product.sizes[0],
    color: product.colors[0],
  });

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="shadow-lg rounded-lg overflow-hidden">
      {/* IMAGE */}
      <div className="relative aspect-square md:aspect-[2/3] cursor-pointer" onClick={() => setIsOpen(true)}>
        <Image
          src={product.images[productTypes.color]}
          alt={product.name}
          fill
          className="object-cover hover:scale-105 transition-all duration-300"
        />
      </div>
      {/* MODAL */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex items-center justify-center">
          <div className="relative max-w-lg w-full p-4 hover:scale-105 transition-all duration-300 cursor-pointer" onClick={() => setIsOpen(false)}>
            <Image
              src={product.images[productTypes.color]}
              alt={product.name}
              width={800}
              height={1200}
              className="rounded-xl object-contain mx-auto shadow-xl"
            />
          </div>
        </div>
      )}
      {/* PRODUCT DETAIL */}
      <div className="flex flex-col gap-4 p-4">
        <h1 className="font-medium">{product.name}</h1>
        <p className="text-sm text-gray-500">{product.shortDescription}</p>
        <Link href={`/products/${product.id}`}>
          <div className="w-full bg-emerald-800 hover:bg-sky-700 transition-all duration-300 text-white p-2 rounded-lg cursor-pointer flex items-center justify-center gap-2">Detail Produk</div>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
