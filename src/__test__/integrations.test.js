import React from "react";
import { mount } from "enzyme";
import moxios from "moxios";
import App from "components/App";
import Root from "Root";
require("../setupTests.js");

beforeEach(() => {
  moxios.install();
  moxios.stubRequest("https://jsonplaceholder.typicode.com/comments", {
    status: 200,
    response: [{ name: "Fetched #1" }, { name: "Fetched #2" }]
  });
});

afterEach(() => {
  moxios.uninstall();
});

it("can fetch list of comments and display them", done => {
  // render the entire app
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );

  // Find the 'fetchComment' button and click it

  wrapped.find(".fetch-comments").simulate("click");

  // introduce tiny Pause
  moxios.wait(() => {
    wrapped.update();
    expect(wrapped.find("li").length).toEqual(2);
    done();
    wrapped.unmount();
  });

  // Expect to find a list of comments
});
