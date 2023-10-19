import { productDetailsBySlug } from "@/queries/product-details-by-slug.queries";
import {
  ApolloClient,
  ApolloQueryResult,
  InMemoryCache,
} from "@apollo/client";

export class VendureService {
  private client;

  constructor() {
    this.client = new ApolloClient({
      uri: "http://localhost:3000/shop-api",
      cache: new InMemoryCache(),
    });
  }

  public fetchProductBySlugs = async (
    slug: string
  ): Promise<ApolloQueryResult<any>> => {
    const response = await this.client.query({
      query: productDetailsBySlug,
      variables: { slug },
    });
    return response;
  };
}
