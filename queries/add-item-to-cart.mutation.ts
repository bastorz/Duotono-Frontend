import { gql } from "@apollo/client";
import { UPDATED_ORDER_FRAGMENT } from "./updated-order.fragment";

export const AddItemToOrder = gql`
mutation AddItemToOrder($variantId: ID!, $quantity: Int!) {
  addItemToOrder(productVariantId: $variantId, quantity: $quantity) {
    __typename
    ...UpdatedOrder
    ... on ErrorResult {
      errorCode
      message
    }
    ... on InsufficientStockError {
      quantityAvailable 
      order {
        ...UpdatedOrder
      }
    }
  }
}
${UPDATED_ORDER_FRAGMENT}
`;