"use client";

import { gql, useQuery } from "@apollo/client";
import { useParams } from "next/navigation";

const FETCH_TRAVELPRODUCT = gql`
  query fetchTravelproduct($travelproductId: ID!) {
    fetchTravelproduct(travelproductId: $travelproductId) {
      _id
      name
      remarks
      images
    }
  }
`;

export default function OpengraphProviderLayout({ children }) {
  // 1. useParams로 travelproductId 가져오기
  const params = useParams();

  // 2. travelproductId로 상품 조회하기 => useQuery
  const { data } = useQuery(FETCH_TRAVELPRODUCT, {
    variables: { travelproductId: params.travelproductId },
  });

  // 3. data로 <meta /> 바꾸기
  return (
    <>
      <meta property="og:title" content={data?.fetchTravelproduct?.name} />
      <meta
        property="og:description"
        content={data?.fetchTravelproduct?.remarks}
      />
      <meta
        property="og:image"
        content={data?.fetchTravelproduct?.images?.[0]}
      />
      <>{children}</>
    </>
  );
}
