import React from "react";
import { shallow } from "enzyme";
import Alert from ".";

it("renders alert without crashing", () => {
  const mockItem = {
    title: "Mock test name",
    type: "ios",
    frequency: ["Immediately"],
    integrations: {
      slack: true,
      email: true
    },
    tags: ["1"]
  };
  const wrapper = shallow(<Alert {...mockItem} />);
  expect(
    wrapper.contains(<div className="name">{mockItem.title}</div>)
  ).toEqual(true);
});
