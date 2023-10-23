import CategoryBanner from "@/components/tienda/categorias/category-banner";
import CategoryCard from "@/components/tienda/categorias/category-card";
import FAQ from "@/components/tienda/categorias/faq";
import { getClient } from "@/lib/client";
import { getCollectionBySlug } from "@/queries/collection-details-by-slug.queries";
import { getAllCollections } from "@/queries/collections-queries";
import { Collection, CollectionResult, Subcollection } from "@/types/collections-type";
import { redirect } from "next/navigation";

async function fetchAllCollections() {
  try {
    const data = await getClient().query({
      query: getAllCollections,
    });
    return data.data.collections
  } catch (error) {
    console.error(error)
    return [];
  }

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

export default async function Page({params}: {params: {collectionSlug: string}}) {

  const paramsSlug = params.collectionSlug
  const {collection} = await fetchCollectionBySlug(paramsSlug)

  console.log(collection)

  if (paramsSlug !== collection.slug) {
    redirect("/")
  }

  return (
    <div>
      <div className="xl:px-32 xl:py-20 space-y-2">
        <h3 className="font-bold text-2xl">{collection.name}</h3>
        <p className="text-black/70 max-w-3xl text-xl">This is an example of how you can use the component as a variant. Click on the component and in the sidebar on the right you can see all the available options.</p>
        <div className="grid xl:grid-cols-4 py-10 place-content-between">
          {collection.children.map((subcollection: Subcollection) => (
            <div key={subcollection.name}>
              <CategoryCard image={subcollection.featuredAsset.preview} name={subcollection.name} slug={subcollection.slug} description={subcollection.description} price={54} discountPrice={49.9}/>
            </div>
          ))}
        </div>
      </div>
      <CategoryBanner/>
      <FAQ/>
    </div>

  )
}



///////////////////////////

// const fetchCollections = async (slugs) => {
//   const promises = slugs.map(async (slug) => {
//     const collection = await getClient().query<Collection>({
//       query: collectionDetailsBySlug,
//       variables: { slug: slug }
//     });
//     return collection.data.collection;
//   });

//   const collections = await Promise.all(promises);
//   return collections;
// };

// // Call the function with your slugs array
// fetchCollections(slugs).then((collections) => {
//   console.log(collections); // Access the collections here
// });