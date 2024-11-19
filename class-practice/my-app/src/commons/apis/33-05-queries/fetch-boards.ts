import { gql } from "@apollo/client";
import { BoardForAddressSet } from "../33-05-fragments/board-for-address-set";
import { BoardForLikeSet } from "../33-05-fragments/board-for-like-set";

// 1. 프레그먼트를 하나로 묶는 기본 방법
// export const FETCH_BOARDS = gql`
//   fragment BoardForAddressSet on Board {
//     boardAddress {
//       address
//       addressDetail
//       zipcode
//     }
//   }

//   fragment BoardForLikeSet on Board {
//     likeCount
//     dislikeCount
//   }

//   query fetchBoards(
//     $mypage: Int
//     $isBoardForAddressSet: Boolean = false
//     $isBoardForLikeSet: Boolean = false
//   ) {
//     fetchBoards(page: $mypage) {
//       _id
//       writer
//       title
//       contents

//       ...BoardForAddressSet @include(if: $isBoardForAddressSet)
//       ...BoardForLikeSet @include(if: $isBoardForLikeSet)
//     }
//   }
// `;

// 2. 프레그먼트를 파일로 분리하여 결합하는 방법
export const FETCH_BOARDS = gql`
  ${BoardForAddressSet}
  ${BoardForLikeSet}

  query fetchBoards(
    $mypage: Int
    $isBoardForAddressSet: Boolean = false
    $isBoardForLikeSet: Boolean = false
  ) {
    fetchBoards(page: $mypage) {
      _id
      writer
      title
      contents

      ...BoardForAddressSet @include(if: $isBoardForAddressSet)
      ...BoardForLikeSet @include(if: $isBoardForLikeSet)
    }
  }
`;
