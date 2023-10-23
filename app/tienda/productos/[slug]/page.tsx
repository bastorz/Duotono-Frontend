// 'use client'

// import Footer from "@/components/layout/footer";
// import Navbar from "@/components/layout/navbar";
// import { Button } from "@/components/ui/button";
// import { cn, formatter } from "@/lib/utils";
// import { ApolloQueryResult } from "@apollo/client";
// import { ArrowRight, ChevronRight, Home, ShoppingCart } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useEffect, useState } from "react";
// import { ProductDetailedTabs } from "@/components/tienda/productos/ProductDetailedTabs";


// const ProductDetailsPage = () => {
//   const [product, setProduct] = useState<ApolloQueryResult<any>>()
//   const pathname = usePathname()
//   const slug = pathname.replace("/tienda/productos/", "")

//   // useEffect(() => {
//   //   const gqService = new VendureService()
//   //   const getProductsBySlug = async () => {
//   //     return await gqService.fetchProductBySlug(slug)
//   //   }
//   //   const product = getProductsBySlug().then((result) => {
//   //     setProduct(result)
//   //   }).catch((error) => {
//   //     console.error('Error fetching product', error)
//   //   })
//   // }, [])

//     return (
//       <>
//         <Navbar />
//         <div className="px-32 py-20">
//           <ul className="flex space-x-4">
//             <li>
//               <Link href="/" className="flex gap-x-4">
//                 <Home color="black"/>
//                 <p>Home</p>
//               </Link>
//             </li>
//             <li className="flex space-x-4">
//             <Link href="/" className="flex gap-x-4">
//                 <ChevronRight color="black"/>
//                 <p>Tienda</p>
//               </Link>
//             </li>
//             <li className="flex space-x-4">
//               <Link href={slug} className="flex gap-x-4">
//                 <ChevronRight color="black"/>
//                 <p>{product?.data.product.name}</p>
//               </Link>
//             </li>
//           </ul>
//         </div>
//        <div className="flex mx-32 bg-black mb-10">
//           <Image src={product?.data.product.featuredAsset.preview} alt="" width={500} height={400} className="rounded-xl"/>
//           <div className="flex flex-col py-10 ">
//             <div className="h-[500px] bg-black w-full space-y-4">
//                 <p className="text-white font-semibold text-lg">{product?.data.product.name}</p>
//                 <p className="text-white max-w-xl">{product?.data.product.description}</p>
//                 <p className="text-white text-3xl">{formatter.format(Number(product?.data.product.variants[0].price))}</p>
//             <ProductDetailedTabs/>
//             </div>
//             <div className="flex gap-x-4">
//                 <Button variant="default" className="bg-main gap-x-4 w-60 text-black bg-first">
//                 <ShoppingCart />
//                 <p className="text-[16px]">Añadir al carrito</p>
//                 <ArrowRight />
//                 </Button>
//               <Button variant="ghost" className="gap-x-4 border border-white hover:bg-white group">
//                 <p className="text-[16px] text-white group-hover:text-black">Necesito ayuda</p>
//                 </Button>
//             </div>
//           </div>
//        </div>
       
//         <Footer/>
//       </>
//     )
//   } 

//   export default ProductDetailsPage
