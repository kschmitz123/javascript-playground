import { createAlbumElement } from "./albums";
import albumImgHistory from "../../assets/history-album.png";

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
