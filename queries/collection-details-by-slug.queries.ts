import { gql } from "@apollo/client";

export const getCollectionBySlug = gql`
query($slug: String!) {
  collection(slug: $slug) {
    id
    name
    slug
    description
    productVariants {
      items {
        product {
          name
        	slug
          description
          featuredAsset {
            preview
          }
        }
      }
    }
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
          product {
            name
          }
        }
      }
    }
  }
}
`;