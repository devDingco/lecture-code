import { gql } from "@apollo/client";

export const BoardForLikeSet = gql`
  fragment BoardForLikeSet on Board {
    likeCount
    dislikeCount
  }
`;
