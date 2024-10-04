import { gql } from "@apollo/client";

export const 나의그래프큐엘셋팅 = gql`
  # 타입적는곳
  mutation createBoard(
    $mywriter: String
    $mytitle: String
    $mycontents: String
  ) {
    # 전달할 변수 적는곳
    createBoard(writer: $mywriter, title: $mytitle, contents: $mycontents) {
      _id
      number
      message
    }
  }
`;

export const UPDATE_BOARD = gql`
  mutation updateBoard(
    $mynumber: Int
    $mywriter: String
    $mytitle: String
    $mycontents: String
  ) {
    updateBoard(
      number: $mynumber
      writer: $mywriter
      title: $mytitle
      contents: $mycontents
    ) {
      _id
      number
      message
    }
  }
`;
