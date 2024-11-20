import GraphqlMutationPage from "@/app/section35/35-05-jest-unit-test-mocking/page";
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import fetch from "cross-fetch";
import { useRouter } from "next/navigation";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn().mockReturnValue({
    push: jest.fn(),
  }),
}));

it("게시글 잘 등록되는지 테스트 하자!", async () => {
  const client = new ApolloClient({
    link: new HttpLink({
      uri: "http://mock.com/graphql",
      fetch,
    }),
    cache: new InMemoryCache(),
  });

  render(
    <ApolloProvider client={client}>
      <GraphqlMutationPage />
    </ApolloProvider>
  );

  fireEvent.change(screen.getByRole("input-writer"), {
    target: { value: "맹구" },
  });

  fireEvent.change(screen.getByRole("input-title"), {
    target: { value: "안녕하세요" },
  });

  fireEvent.change(screen.getByRole("input-contents"), {
    target: { value: "반갑습니다" },
  });

  fireEvent.click(screen.getByRole("submit-button"));

  await waitFor(() => {
    const router = useRouter();
    expect(router.push).toHaveBeenCalled(); // 위에서 가짜(mock)를 만들었으므로, 실제 이동되지 않음!(실행됐는지만 확인)
  });
});
