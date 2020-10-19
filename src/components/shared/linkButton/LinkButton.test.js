import React from "react";
import { render,unmountComponentAtNode } from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import { act } from "react-dom/test-utils";
import LinkButton from './LinkButton'

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test('Should render LinkButton', async () => {

    act(() => {
        render(<Router><LinkButton text="Test Link" href="/test" /></Router>, container);
      });
      expect(container.textContent).toBe("Test Link");      
  }
)