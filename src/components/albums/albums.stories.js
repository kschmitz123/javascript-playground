import { createAlbumElement } from "./albums";
import albumImgHistory from "../../assets/history-album.png";
import albumImgThriller from "../../assets/thriller-album.png";

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
    numberSongs: "10Songs",
  };

  const container = document.createElement("div");

  const albumlist = [History, Thriller];

  albumlist.forEach((album) => {
    const albumElement = createAlbumElement(album);
    container.append(albumElement);
  });

  return container;
};
