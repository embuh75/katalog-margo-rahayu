import { ProductsType } from "@/types";
import Categories from "./Categories";
import ProductCard from "./ProductCard";
import Filter from "./Filter";

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

const ProductList = ({ category,params }: { category: string, params:"homepage" | "products" }) => {
  return (
    <div className="w-full">
      {params === "products" && <Filter/>}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-12">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
