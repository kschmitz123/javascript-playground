import { createAlbumElement } from "./albums";
import albumImgHistory from "../../assets/history-album.png";
import albumImgThriller from "../../assets/thriller-album.png";

export default {
  title: "Components/Albums",
  parameters: { layout: "centered" },
};

export const History = (album) =>
  createAlbumElement({
    title: "History",
    artist: "Michael Jackson",
    imgSrc: albumImgHistory,
    numberSongs: "10 Songs",
  });

export const Thriller = (album) =>
  createAlbumElement({
    title: "Thriller",
    artist: "Michael Jackson",
    imgSrc: albumImgThriller,
    numberSongs: "10Songs",
  });
