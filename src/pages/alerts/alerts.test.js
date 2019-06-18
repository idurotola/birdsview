import React from "react";
import { shallow } from "enzyme";
import Alerts from ".";

it("renders alert page without crashing", () => {
  const wrapper = shallow(<Alerts />);
  expect(wrapper.contains(<p className="header">Alerts</p>)).toEqual(true);
});
