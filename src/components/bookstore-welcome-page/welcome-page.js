import "./welcome-page.css";

import { createElement } from "../../assets/utils/elements";

export const createPageElement = (page) => {
  const PageElement = createElement("div", {
    className: "page",
    children: [
      createElement("h1", {
        className: "page-heading",
        innerText: page.heading,
      }),
      createElement("p", {
        className: "page-info",
        innerText: page.info,
      }),
      createElement("img", {
        src: page.img,
      }),
      createElement("div", {
        className: "navbar",
        children: [
          createElement("div", {
            className: "circle",
          }),
          createElement("div", {
            className: "circle",
          }),
          createElement("div", {
            className: "circle",
          }),
          createElement("div", {
            className: "circle",
          }),
        ],
      }),
    ],
  });
  return PageElement;
};
