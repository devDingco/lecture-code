import { HttpResponse, graphql } from "msw";

const gql = graphql.link("http://mock.com/graphql");

export const apis = [
  gql.mutation("createBoard", ({ variables }) => {
    const { writer, title, contents } = variables.createBoardInput;

    return HttpResponse.json({
      data: {
        createBoard: {
          _id: "qqq",
          writer,
          title,
          contents,
          __typename: "Board",
        },
      },
    });
  }),
];
