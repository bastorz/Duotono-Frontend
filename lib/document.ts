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
      price
      sku
      options {
        name
        code
        customFields{
          price
        }
      }
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

export const TRANSITION_ORDER_TO_ARRANGING_PAYMENT = /*GraphQL*/ `
  mutation TransitionToState {
    transitionOrderToState(state: "ArrangingPayment" ) {
      ...ActiveOrder
      ...on OrderStateTransitionError {
        errorCode
        message
        transitionError
        fromState
        toState
      }
    }
  }
  ${ACTIVE_ORDER_FRAGMENT}
`;
export const TRANSITION_ORDER_TO_CANCELLED = /*GraphQL*/ `
  mutation TransitionToState {
    transitionOrderToState(state: "Cancelled" ) {
      ...ActiveOrder
      ...on OrderStateTransitionError {
        errorCode
        message
        transitionError
        fromState
        toState
      }
    }
  }
  ${ACTIVE_ORDER_FRAGMENT}
`;

export const ADD_SHIPPING_METHOD = /*GraphQL*/`
  mutation addShippingMethodToOrder($shippingMethodId: ID!){
    setOrderShippingMethod(shippingMethodId: [$shippingMethodId]) {
      __typename
    }
  }
`
export const ADD_BILLING_ADDRESS = /*GraphQL*/`
mutation addBillingAddress($fullName: String!, $company: String!, $phoneNumber: String!, $streetLine1: String!, $city: String!, $postalCode: String!, $countryCode: String!) {
  setOrderBillingAddress(input: {
    fullName: $fullName,
    company: $company,
    phoneNumber: $phoneNumber,
    streetLine1: $streetLine1,
    city: $city,
    postalCode: $postalCode,
    countryCode: $countryCode,
  }) {
    __typename
    ... on NoActiveOrderError{
      message
      errorCode
    }
  }
}
`
export const ADD_SHIPPING_ADDRESS = /*GraphQL*/`
mutation addShippingAddress($fullName: String!, $company: String!, $phoneNumber: String!, $streetLine1: String!, $city: String!, $postalCode: String!, $countryCode: String!) {
  setOrderShippingAddress(input: {
    fullName: $fullName,
    company: $company,
    phoneNumber: $phoneNumber,
    streetLine1: $streetLine1,
    city: $city,
    postalCode: $postalCode,
    countryCode: $countryCode,
  }) {
    __typename
    ... on NoActiveOrderError{
      message
      errorCode
    }
  }
}
`

export const ADD_PAYMENT_TO_ORDER = /*GraphQL*/`
mutation addPaymentToOrder($method: String!){
  addPaymentToOrder(input: {
    method: $method,
    metadata:{}
    }) {
    __typename
    ... on PaymentDeclinedError {
      message
      paymentErrorMessage
      errorCode
      __typename
    }
  }
}
`;

export const GET_CLIENT_SECRET = /*GraphQL*/`
  mutation {
    createStripePaymentIntent
  }
`;

export const ADD_CUSTOMER_FOR_ORDER = /*GraphQL*/`
  mutation addCustomerForOrder($firstName: String!, $lastName: String!, $phoneNumber: String!, $emailAddress: String!) {
    setCustomerForOrder(input: {
      firstName: $firstName,
      lastName: $lastName,
      phoneNumber: $phoneNumber,
      emailAddress: $emailAddress,
    }) {
      __typename
    }
  }
`

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
    optionGroups {
      name
      options {
        name
        customFields {
          price
        }
      }
    }
    customFields {
      Descripcion_Extra
      Especificaciones_Del_Producto
      Normas_De_Diseno
      Proceso_De_Pedido
    }
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
export const GET_COLLECTIONS = /*GraphQL*/ `
query getAllCollections {
  collections(options: {topLevelOnly: true}) {
    items {
      name
      description
      slug
      featuredAsset {
        preview
      }
    }
  }
}
`;
export const GET_COLLECTIONS_BY_SLUG = /*GraphQL*/ `
query getCollectionsBySlug($slug: String!) {
  collection(slug: $slug) {
    id
    name
    slug
    description
    parent {
      name
      id
      slug
    }
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

export const GET_ELIGIBLE_SHIPPING_METHODS = /*GraphQL*/`
  query {
    eligibleShippingMethods {
      id
      name
      price
    }
  }
`;

