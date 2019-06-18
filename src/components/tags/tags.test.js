import React from "react";
import { shallow } from "enzyme";
import Tags from ".";

describe("<Tags />", () => {
  it("renders tags without crashing", () => {
    shallow(<Tags data={[]} />);
  });

  it("renders 1 tag with an appropriate description", () => {
    const mockData = {
      tags: ["1"],
      size: 14
    };
    const wrapper = shallow(<Tags data={mockData.tags} size={mockData.size} />);
    expect(wrapper.find("span").text()).toEqual("1 tag");
  });

  it("renders multilple tags with an appropriate description", () => {
    const mockData = {
      tags: ["1", "2"],
      size: 14
    };
    const wrapper = shallow(<Tags data={mockData.tags} size={mockData.size} />);
    expect(wrapper.find("span").text()).toEqual("2 tags");
  });
});
