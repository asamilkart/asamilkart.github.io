const comics = [
  {
    date: "2026.06.29",
    title: "メタバース初心者",
    link: "20260629.html",
    image: "20260629.png"
  },
  {
    date: "2023.12.14",
    title: "誰と世界を変えていく",
    link: "20231214.html",
    image: "20231214.png"
  },
  {
    date: "2023.12.05",
    title: "あなたと世界を変えていく",
    link: "20231205.html",
    image: "20231205.png"
  }
];


// 1ページに表示する漫画数
const comicsPerPage = 7;


// 現在のページを自動判定
const fileName = location.pathname.split("/").pop();

let currentPage = 1;

const pageMatch = fileName.match(/^metaverse-(\d+)\.html$/);

if (pageMatch) {
  currentPage = Number(pageMatch[1]);
}


// 現在のページに表示する漫画
const start = (currentPage - 1) * comicsPerPage;
const end = start + comicsPerPage;

const currentComics = comics.slice(start, end);


// 漫画一覧を表示
const comicList = document.getElementById("comic-list");

if (comicList) {
  currentComics.forEach(comic => {
    const item = document.createElement("div");

    item.className = "comic-card";

    item.innerHTML = `
      <a href="${comic.link}">
        <img src="${comic.image}" alt="${comic.title}">
      </a>

      <div class="date">${comic.date}</div>

      <div class="title">
        <a href="${comic.link}">${comic.title}</a>
      </div>
    `;

    comicList.appendChild(item);
  });
}


// 全ページ数
const totalPages = Math.ceil(comics.length / comicsPerPage);

const pagination = document.getElementById("pagination");

if (pagination) {

  // 前ページ
  // → 新しい漫画があるページへ戻る
  if (currentPage > 1) {

    const previousPage =
      currentPage === 2
        ? "metaverse.html"
        : `metaverse-${currentPage - 1}.html`;

    pagination.innerHTML += `
      <a href="${previousPage}">&lt;前ページ</a>
      <br><br>
    `;
  }


  // 次ページ
  // → 古い漫画があるページへ進む
  if (currentPage < totalPages) {

    const nextPage =
      currentPage === 1
        ? "metaverse-2.html"
        : `metaverse-${currentPage + 1}.html`;

    pagination.innerHTML += `
      <a href="${nextPage}">次ページ&gt;</a>
      <br><br>
    `;
  }


  // TOP
  pagination.innerHTML += `
    <a href="index.html">TOP</a>
  `;
}
