import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://main-example.codebootcamp.co.kr/graphql",
  documents: ["src/**/*.tsx", "src/**/*.ts"],
  generates: {
    "./src/commons/graphql/": {
      preset: "client",
    },
  },
};
export default config;
