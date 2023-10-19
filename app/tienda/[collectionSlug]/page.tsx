import { VendureService } from "@/services/vendure.service"
import { ProductItem } from "@/types/products-type"

const ProductsPage = async () => {
  const {products} = await getProducts()
  
    return (
    <div>
        {products.map((product: ProductItem) => { return (
          <div key={product.name}>{product.name}</div>
        )})}
    </div>
    )
}

export default ProductsPage


export const getProducts = async (): Promise<any> => {

  const gqService = new VendureService()
  const {data} = await gqService.fetchProducts()

  return {
      products: data.products.items,
  }
}