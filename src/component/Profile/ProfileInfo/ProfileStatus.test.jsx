import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("Button component", () => {
  test(`after creation <span> should be displayed`, () => {
    const component = create(<ProfileStatus status="HEllo MZFK" />);
    const instance = component.root;
    let span = instance.findByType('span')
    expect(span.length).toBe("Hello MZFK");
  });
});


  test(`after creation <span> should be displayed`, () => {
    const component = create(<ProfileStatus status="HEllo MZFK" />);
    const instance = component.root;
    let span = instance.findByType('span')
    expect(span.length).toBe("Hello MZFK");
  });

  test(`after creation <input> should be displayed`, () => {
    const component = create(<ProfileStatus status="HEllo MZFK" />);
    const instance = component.root;
    expect (()=>{
      let input=instance.findByType('input')
    }).toThrow()
  });

  test(`input should be displayed in editmode instead of span`, () => {
    const component = create(<ProfileStatus status="HEllo MZFK" />);
    const instance = component.root;
    let span = instance.findByType('span');
    span.props.onDoubleClick();
    let input = instance.findByType('input')
    expect(input.props.value).toBe("Hello MZFK");
  });


  test(`should be called callback`, () => {
    const mockCallback = jest.fn()
    const component = create(<ProfileStatus status={mockCallback} />);
    const instance = component.getInstance;
    instance.deactivateEditMode()
    expect(mockCallback.props.value).toBe(1);
  });
