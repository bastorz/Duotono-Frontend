import { gql } from "@apollo/client";

export const getAllCollections = gql`
query {
  collections {
    items {
      name
      id
      slug
    }
  }
}
`;