const ACTIVE_ORDER_FRAGMENT = /*GraphQL*/ `
fragment ActiveOrder on Order {
  __typename
  id
  code
  couponCodes
  state
  currencyCode
  totalQuantity
  subTotalWithTax
  shippingWithTax
  totalWithTax
  discounts {
    description
    amountWithTax
  }
  lines {
    id
    unitPriceWithTax
    quantity
    linePriceWithTax
    productVariant {
      id
      name
      sku
    }
    featuredAsset {
      id
      preview
    }
  }
  shippingLines {
    shippingMethod {
      description
    }
    priceWithTax
  }
}`;

export const GET_ACTIVE_ORDER = /*GraphQL*/ `
  query GetActiveOrder {
    activeOrder {
      ...ActiveOrder
    }
  }
  ${ACTIVE_ORDER_FRAGMENT}
`;

export const ADD_ITEM_TO_ORDER = /*GraphQL*/ `
  mutation AddItemToOrder($productVariantId: ID!, $quantity: Int!) {
    addItemToOrder(productVariantId: $productVariantId, quantity: $quantity) {
      ...ActiveOrder
      ... on ErrorResult {
        errorCode
        message
      }
      ... on InsufficientStockError {
        quantityAvailable
        order {
          ...ActiveOrder
        }
      }
    }
  }
  ${ACTIVE_ORDER_FRAGMENT}
`;

export const REMOVE_ITEM_FROM_ORDER = /*GraphQL*/ `
  mutation RemoveItemFromOrder($orderLineId: ID!) {
    removeOrderLine(orderLineId: $orderLineId) {
      ...ActiveOrder
      ... on ErrorResult {
        errorCode
        message
      }
    }
  }
  ${ACTIVE_ORDER_FRAGMENT}
`;

export const ADJUST_ORDER_LINE = /*GraphQL*/ `
  mutation AdjustOrderLine($orderLineId: ID!, $quantity: Int!) {
    adjustOrderLine(orderLineId: $orderLineId, quantity: $quantity) {
      ...ActiveOrder
      ... on ErrorResult {
          errorCode
          message
      }
    }
  }
  ${ACTIVE_ORDER_FRAGMENT}
`;

export const APPLY_COUPON_CODE = /*GraphQL*/ `
  mutation ApplyCouponCode($couponCode: String!) {
    applyCouponCode(couponCode: $couponCode) {
      ...ActiveOrder
      ... on ErrorResult {
        errorCode
        message
      }
    }
  }
  ${ACTIVE_ORDER_FRAGMENT}
`;

export const REMOVE_COUPON_CODE = /*GraphQL*/ `
  mutation RemoveCouponCode($couponCode: String!) {
    removeCouponCode(couponCode: $couponCode) {
      ...ActiveOrder
      ... on ErrorResult {
        errorCode
        message
      }
    }
  }
  ${ACTIVE_ORDER_FRAGMENT}
`;

export const GET_PRODUCT_DETAIL = /*GraphQL*/ `
query GetProductDetail($slug: String!) {
  product(slug: $slug) {
    id
    name
    description
    featuredAsset {
      id
      preview
    }
    assets {
      id
      preview
    }
    variants {
      id
      name
      sku
      stockLevel
      currencyCode
      price
      priceWithTax
      options {
        name
      }
      featuredAsset {
        id
        preview
      }
      assets {
        id
        preview
      }
    }
  }
}
`;