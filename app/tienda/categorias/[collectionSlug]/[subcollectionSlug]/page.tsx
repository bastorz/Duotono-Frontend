import CategoryBanner from "@/components/tienda/categorias/category-banner";
import FAQ from "@/components/tienda/categorias/faq";
import SubcategoryCard from "@/components/tienda/categorias/subcategory-card";
import { getClient } from "@/lib/client";
import { getCollectionBySlug } from "@/queries/collection-details-by-slug.queries";
import { ProductList } from "@/types/collections-type";
import { redirect } from "next/navigation";

export default async function Page({params}: {params: {subcollectionSlug: string}}) {

  const paramsSlug = params['subcollectionSlug']

  const {collection} = await fetchCollectionBySlug(paramsSlug)
  
  if (collection === null) {
    redirect("/")
  }

  const products = collection.productVariants.items.map((product: ProductList) => product.product)

  return (
    <div>
      <div className="xl:px-32 xl:py-20 space-y-2">
        <h3 className="font-bold text-2xl">{collection.name}</h3>
        <p className="text-black/70 max-w-3xl text-xl">{collection.description ? collection.description : "This is an example of how you can use the component as a variant. Click on the component and in the sidebar on the right you can see all the available options."}</p>
        <div className="grid xl:grid-cols-3 py-10 place-content-between gap-y-20 gap-x-20">
          {products.slice(0, 6).map((product: any) => (
            <div key={product.name}>
              <SubcategoryCard image={product.featuredAsset.preview} name={product.name} productSlug={product.slug} description={product.description} price={54} discountPrice={49.99}/>
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
    if (data.data) {
      return data.data
    } else {
      return null
    }
  } catch (error) {
    console.error(error)
    return [];
  }
}
