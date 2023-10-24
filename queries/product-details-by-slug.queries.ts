import { gql } from "@apollo/client";

export const getProductBySlug = gql`
  query ($slug: String!) {
    product(slug: $slug) {
      id
      name
      createdAt
      updatedAt
      name
      description
      featuredAsset {
        width
        height
        preview
      }
      variantList {
        totalItems
      }
      variants {
        name
        productId
        price
        id
      }
      collections {
        slug
      }
    }
  }
`;