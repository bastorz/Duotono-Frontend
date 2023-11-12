"use client"

import CategoryBanner from "@/components/tienda/categorias/category-banner"
import CollectionCard from "@/components/tienda/categorias/category-card"
import FAQ from "@/components/tienda/categorias/faq"
import { GET_COLLECTIONS } from "@/lib/document";
import { Collections } from "@/lib/type";
import { useQuery } from "@/lib/use-query";
import { removeHTMLTags } from "@/lib/utils";
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
            <div className="xl:px-32 py-20 flex flex-col space-y-10">
                <h3 className="text-4xl font-bold">Tienda</h3>
                <div className="space-y-2 grid grid-cols-3 gap-20">
                    {collectionsData?.collections.items.map((collection) => (
                        <div className="flex flex-col space-y-4">
                            <h3 className="font-bold text-2xl">{collection.name}</h3>
                            <p className="text-black/70 max-w-3xl text-xl">{removeHTMLTags(collection.description)}</p>
                            <Link href={`/tienda/categorias/${collection.slug}`}>
                                  <Image src={collection.featuredAsset.preview} alt="" width={600} height={600} className="object-center w-[600px] h-full"/>
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