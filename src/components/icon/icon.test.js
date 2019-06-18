import React from "react";
import { shallow } from "enzyme";
import Icon from ".";

it("renders icon without crashing", () => {
  shallow(<Icon name="plus" />);
});
