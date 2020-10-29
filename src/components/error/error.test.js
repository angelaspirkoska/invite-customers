import React from "react";
import { shallow } from "enzyme";
import Error from "./error";

const ComponentWithError = () => null;

test("should display an error message if wrapped component throws", () => {
  const wrapper = shallow(
    <Error>
      <ComponentWithError />
    </Error>
  );

  const error = new Error("test");
  wrapper.find(ComponentWithError).simulateError(error);

  const hasError = wrapper.state().hasError;
  expect(hasError).toEqual(true);
});
