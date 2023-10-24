import CategoryBanner from "@/components/tienda/categorias/category-banner";
import CollectionCard from "@/components/tienda/categorias/category-card";
import FAQ from "@/components/tienda/categorias/faq";
import { getClient } from "@/lib/client";
import { getCollectionBySlug } from "@/queries/collection-details-by-slug.queries";
import { Subcollection } from "@/types/collections-type";
import { redirect } from "next/navigation";

export default async function Page({params}: {params: {collectionSlug: string}}) {

  const paramsSlug = params.collectionSlug
  const {collection} = await fetchCollectionBySlug(paramsSlug)

  if (collection === null) {
    redirect("/")
  }

  return (
    <div>
      <div className="xl:px-32 xl:py-20 space-y-2">
        <h3 className="font-bold text-2xl">{collection.name}</h3>
        <p className="text-black/70 max-w-3xl text-xl">This is an example of how you can use the component as a variant. Click on the component and in the sidebar on the right you can see all the available options.</p>
        <div className="grid xl:grid-cols-4 py-10 place-content-between gap-x-20">
          {collection.children.map((subcollection: Subcollection) => (
            <div key={subcollection.name}>
              <CollectionCard image={subcollection.featuredAsset.preview} name={subcollection.name} slug={paramsSlug} description={subcollection.description} price={54} discountPrice={49.99} subcategorySlug={subcollection.slug}/>
            </div>
          ))}
        </div>
      </div>
      <CategoryBanner/>
      <FAQ/>
    </div>
  )
}

async function fetchCollectionBySlug(slug: string) {
  try {
    const data = await getClient().query({
      query: getCollectionBySlug,
      variables: {slug: slug}
    });
    return data.data
  } catch (error) {
    console.error(error)
    return [];
  }
}