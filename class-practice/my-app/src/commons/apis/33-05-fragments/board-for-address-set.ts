import { gql } from "@apollo/client";

export const BoardForAddressSet = gql`
  fragment BoardForAddressSet on Board {
    boardAddress {
      address
      addressDetail
      zipcode
    }
  }
`;
