import { gql } from '@apollo/client';

export const GET_ELIGIBLE_SHIPPING_METHODS = gql`
  query {
    eligibleShippingMethods {
      id
      name
    }
  }
`;