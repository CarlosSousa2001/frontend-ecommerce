import { getAllProduct, type Product, type ProductsResponse } from "@/api/get-all-products";
import { Hero } from "@/components/Hero";
import { ProductCardSlide } from "@/components/ProductCard";
import { RoundedIcon } from "@/components/RoundedIcon/Index";
import box from '../../public/boxone.svg'
import coupon from '../../public/ticket.svg'
import shield from '../../public/shield.svg'
import credit from '../../public/credit.svg'
import power from '../../public/power.svg'
import promo from '../../public/promotion.svg'
import rocket from '../../public/rocket.svg'
import shop from '../../public/shop.svg'
import { getRecommendationProduct } from "@/api/get-recommendation-products";
import { getProductCategory } from "@/api/get-product-category";


// async function getAllProductsFetch(): Promise<ProductsResponse> {
//   return await getAllProduct();
// }

// async function getAllProductsFetch(): Promise<Product[]> {
//   return await getRecommendationProduct();
// }

async function getProductByCategory(category: string): Promise<ProductsResponse> {
  return await getProductCategory({ category: category });
}
export default async function Home() {

  // const data = await getAllProductsFetch();

  const cell = await getProductByCategory("Electronics");

  const movies = await getProductByCategory("Movies");

  return (
    <main className="w-full flex flex-col min-h-screen">
      <Hero />

      <div className="w-full bg-gradient-to-b from-[#ffe600]  to-neutral-100">

        <div className="max-w-screen-2lg m-auto flex flex-col items-center gap-4 -mt-[46px]">

          <div className="grid grid-cols-8 gap-8  z-20 h-56">
            <RoundedIcon text="Ate 12x s/juros" img={credit} color="" />
            <RoundedIcon text="Lojas oficiais" img={shop} color="blue" />
            <RoundedIcon text="Mais vendidos" img={rocket} color="red" />
            <RoundedIcon text="Pronta entrega" img={power} color="yellow" />
            <RoundedIcon text="Ofertas com cupom" img={coupon} color="red" />
            <RoundedIcon text="Frete grátis" img={box} color="yellow" />
            <RoundedIcon text="Promoção do dia" img={promo} color="green" />
            <RoundedIcon text="Garantia" img={shield} color="violet" />

          </div>

        </div>
      </div>

      {/* <div className="max-w-screen-2lg m-auto flex flex-col items-center gap-4 ">
        <ProductCardSlide item={data} sectionTitle={"Lista de interesses"} />
      </div> */}

      <div className="max-w-screen-2lg m-auto flex flex-col items-center gap-4 ">
        <ProductCardSlide item={cell.content} sectionTitle={"Celulares"} />
      </div>

      <div className="max-w-screen-2lg m-auto flex flex-col items-center gap-4 ">
        <ProductCardSlide item={movies.content} sectionTitle={"Livros"} />
      </div>

    </main>
  );
}
