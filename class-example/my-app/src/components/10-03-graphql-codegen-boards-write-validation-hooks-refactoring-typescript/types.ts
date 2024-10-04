import { FetchBoardQuery } from "@/commons/graphql/graphql";

export interface IBoardsWriteProps {
  isEdit: boolean;
  // data?: any; // 백엔드에서 어떤 데이터 주는지 하나하나 입력해야함 => 하지만, 이미 입력된 타입 다운로드 받을 예정
  data?: FetchBoardQuery;
}

export interface IMyvariables {
  mynumber: number;
  mywriter?: string;
  mytitle?: string;
  mycontents?: string;
}
