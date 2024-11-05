"use client";

import * as PortOne from "@portone/browser-sdk/v2";
import { v4 as uuidv4 } from "uuid";

export default function PaymentPage() {
  const onClickPayment = async () => {
    const result = await PortOne.requestPayment({
      storeId: "store-5276e0df-f0e5-438d-9676-14f1d480b36d",
      channelKey: "channel-key-7b5bb2de-3f5a-4175-a239-e8f3e5d6707f",
      paymentId: uuidv4(),
      orderName: "마우스",
      totalAmount: 3000,
      currency: "CURRENCY_KRW",
      payMethod: "EASY_PAY",
      customer: {
        fullName: "철수",
        phoneNumber: "010-1234-5678",
        email: "a@a.com",
        address: {
          country: "COUNTRY_KR",
          addressLine1: "서울시",
          addressLine2: "3층",
        },
        zipcode: "11111",
      },
      redirectUrl: "http://localhost:3000/section27/27-01-payment-성공페이지",
    });

    // 결제 성공시 로직
    console.log(result);

    // 백엔드에다 결제관련 데이터 넘겨주기(뮤테이션 실행하기) => 숙제API 에서 사용(주의: storeId, channelKey 변경 필요)
    // createPointTransactionOfLoading(paymentId: ... )
  };

  return <button onClick={onClickPayment}>결제하기</button>;
}
