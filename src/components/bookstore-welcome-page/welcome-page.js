import "./welcome-page.css";
import { createElement } from "../../assets/utils/elements";
import page1Img from "../../assets/background-page1.svg";

export const createPageElement = () => {
  const navbar = createElement("ul", {
    className: "pagination",
    children: [
      createElement("li", {
        className: "page-item",
        children: [
          createElement("a", {
            innerText: "1",
            className: "page-link",
            href: "#",
          }),
        ],
      }),
    ],
  });

  const PageElement = createElement("div", {
    className: "page",
    children: [
      createElement("h1", {
        className: "page-heading",
        innerText: "Discounten Secondhand Books",
      }),
      createElement("p", {
        className: "page-info",
        innerText: "Used and near new secondhand books at great prices.",
      }),
      createElement("img", {
        src: page1Img,
      }),
      createElement("nav", {
        children: [navbar],
      }),
    ],
  });
  return PageElement;
};
