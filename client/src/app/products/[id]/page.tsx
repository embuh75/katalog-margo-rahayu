import { ProductsType } from "@/types";
import Image from "next/image";

// TEMPORARY
 const products: ProductsType = [
  {
    id: 1,
    name: "Tas dan Dompet Anyaman",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 39.9,
    sizes: ["s", "m", "l", "xl", "xxl"],
    colors: ["gray", "purple", "green"],
    images: {
      gray: "/anyaman/452551203_18243629386301832_4013782523232155832_n.jpg",
      purple: "/anyaman/452551203_18243629386301832_4013782523232155832_n.jpg",
      green: "/anyaman/452551203_18243629386301832_4013782523232155832_n.jpg",
    },
  },
  {
    id: 2,
    name: "Dompet Anyaman",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 59.9,
    sizes: ["s", "m", "l", "xl"],
    colors: ["gray", "green"],
    images: { gray: "/anyaman/anyaman-pandan-produkaslikebumen.jpg", green: "/anyaman/anyaman-pandan-produkaslikebumen.jpg" },
  },
  {
    id: 3,
    name: "Dompet Anyaman 2",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 69.9,
    sizes: ["s", "m", "l"],
    colors: ["green", "blue", "black"],
    images: {
      green: "/anyaman/oskm_16718446_riza_IMG_20161015_142004.jpg",
      blue: "/anyaman/oskm_16718446_riza_IMG_20161015_142004.jpg",
      black: "/anyaman/oskm_16718446_riza_IMG_20161015_142004.jpg",
    },
  },
  {
    id: 4,
    name: "Sendal Anyaman",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 29.9,
    sizes: ["s", "m", "l"],
    colors: ["white", "pink"],
    images: { white: "/anyaman/oskm_16718446_riza_IMG_20161015_142217.jpg", pink: "/anyaman/oskm_16718446_riza_IMG_20161015_142217.jpg" },
  },
  {
    id: 5,
    name: "Topi Anyaman",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 49.9,
    sizes: ["s", "m", "l"],
    colors: ["red", "orange", "black"],
    images: {
      red: "/anyaman/oskm_16718446_riza_IMG_20161015_142402.jpg",
      orange: "/anyaman/oskm_16718446_riza_IMG_20161015_142402.jpg",
      black: "/anyaman/oskm_16718446_riza_IMG_20161015_142402.jpg",
    },
  },
  {
    id: 6,
    name: "Purun Anyaman",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 59.9,
    sizes: ["40", "42", "43", "44"],
    colors: ["gray", "white"],
    images: { gray: "/anyaman/purun.jpeg", white: "/anyaman/purun.jpeg" },
  },
  {
    id: 7,
    name: "Topi Anyaman Jerami",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 69.9,
    sizes: ["40", "42", "43"],
    colors: ["gray", "pink"],
    images: { gray: "/anyaman/topi-anyaman-pandan-motif-keren-untuk-cowo-bagus-murah-kampoeng-anyaman-grenggeng-kebumen-rembyak-non-finishing.webp", pink: "/anyaman/topi-anyaman-pandan-motif-keren-untuk-cowo-bagus-murah-kampoeng-anyaman-grenggeng-kebumen-rembyak-non-finishing.webp" },
  },
  {
    id: 8,
    name: "Tas Putih Anyaman",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 59.9,
    sizes: ["s", "m", "l"],
    colors: ["blue", "green"],
    images: { blue: "/anyaman/tui92s1ogmjti0x.jpeg", green: "/anyaman/tui92s1ogmjti0x.jpeg" },
  },
];

export const generateMetadata = async ({ params }: { params: { id: string } }) => {
  const product = products.find((p) => p.id === Number(params.id));

  if (!product) {
    return {
      title: "Produk tidak ditemukan",
      description: "Produk yang dicari tidak tersedia",
    };
  }

  return {
    title: product.name,
    description: product.description,
  };
};

const ProductPage = async ({
  params,
  searchParams,
}: any) => {
  const product = products.find((p) => p.id === Number(params.id));
  if (!product) return <div>Produk tidak ditemukan</div>;

  const selectedSize = searchParams.size || product.sizes[0];
  const selectedColor = searchParams.color || product.colors[0];
  return (
    <div className="flex flex-col gap-4 lg:flex-row md:gap-12 mt-12">
      {/* IMAGE */}
      <div className="w-full lg:w-5/12 relative aspect-square md:aspect-[2/3]">
        <Image
          src={product.images[selectedColor]}
          alt={product.name}
          fill
          className="object-contain rounded-md"
        />
      </div>
      {/* DETAILS */}
      <div className="w-full lg:w-7/12 flex flex-col gap-4">
        <h1 className="text-2xl font-medium">{product.name}</h1>
        <p className="text-gray-500">{product.description}</p>
        {/* <h2 className="text-2xl font-semibold">${product.price.toFixed(2)}</h2> */}
        {/* <ProductInteraction
          product={product}
          selectedSize={selectedSize}
          selectedColor={selectedColor}
        /> */}
       {/* CARD INFO */}
        {/* <div className="flex items-center gap-2 mt-4">
          <Image
            src="/klarna.png"
            alt="klarna"
            width={50}
            height={25}
            className="rounded-md"
          />
          <Image
            src="/cards.png"
            alt="cards"
            width={50}
            height={25}
            className="rounded-md"
          />
          <Image
            src="/stripe.png"
            alt="stripe"
            width={50}
            height={25}
            className="rounded-md"
          />
        </div> */}
        {/* <p className="text-gray-500 text-xs">
          By clicking Pay Now, you agree to our{" "}
          <span className="underline hover:text-black">Terms & Conditions</span>{" "}
          and <span className="underline hover:text-black">Privacy Policy</span>
          . You authorize us to charge your selected payment method for the
          total amount shown. All sales are subject to our return and{" "}
          <span className="underline hover:text-black">Refund Policies</span>.
        </p> */}
      </div>
    </div>
  );
};

export default ProductPage;
