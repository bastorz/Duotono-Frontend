'use client';

import CategoryBanner from '@/components/tienda/categorias/category-banner';
import CollectionCard from '@/components/tienda/categorias/category-card';
import FAQ from '@/components/tienda/categorias/faq';
import { getClient } from '@/lib/client';
import { GET_COLLECTIONS_BY_SLUG } from '@/lib/document';
import { Collection, Collections } from '@/lib/type';
import { useQuery } from '@/lib/use-query';
import Link from 'next/link';
import Image from 'next/image';
import { formatCurrency, removeHTMLTags } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { ArrowRight, ArrowRightFromLine, ShoppingBag } from 'lucide-react';

const Page = ({ params }: { params: { collectionSlug: string } }) => {
  const paramsSlug = params.collectionSlug;
  const router = useRouter();
  const {
    data: collectionsData,
    loading,
    error,
  } = useQuery<Collection>(GET_COLLECTIONS_BY_SLUG, {
    slug: paramsSlug,
  });

  if (loading)
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full border-t-4 border-black h-16 w-16"></div>
      </div>
    );

  const uniqueProductNames = new Set();

  const filteredProducts =
    collectionsData?.collection.productVariants.items.filter((item) => {
      const productName = item.product.name;

      if (!uniqueProductNames.has(productName)) {
        uniqueProductNames.add(productName);
        return true;
      }

      return false;
    });

  return (
    <div>
      <div className="xl:px-32 px-8 py-20 flex flex-col space-y-6 h-full">
        <h3 className="text-4xl font-bold">
          {collectionsData?.collection.name}
        </h3>
        <p className="text-lg max-w-[20rem] xl:max-w-[50rem]">
          {removeHTMLTags(collectionsData?.collection.description)}
        </p>
        <div className="space-y-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-20 place-items-center">
          {collectionsData?.collection.children.map((subcategory, i) => (
            <div className="flex flex-col h-full justify-between py-10" key={i}>
              <Link
                href={`/tienda/categorias/${subcategory.slug}`}
                className="min-h-[300px] relative group"
              >
                <Image
                  src={subcategory.featuredAsset.preview}
                  alt=""
                  width={600}
                  height={600}
                  className="object-center max-w-[300px] transition-transform transform-gpu duration-300 group-hover:scale-110"
                />
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 "></span>
              </Link>
              <div className="flex flex-col space-y-4 pt-4">
                <h3 className="font-bold text-2xl">{subcategory.name}</h3>
                <p className="text-black/70 xl:max-w-3xl xl:text-xl max-w-[20rem]">
                  {removeHTMLTags(subcategory.description)}
                </p>
                <Link
                  href={`/tienda/categorias/${subcategory.slug}`}
                  className="flex space-x-1 items-center  group"
                >
                  <p className="font-bold text-lg">Ir a la sección</p>
                  <ArrowRight className="w-8 h-8 group-hover:text-first duration-400 transition" />
                </Link>
              </div>
            </div>
          ))}
          {filteredProducts?.map((item) => (
            <div key={item.name} className="flex flex-col space-y-4 ">
              <Link
                href={`/tienda/productos/${item.product.slug}`}
                className="min-h-[300px] relative group"
              >
                <Image
                  src={item.product.featuredAsset.preview}
                  alt=""
                  width={600}
                  height={600}
                  className="object-center max-w-[300px] transition-transform transform-gpu duration-300 group-hover:scale-110"
                />
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 "></span>
              </Link>
              <h3 className="font-bold text-2xl">{item.product.name}</h3>
              <p className="text-gray-500 max-w-[300px]">
                {removeHTMLTags(item.product.description)}
              </p>
              <p className="text-gray-500">1000 unidades por</p>
              <div className="flex space-x-5">
                <p className="text-red-500">
                  {formatCurrency(item.product.customFields.PrecioBase)}
                </p>
                <p className="font-bold text-xl">
                  {formatCurrency(item.product.customFields.Precio1000Unidades)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <CategoryBanner />
      <FAQ />
    </div>
  );
};

export default Page;
