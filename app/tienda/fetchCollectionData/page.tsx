import { getClient } from "@/lib/client";
import { getCollectionBySlug } from "@/queries/collection-details-by-slug.queries";
import { getAllCollections } from "@/queries/collections-queries";
import {  Data } from "@/types/collections-type";
export const dynamic = "force-dynamic";

export default async function fetchCollectionData() {

  const {data} = await getClient().query<Data>({
    query: getAllCollections,
  });

  const collectionSlugs = data.collections.items.map((item) => item.slug)
  

  const fetchCollection = () => {

   const collection = collectionSlugs.forEach(async(collectionSlug) => {
      await getClient().query({
      query: getCollectionBySlug,
      variables: {slug: collectionSlug}
      })
      console.log("asdasdasda", collection)
      return collection
   })
 }

 const result = fetchCollection()

 console.log("adas", result)
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