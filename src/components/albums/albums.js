import "./albums.css";
import { createElement } from "../../assets/components";

export const createAlbumElement = (album) => {
  const albumImg = createElement("img", {
    src: album.imgSrc,
    alt: "Image of " + album.artist,
  });
  const albumElement = createElement("div", {
    className: "album",
    children: [
      albumImg,
      createElement("div", {
        className: "album__info",
        children: [
          createElement("span", {
            innerText: album.artist,
          }),
          createElement("span", {
            innerHTML: "&#8942",
          }),
        ],
      }),
      createElement("div", {
        className: "album__title",
        children: [
          createElement("span", {
            innerText: album.title,
          }),
          createElement("span", {
            innerText: album.numberSongs,
          }),
        ],
      }),
    ],
  });

  return albumElement;
};
