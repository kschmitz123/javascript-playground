import { createPageElement } from "./welcome-page";
// import page1Img from "../../assets/background-page1.svg";
// import page2Img from "../../assets/background-page2.svg";
// import page3Img from "../../assets/background-page3.svg";

export default {
  title: "Components/Bookstore Welcome Pages",
  parameters: { layout: "centered" },
};
export const Page1 = () => createPageElement();
//   const Page1 = {
//     heading: "Discounted Secondhand Books",
//     info: "Used and near new secondhand books at great prices.",
//     img: page1Img,
//   };
// };

// export const Page1 = () => {
//   const Page1 = {
//     heading: "Discounted Secondhand Books",
//     info: "Used and near new secondhand books at great prices.",
//     img: page1Img,
//   };
//   return Page1;
// };

// const Page2 = {
//   heading: "20 Book Grocers Nationally",
//   info: "We've successfully opened 20 stores across Australia.",
//   img: page2Img,
// };
// const Page3 = {
//   heading: "Sell or Recycle Your Old Books With Us",
//   info:
//     "If you're looking to downsize, sell or recycle old books, the Book Grocer can help.",
//   img: page3Img,
// };
