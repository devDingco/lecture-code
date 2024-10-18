import { DataSource } from "typeorm";
import { Board } from "./Board.postgres";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

console.log("백엔드 프로그램을 실행합니다.");

console.log("여기서 API를 만들거예요");
// 1. API-DOCS 만들기
const typeDefs = `#graphql
  input CreateBoardInput {
    writer: String
    title: String
    contents: String
  }


  type MyBoard {
    id: Int
    writer: String
    title: String
    contents: String
  }

  type Query {
    fetchBoards: [MyBoard]
  }

  type Mutation {
    # 연습용(main-example 방식)
    # createBoard(writer: String, title: String, contents: String): String!

    # 실무용(main-practice 방식)
    createBoard(createBoardInput: CreateBoardInput!): String!
  }
`;

// 2. API 만들기
const resolvers = {
  Query: {
    fetchBoards: async () => {
      // 1. 모두 꺼내기
      const result = await Board.find();
      return result;

      // 2. 한개만 꺼내기
      // const result = await Board.findOne({
      //   where: { number: 3 },
      // });
      // return result;
    },
  },

  Mutation: {
    createBoard: async (parent: any, args: any, context: any, info: any) => {
      await Board.insert({
        ...args.createBoardInput,

        // writer: args.createBoardInput.writer,
        // title: args.createBoardInput.title,
        // contents: args.createBoardInput.contents,
      });
      return "게시글 등록에 성공했어요!!";
    },

    // updateBoard: async () => {
    //   // 3번 게시글의 작성자를 영희로 바꿔줘!
    //   await Board.update({ id: 3 }, { writer: "영희" });
    // },

    // deleteBoard: () => {
    //   Board.delete({ id: 3 }); // 3번 게시글 삭제해줘!
    //   Board.update({ id: 3 }, { isDeleted: true }); // 소프트딜리트(3번 게시글 삭제했다 치자!)
    //   Board.update({ id: 3 }, { deletedAt: new Date() }); // 소프트딜리트 => 시간까지 기록 가능한 방법
    //   Board.softRemove(); // 내장 소프트딜리트
    // },
  },
};

// 3. API-DOCS와 API를 그룹핑한 아폴로서버 만들기
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

console.log("여기서 DB에 접속하고, 테이블을 만들거예요");
export const AppDataSource = new DataSource({
  type: "postgres",
  host: "34.64.38.113",
  port: 5032,
  username: "postgres",
  password: "postgres2022",
  database: "postgres",
  synchronize: true,
  logging: true,
  entities: [Board],
});

AppDataSource.initialize()
  .then(() => {
    console.log("DB접속에 성공했습니다. 동기화 할게요!");

    // 4. 최종 완성된 아폴로서버 실행시키기(리스닝하기 => 대기하기)
    startStandaloneServer(server, {
      listen: { port: 4000 },
    }).then(() => {
      console.log("그래프큐엘 서버가 실행되었습니다!!!");
    });
  })
  .catch((error) => {
    console.log("DB접속에 실패했습니다!!!");
    console.log("원인: ", error);
  });
