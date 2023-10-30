import { ACTIVE_ORDER_FRAGMENT } from "./active-order-fragment.fragment";

export const GET_ACTIVE_ORDER = /*GraphQL*/`
  query GetActiveOrder {
    activeOrder {
      ...ActiveOrder
    }
  }
  ${ACTIVE_ORDER_FRAGMENT}
`;