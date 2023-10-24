import { getClient } from "@/lib/client";
import { getProductBySlug } from "@/queries/product-details-by-slug.queries";
import { ArrowRight, ChevronRight, Home, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import Image from "next/image";
import { formatter } from "@/lib/utils";
import { ProductDetailedTabs } from "@/components/tienda/productos/ProductDetailedTabs";
import { Button } from "@/components/ui/button";
import ProductVariantDetails from "@/components/tienda/productos/productVariantDetails";

export default async function Page({params}: {params: {slug: string}}) {

  const paramsSlug = params.slug
  const {product} = await fetchProductBySlug(paramsSlug)
  const collectionSlug = product.collections.map((collection: { slug: string }) => collection.slug)
  const redirectToStore = `/tienda/categorias/${collectionSlug}`

  return (
    <div>
        <div className="px-32 py-20">
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="flex gap-x-4">
                <Home color="black"/>
                <p>Home</p>
              </Link>
            </li>
            <li className="flex space-x-4">
            <Link href={redirectToStore} className="flex gap-x-4">
                <ChevronRight color="black"/>
                <p>Tienda</p>
              </Link>
            </li>
            <li className="flex space-x-4">
              <Link href={paramsSlug} className="flex gap-x-4">
                <ChevronRight color="black"/>
                <p className="font-semibold">{product.name}</p>
              </Link>
            </li>
          </ul>
        </div>
       <div className="flex mx-32 bg-black mb-10">
          <Image src={product.featuredAsset.preview} alt="" width={500} height={400} />
          <div className="flex flex-col p-10">
            <div className="h-[500px] bg-black w-full space-y-4">
                <p className="text-white font-semibold text-lg">{product.name}</p>
                <p className="text-white max-w-xl">{product.description}</p>
                <p className="text-white text-3xl">{formatter.format(Number(product.variants[0].price))}</p>
            <ProductDetailedTabs/>
            </div>
            <div className="flex gap-x-4">
                <Button variant="default" className="bg-main gap-x-4 w-60 text-black bg-first">
                <ShoppingCart />
                <p className="text-[16px]">Añadir al carrito</p>
                <ArrowRight />
                </Button>
                <Button variant="ghost" className="gap-x-4 border border-white hover:bg-white group">
                <p className="text-[16px] text-white group-hover:text-black">Necesito ayuda</p>
                </Button>
            </div>
          </div>
       </div>

       <div className="grid grid-cols-6 pb-10 px-28">
        <div className="col-span-4">
          <ProductVariantDetails/>
        </div>
        <div className="border border-red-500 col-span-2">sidebar</div>
       </div>

    </div>
  )
}

async function fetchProductBySlug(slug: string) {
  try {
    const data = await getClient().query({
      query: getProductBySlug,
      variables: {slug: slug}
    });
    return data.data
  } catch (error) {
    console.error(error)
    return [];
  }
}