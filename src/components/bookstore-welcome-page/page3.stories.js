import { Page3 } from "../../assets/utils/content-pages";
import { createPageElement } from "./welcome-page";

export default {
  title: "Components/Bookstore Welcome Pages",
  parameters: { layout: "centered" },
};
export const ThirdPage = () => createPageElement(Page3);
