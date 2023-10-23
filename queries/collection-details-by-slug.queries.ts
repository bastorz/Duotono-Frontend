import { gql } from "@apollo/client";

export const getCollectionBySlug = gql`
query($slug: String!) {
  collection(slug: $slug) {
    id
    name
    slug
    children {
      name
      id
      slug
      description
      featuredAsset {
        preview
      }
			productVariants {
        items {
          price
          priceWithTax
        	product {
            name
            slug
            id
            description
            featuredAsset {
              preview
            }
          }
        }
      }
    }
  }
}
`;