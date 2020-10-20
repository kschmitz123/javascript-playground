import { Page1 } from "../../assets/utils/content-pages";
import { createPageElement } from "./welcome-page";

export default {
  title: "Components/Bookstore Welcome Pages",
  parameters: { layout: "centered" },
};
export const FirstPage = () => createPageElement(Page1);
