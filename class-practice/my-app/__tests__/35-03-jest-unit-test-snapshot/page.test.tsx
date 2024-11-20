import { render } from "@testing-library/react";
import JestUnitTestSnapshotPage from "@/app/section35/35-03-jest-unit-test-snapshot/page";
import "@testing-library/jest-dom";

it("기존 사진이랑 바뀐게 없는지 비교해보자!! - 스냅샷 테스트", () => {
  const result = render(<JestUnitTestSnapshotPage />);
  expect(result.container).toMatchSnapshot();
});
