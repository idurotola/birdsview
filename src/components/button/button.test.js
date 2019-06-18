import React from "react";
import { shallow } from "enzyme";
import Button from ".";

describe("<Button />", () => {
  it("renders button without crashing", () => {
    const wrapper = shallow(
      <Button title="TEST BUTTON" className="TEST CLASS" />
    );
    expect(wrapper.find("button").props().children).toContain("TEST BUTTON");
    expect(wrapper.find("button").props().className).toEqual("TEST CLASS");
  });

  it("simulates click events", () => {
    const onButtonClick = jest.fn();
    const wrapper = shallow(
      <Button
        title="TEST BUTTON"
        className="TEST CLASS"
        onClick={onButtonClick}
      />
    );
    wrapper.find("button").simulate("click");
    expect(onButtonClick).toHaveBeenCalled();
  });
});
