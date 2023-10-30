import { gql } from "@apollo/client";

export const UPDATED_ORDER_FRAGMENT = gql`
fragment UpdatedOrder on Order {
    id
    code
    state
    totalQuantity
    totalWithTax
    currencyCode
    lines {
      id
      unitPriceWithTax
      quantity
      linePriceWithTax
      productVariant {
        id
        name
      }
    }
  }
`

