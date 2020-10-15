import "./albums.css";

export function createAlbumElement(album) {
  const albumElement = document.createElement("div");
  const albumImg = document.createElement("img");
  const albumInfoLine = document.createElement("div");
  const albumTitleLine = document.createElement("div");
  const albumTitle = document.createElement("span");
  const albumArtist = document.createElement("span");
  const albumSongs = document.createElement("span");
  const albuminfoBtn = document.createElement("span");
  albumImg.src = album.imgSrc;
  albumImg.alt = "Image of " + album.artist;

  albumElement.className = "album";
  albumInfoLine.className = "album__info";
  albumTitleLine.className = "album__title";

  albumTitle.innerText = album.title;
  albumArtist.innerText = album.artist;
  albumSongs.innerText = album.numberSongs;
  albuminfoBtn.innerHTML = "&#8942";

  albumElement.append(albumImg, albumInfoLine, albumTitleLine);
  albumInfoLine.append(albumArtist, albuminfoBtn);
  albumTitleLine.append(albumTitle, albumSongs);

  return albumElement;
}
