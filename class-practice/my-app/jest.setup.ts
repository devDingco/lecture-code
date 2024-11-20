import { server } from "./src/commons/mocks";
beforeAll(() => server.listen());
afterAll(() => server.close());
