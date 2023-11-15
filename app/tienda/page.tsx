"use client"

import CategoryBanner from "@/components/tienda/categorias/category-banner"
import CollectionCard from "@/components/tienda/categorias/category-card"
import FAQ from "@/components/tienda/categorias/faq"
import { GET_COLLECTIONS } from "@/lib/document";
import { Collections } from "@/lib/type";
import { useQuery } from "@/lib/use-query";
import { removeHTMLTags } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Page = () => {

    const {
        data: collectionsData,
        loading,
        error,
      } = useQuery<Collections>(GET_COLLECTIONS);

      if (loading) return (
        <div className='h-screen flex items-center justify-center'>
            <div className="animate-spin rounded-full border-t-4 border-black h-16 w-16"></div>
        </div>
      )

    return (
        <div>
            <div className="xl:px-32 py-20 px-8 flex flex-col space-y-10">
                <h3 className="text-4xl font-bold">Tienda</h3>
                <div className="space-y-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-20">
                    {collectionsData?.collections.items.map((collection) => (
                        <div className="flex flex-col space-y-8 ">
                            <h3 className="font-bold text-2xl">{collection.name}</h3>
                            <Link href={`/tienda/categorias/${collection.slug}`} className="relative group">
                                <Image src={collection.featuredAsset.preview} alt="" width={600} height={600} className="object-center max-w-[300px] transition-transform transform-gpu duration-300 group-hover:scale-110"/>
                                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 ">
                                </span>
                            </Link>
                            <p className="text-black/70 max-w-3xl text-xl">{removeHTMLTags(collection.description)}</p>
                            <Link href={`/tienda/categorias/${collection.slug}`} className="flex space-x-1 items-center  group">
                                <p className="font-bold text-lg">Ir a la sección</p>
                                <ArrowRight className="w-8 h-8 group-hover:text-first duration-400 transition"  />
                            </Link>
                        </div>
                    ))}
                </div>
          </div>
            <CategoryBanner/>
            <FAQ/>
        </div>
    )
}

export default Page