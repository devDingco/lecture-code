import { setupServer } from "msw/node";
import { apis } from "./apis";

export const server = setupServer(...apis);
