"use client"

import CategoryBanner from "@/components/tienda/categorias/category-banner";
import CollectionCard from "@/components/tienda/categorias/category-card";
import FAQ from "@/components/tienda/categorias/faq";
import { getClient } from "@/lib/client";
import { GET_COLLECTIONS_BY_SLUG } from "@/lib/document";
import { Collection, Collections } from "@/lib/type";
import { useQuery } from "@/lib/use-query";
import Link from "next/link";
import Image from "next/image";
import { removeHTMLTags } from "@/lib/utils";

const Page = ({params}: {params: {collectionSlug: string}}) => {

  const paramsSlug = params.collectionSlug

  console.log("paramsSlug", paramsSlug)

  const {
    data: collectionsData,
    loading,
    error,
  } = useQuery<Collection>(GET_COLLECTIONS_BY_SLUG, {
    slug: paramsSlug
  });

  if (loading) return (
    <div className='h-screen flex items-center justify-center'>
        <div className="animate-spin rounded-full border-t-4 border-black h-16 w-16"></div>
    </div>
  )

  return (
    <div>
    <div className="xl:px-32 py-20 flex flex-col space-y-6">
        <h3 className="text-4xl font-bold">{collectionsData?.collection.name}</h3>
        <p className="text-lg">{removeHTMLTags(collectionsData?.collection.description)}</p>
        <div className="space-y-2 grid grid-cols-4 gap-20">
            {collectionsData?.collection.children.map((subcategory) => (
                <div className="flex flex-col space-y-4">
                    <h3 className="font-bold text-2xl">{subcategory.name}</h3>
                    <p className="text-black/70 max-w-3xl text-xl">{removeHTMLTags(subcategory.description)}</p>
                    <Link href={`/tienda/categorias/${subcategory.slug}`}>
                          <Image src={subcategory.featuredAsset.preview} alt="" width={600} height={600} className="object-center w-[600px] h-full"/>
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