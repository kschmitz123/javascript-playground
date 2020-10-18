import { createAlbumElement } from "./albums";
import { createElement } from "../../assets/components";
import albumImgHistory from "../../assets/history-album.png";
import albumImgThriller from "../../assets/thriller-album.png";
import albumImgBeyonce from "../../assets/beyonce-album.png";

export default {
  title: "Components/Albums",
  parameters: { layout: "centered" },
};
export const albums = () => {
  const History = {
    title: "History",
    artist: "Michael Jackson",
    imgSrc: albumImgHistory,
    numberSongs: "10 Songs",
  };

  const Thriller = {
    title: "Thriller",
    artist: "Michael Jackson",
    imgSrc: albumImgThriller,
    numberSongs: "10 Songs",
  };

  const Beyonce = {
    title: "I am...yours",
    artist: "Beyonce",
    imgSrc: albumImgBeyonce,
    numberSongs: "10 Songs",
  };

  const container = createElement("div", {
    className: "album-grid",
  });

  const albumlist = [History, Thriller, Beyonce];

  albumlist.forEach((album) => {
    const albumElement = createAlbumElement(album);
    container.append(albumElement);
  });

  return container;
};
