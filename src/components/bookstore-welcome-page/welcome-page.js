import "./welcome-page.css";
import { createElement } from "../../assets/utils/elements";
import page1Img from "../../assets/background-page1.svg";

export const createPageElement = () => {
  const PageElement = createElement("div", {
    className: "page",
    children: [
      createElement("h1", {
        className: "page-heading",
        innerText: "Discounted Secondhand Books",
      }),
      createElement("p", {
        className: "page-info",
        innerText: "Used and near new secondhand books at great prices.",
      }),
      createElement("img", {
        src: page1Img,
      }),
      createElement("div", {
        children: [
          createElement("span", {
            innerHTML: "&#8729;",
          }),
          createElement("span", {
            innerHTML: "&#8729;",
          }),
          createElement("span", {
            innerHTML: "&#8729;",
          }),
          createElement("span", {
            innerHTML: "&#8729;",
          }),
        ],
      }),
    ],
  });
  return PageElement;
};
