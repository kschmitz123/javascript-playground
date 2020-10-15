import "./albums.css";
import albumImgHistory from "../../assets/history-album.png";

export function createAlbumElement() {
  const albumElement = document.createElement("div");
  albumElement.className = "album";
  const albumImg = document.createElement("img");
  albumImg.src = albumImgHistory;
  const albumInfoLine = document.createElement("div");
  albumInfoLine.className = "album__info";
  const albumTitleLine = document.createElement("div");
  albumTitleLine.className = "album__title";

  const albumTitle = document.createElement("span");
  albumTitle.innerText = "History";
  const albumArtist = document.createElement("span");
  albumArtist.innerText = "Michael Jackson";
  const albumSongs = document.createElement("span");
  albumSongs.innerText = "10 Songs";
  const albuminfoBtn = document.createElement("span");
  albuminfoBtn.innerHTML = "&#8942";

  albumElement.append(albumImg, albumInfoLine, albumTitleLine);
  albumInfoLine.append(albumArtist, albuminfoBtn);
  albumTitleLine.append(albumTitle, albumSongs);

  return albumElement;
}
